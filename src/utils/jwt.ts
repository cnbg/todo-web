import { parseJwt } from '@/utils'

export const isJwtExpired = (token: string) => {
    if (!token) return true

    const jwt_exp = parseJwt(token)?.exp ?? 0

    return Date.now() >= jwt_exp * 1000
}
