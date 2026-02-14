import app from './globals.ts'
import { useAuthStore } from '@/stores'

const auth = useAuthStore()
await auth.sync()

app.mount('#app')
