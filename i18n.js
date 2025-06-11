import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import plTranslation from './src/locales/pl.json'
import enTranslation from './src/locales/en.json'

const savedLanguage =
    localStorage.getItem('appLanguage') ||
    (navigator.language.startsWith('pl') ? 'pl' : 'en')

const resources = {
    pl: { translation: plTranslation },
    en: { translation: enTranslation },
}

i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'pl',
    supportedLngs: ['en', 'pl'],
    interpolation: { escapeValue: false },
})

export default i18n
