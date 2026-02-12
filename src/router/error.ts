export default [
    {
        path: '/error/503',
        name: 'error.503',
        component: () => import('@/pages/error/503Page.vue'),
    },
    {
        path: '/:fallback(.*)*',
        name: 'error.404',
        component: () => import('@/pages/error/404Page.vue'),
    },
]
