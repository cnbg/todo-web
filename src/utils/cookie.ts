const Cookie = {
    /**
     * Create or Update a cookie
     */
    async set(
        name: string,
        value: string,
        options: {
            days?: number
            path?: string
            domain?: string | null
            secure?: boolean
            sameSite?: 'strict' | 'lax' | 'none'
        } = {},
    ): void {
        await cookieStore.set({
            name: name,
            value: value,
            expires: Date.now() + (options.days ?? 7) * 24 * 60 * 60 * 1000,
            path: options.path,
            domain: options.domain,
            sameSite: options.sameSite || 'strict',
        })
    },

    /**
     * Read a cookie by name
     */
    async get(name: string): string | null {
        const cookie = await cookieStore.get(name)
        return cookie ? cookie.value : null
    },

    /**
     * Delete a cookie by name
     */
    async delete(name: string, options: {
        path?: string
        domain?: string
    } = {}): void {
        await cookieStore.delete({
            name: name,
            path: options.path,
            domain: options.domain,
        })
    },
}

export default Cookie
