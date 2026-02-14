import app from './globals.ts'
import { useAuthStore } from '@/stores'
// import './registerServiceWorker.ts'

const auth = useAuthStore()
await auth.sync()

app.mount('#app')
