import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())

    return {
        plugins: [
            vue(),
            vueDevTools(),
            tailwindcss(),
            VitePWA({
                registerType: 'autoUpdate',
                includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
                workbox: {
                    globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
                },
                devOptions: {
                    enabled: true,
                },
                manifest: {
                    name: 'Todo App',
                    short_name: 'Todo',
                    description: 'A todo application',
                    start_url: '/',
                    id: '/',
                    display: 'standalone',
                    background_color: '#27272a',
                    theme_color: '#41b383',
                    screenshots: [
                        {
                            src: 'img/icons/ios/512.png',
                            sizes: '512x512',
                            type: 'image/png',
                            label: 'Todo App',
                        },
                        {
                            src: 'img/icons/ios/1024.png',
                            sizes: '1024x1024',
                            type: 'image/png',
                            form_factor: 'wide',
                            label: 'Todo App',
                        },
                    ],
                    icons: [
                        {
                            src: 'img/icons/android/android-launcher-512-512.png',
                            sizes: '512x512',
                        },
                        {
                            src: 'img/icons/android/android-launcher-192-192.png',
                            sizes: '192x192',
                        },
                        {
                            src: 'img/icons/android/android-launcher-144-144.png',
                            sizes: '144x144',
                        },
                        {
                            src: 'img/icons/android/android-launcher-96-96.png',
                            sizes: '96x96',
                        },
                        {
                            src: 'img/icons/android/android-launcher-72-72.png',
                            sizes: '72x72',
                        },
                        {
                            src: 'img/icons/android/android-launcher-48-48.png',
                            sizes: '48x48',
                        },
                        {
                            src: 'img/icons/ios/16.png',
                            sizes: '16x16',
                        },
                        {
                            src: 'img/icons/ios/20.png',
                            sizes: '20x20',
                        },
                        {
                            src: 'img/icons/ios/29.png',
                            sizes: '29x29',
                        },
                        {
                            src: 'img/icons/ios/32.png',
                            sizes: '32x32',
                        },
                        {
                            src: 'img/icons/ios/40.png',
                            sizes: '40x40',
                        },
                        {
                            src: 'img/icons/ios/50.png',
                            sizes: '50x50',
                        },
                        {
                            src: 'img/icons/ios/57.png',
                            sizes: '57x57',
                        },
                        {
                            src: 'img/icons/ios/58.png',
                            sizes: '58x58',
                        },
                        {
                            src: 'img/icons/ios/60.png',
                            sizes: '60x60',
                        },
                        {
                            src: 'img/icons/ios/64.png',
                            sizes: '64x64',
                        },
                        {
                            src: 'img/icons/ios/72.png',
                            sizes: '72x72',
                        },
                        {
                            src: 'img/icons/ios/76.png',
                            sizes: '76x76',
                        },
                        {
                            src: 'img/icons/ios/80.png',
                            sizes: '80x80',
                        },
                        {
                            src: 'img/icons/ios/87.png',
                            sizes: '87x87',
                        },
                        {
                            src: 'img/icons/ios/100.png',
                            sizes: '100x100',
                        },
                        {
                            src: 'img/icons/ios/114.png',
                            sizes: '114x114',
                        },
                        {
                            src: 'img/icons/ios/120.png',
                            sizes: '120x120',
                        },
                        {
                            src: 'img/icons/ios/128.png',
                            sizes: '128x128',
                        },
                        {
                            src: 'img/icons/ios/144.png',
                            sizes: '144x144',
                        },
                        {
                            src: 'img/icons/ios/152.png',
                            sizes: '152x152',
                        },
                        {
                            src: 'img/icons/ios/167.png',
                            sizes: '167x167',
                        },
                        {
                            src: 'img/icons/ios/180.png',
                            sizes: '180x180',
                        },
                        {
                            src: 'img/icons/ios/192.png',
                            sizes: '192x192',
                        },
                        {
                            src: 'img/icons/ios/256.png',
                            sizes: '256x256',
                        },
                        {
                            src: 'img/icons/ios/512.png',
                            sizes: '512x512',
                        },
                        {
                            src: 'img/icons/ios/1024.png',
                            sizes: '1024x1024',
                        },
                    ],
                },
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        server: {
            port: Number(env.VITE_PORT) || 3000,
        },
    }
})
