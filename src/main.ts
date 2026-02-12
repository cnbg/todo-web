import app from './globals.ts'
import { useAuthStore } from '@/stores'

const auth = useAuthStore()
await auth.syncWithServer()

app.mount('#app')
