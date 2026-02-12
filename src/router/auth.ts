export default [
    {
        path: '/auth/login',
        name: 'auth.login',
        component: () => import('@/pages/auth/LoginPage.vue'),
    },
    {
        path: '/auth/profile',
        name: 'auth.profile',
        component: () => import('@/pages/auth/ProfilePage.vue'),
    },
]
