export interface AuthUser {
    id: number
    name: string
    email: string
    photo?: string,
    org_name?: string,
    type: string
    locale: string
    theme: string
    perms: string[]
}

export interface Org {
    id: number
    name: string
}

export interface LoginRequest {
    email: string
    password: string
}

export interface LoginResponse {
    access_token: string
    refresh_token: string
    user: AuthUser
}
