module.exports = {
    // ... other configurations

    pwa: {
        name: 'Todo App',
        short_name: 'Todo',
        description: 'A todo application',
        start_url: '/',
        display: 'standalone',
        background_color: '#27272a',
        theme_color: '#41b383',
        icons: [
            {
                src: '/img/icons/apple-touch-icon-180x180.png',
                sizes: '180x180',
                type: 'image/png',
            },
            {
                src: '/img/icons/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/img/icons/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                src: '/img/icons/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/img/icons/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    },
};
