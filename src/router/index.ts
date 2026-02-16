import { createRouter, createWebHistory } from 'vue-router'

import homeRoutes from './home'
import authRoutes from './auth'
import orgRoutes from './org'
import errorRoutes from './error'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...homeRoutes,
        ...authRoutes,
        ...orgRoutes,
        ...errorRoutes,
    ],
})

router.beforeEach(async (to) => {
})

export default router
