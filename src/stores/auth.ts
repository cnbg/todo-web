import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'
import { useAuthHttp } from '@/composables'
import { cookie, getLocale, getTheme, goto, isValidEmail, parseJwt } from '@/utils'
import type { AuthUser, LoginRequest, LoginResponse } from '@/types'

interface AuthState {
    user: AuthUser
    username: string
    password: string
    loading: boolean
    errors: string[]
    error: string
    locale: string
    theme: string
    jwt_exp: number
    locales: { key: string; name: string }[]
}

const baseUrl = import.meta.env.VITE_API_URL!

export const useAuthStore = defineStore('auth-store', {
    state: (): AuthState => ({
        user: {} as AuthUser,
        username: '',
        password: '',
        loading: false,
        errors: [],
        error: '',
        locale: getLocale(),
        theme: getTheme(),
        jwt_exp: 0,
        locales: [
            { key: 'ru', name: 'Русский' },
            { key: 'en', name: 'English' },
        ],
    }),
    getters: {
        isAuth: (state: AuthState) => state.jwt_exp * 1000 > Date.now(),
    },
    actions: {
        async profile() {
            this.loading = true
            this.errors = []

            const { data, error } = await useAuthHttp<AuthUser>('/auth/profile').get().json()

            if (error.value) {
                this.errors.push(error.value.message || 'error_fetching_data')
            } else if (data.value) {
                this.user = data.value as AuthUser
            }

            await this.setLocale(this.user.locale)
            await this.setTheme(this.user.theme)

            this.loading = false
        },
        async login() {
            this.loading = true
            this.errors = []

            if (!this.username) {
                this.errors.push('enter_your_email')
            } else if (!isValidEmail(this.username)) {
                this.errors.push('enter_valid_email')
            }
            if (!this.password) {
                this.errors.push('enter_your_password')
            } else if (this.password.length < 6) {
                this.errors.push('password_length_error')
            }
            if (this.errors.length > 0) {
                this.loading = false
                return
            }

            const { data, error } = await useFetch<LoginResponse>(baseUrl + '/auth/login').post({
                username: this.username,
                password: this.password,
            } as LoginRequest).json()

            if (error.value) {
                this.errors.push(error.value.message || 'invalid_username_or_password')
            } else if (data.value) {
                cookie.set('username', this.username, { days: 365 })
                await this.setData(data.value)
            }

            console.log(this.user)

            this.loading = false
        },
        async refresh() {
            this.loading = true
            this.errors = []

            const refresh_token = await cookie.get('refresh')
            if (!refresh_token) {
                this.loading = false
                await this.logout()
                return
            }
            const { data, error } = await useFetch<LoginResponse>(baseUrl + '/auth/refresh').post({
                refresh_token: refresh_token,
            }).json()

            if (error.value) {
                await this.logout()
            } else if (data.value) {
                await this.setData(data.value)
            }

            this.loading = false
        },
        async logout() {
            this.$reset()

            await this.cleanCookies()
            goto('/auth/login')
        },
        async setData(data: LoginResponse) {
            this.user = data.user as AuthUser

            await this.cleanCookies()

            const access_token = data.access_token
            const refresh_token = data.refresh_token
            this.jwt_exp = parseJwt(access_token)?.exp ?? 0
            if (access_token || refresh_token) {
                cookie.set('access', access_token, { days: 1 })
                cookie.set('refresh', refresh_token, { days: 90 })
            } else {
                this.errors.push('error_fetching_data')
            }
        },
        async cleanCookies() {
            cookie.delete('access')
            cookie.delete('refresh')
        },
        async setLocale(locale?: string, save = false) {
            if (locale !== undefined) {
                this.locale = ['ru', 'en'].find(l => l === locale) ?? this.locale
            }
            localStorage.setItem('locale', this.locale)
            if (save) await useAuthHttp('/auth/update').put({ locale: this.locale }).json()
        },
        async setTheme(theme?: string, save = false) {
            if (theme !== undefined) {
                this.theme = ['light', 'dark'].find(t => t === theme) ?? this.theme
            }
            localStorage.setItem('theme', this.theme)

            if (this.theme === 'dark') {
                document.documentElement.classList.add('p-dark')
            } else {
                document.documentElement.classList.remove('p-dark')
            }
            if (save) await useAuthHttp('/auth/update').put({ theme: this.theme }).json()
        },
        async syncWithServer() {
            await this.sync()
            if (window.location.pathname.includes('/auth/login')) return

            if (!this.isAuth) {
                await this.logout()
                return
            }

            await this.profile()
        },
        async sync() {
            this.jwt_exp = parseJwt(await cookie.get('access') || '')?.exp ?? 0
            await this.setLocale()
            await this.setTheme()
        },
    },
})
