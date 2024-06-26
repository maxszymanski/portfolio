import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import plTranslation from './src/locales/pl.json'
import enTranslation from './src/locales/en.json'

const resources = {
    pl: { translation: plTranslation },
    en: { translation: enTranslation },
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
})

export default i18n
