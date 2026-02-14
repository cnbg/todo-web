import { createI18n } from 'vue-i18n'
import messages from '@/locales/messages'
import { getLocale } from '@/utils'

const keys = Object.keys(messages) as string[]
const ru = {} as Record<string, string>
const en = {} as Record<string, string>
keys.forEach(key => {
    ru[key] = messages[key]?.ru || key
    en[key] = messages[key]?.en || key
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
