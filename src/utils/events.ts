import type { ToastMessageOptions } from 'primevue/toast'
import { EventName } from '@/enums'
import type { RefreshTokenEventType } from '@/types'

export function toastEvent(severity: string, summary: string, detail = '', life = 4000) {
    document.dispatchEvent(
        new CustomEvent<ToastMessageOptions>(EventName.SHOW_TOAST, {
            detail: {
                severity: severity,
                summary: summary,
                detail: detail,
                life: life,
            },
        }),
    )
}

export function refreshEvent(message: string, refresh = true, redirect = true) {
    document.dispatchEvent(
        new CustomEvent<RefreshTokenEventType>(EventName.REFRESH_TOKEN, {
            detail: {
                message: message,
                refresh: refresh,
                redirect: redirect,
            },
        }),
    )
}

export function toggleDrawer() {
    document.dispatchEvent(
        new CustomEvent('toggle-drawer', {}),
    )
}
