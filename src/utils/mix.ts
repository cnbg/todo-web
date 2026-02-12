import { usePreferredDark } from '@vueuse/core'

export function parseDate(date, defaultValue = '') {
    try {
        return (new Date(date)).toLocaleDateString()
    } catch (error) {
        return defaultValue
    }
}

export function focusElement(id: string) {
    document.getElementById(id)?.focus()
}

export function goto(path: string) {
    window.location.href = path.startsWith('/') ? path : `/${path}`
}

export function parseJwt(token: string) {
    try {
        const base64Url = token.split('.')[1]
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch (e) {
        return null
    }
}

export function getLocale() {
    return ['ru', 'en'].find(locale => locale === localStorage.getItem('locale')) ?? 'ru'
}

export function getTheme() {
    return ['dark', 'light'].find(theme => theme === localStorage.getItem('theme')) ?? (usePreferredDark().value ? 'dark' : 'light')
}
