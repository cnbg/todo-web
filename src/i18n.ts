import { createI18n } from 'vue-i18n'
import messages from '@/locales/messages'
import { getLocale } from '@/utils'

const keys = Object.keys(messages)
const ru = {}
const en = {}
keys.forEach(key => {
    ru[key] = messages[key]['ru']
    en[key] = messages[key]['en']
})

const i18n = createI18n({
    legacy: false,
    locale: getLocale(),
    fallbackLocale: 'ru',
    messages: {
        ru: ru,
        en: en,
    },
    globalInjection: true,
})

export default i18n
