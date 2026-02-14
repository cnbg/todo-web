import { cookie, goto } from '@/utils'
import { createFetch } from '@vueuse/core'
import { useAuthStore } from '@/stores'

const useAuthHttp = createFetch({
    baseUrl: import.meta.env.VITE_API_URL!,
    options: {
        async beforeFetch({ url, options, cancel }) {
            const access_token = await cookie.get('access')
            const refresh_token = await cookie.get('refresh')
            if (!access_token) {
                cancel()
                if (refresh_token) {
                    await refresh()
                } else {
                    goto('/auth/login')
                }
            }

            options.headers = {
                ...options.headers,
                Authorization: `Bearer ${access_token}`,
            }

            return { url, options, cancel }
        },
        updateDataOnError: true,
        async onFetchError({ error, data, response, context, execute }) {
            if (response?.status === 401) {
                await refresh()
                await execute()
            }
            return { error, data, response, context, execute }
        },
    },
})

async function refresh() {
    const auth = useAuthStore()
    await auth.refresh()
}

export default useAuthHttp
