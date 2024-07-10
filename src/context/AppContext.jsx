import { createContext, useEffect, useState } from 'react'
import i18n from '../../i18n'

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [showNav, setShowNav] = useState(false)
    const [appLanguage, setAppLanguage] = useState('en')
    const [hasBorder, setHasBorder] = useState(false)
    const [emailStatus, setEmailStatus] = useState('')
    const [showCookieModal, setShowCookieModal] = useState(
        !localStorage.getItem('cookie')
    )

    const toggleShowNav = () => {
        const mobileScreen = window.innerWidth < 1024
        mobileScreen && setShowNav((is) => !is)
    }

    useEffect(() => {
        const savedLanguage = localStorage.getItem('appLanguage')

        if (savedLanguage) {
            setAppLanguage(savedLanguage)
            i18n.changeLanguage(savedLanguage)
        } else {
            const systemLanguage = navigator.language.startsWith('pl')
                ? 'pl'
                : 'en'
            setAppLanguage(systemLanguage)
            i18n.changeLanguage(systemLanguage)
            localStorage.setItem('appLanguage', systemLanguage)
        }
    }, [])

    const changeLanguage = (lang) => {
        setAppLanguage(lang)
        i18n.changeLanguage(lang)
        localStorage.setItem('appLanguage', lang)
        toggleShowNav()
    }

    useEffect(() => {
        if (showNav) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
            document.body.style.overflowX = 'hidden'
        }

        return () => {
            document.body.style.overflowY = 'auto'
            document.body.style.overflowX = 'auto'
        }
    }, [showNav])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasBorder(true)
            } else {
                setHasBorder(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const closeCookieModal = () => {
        localStorage.setItem('cookie', 'true')
        setShowCookieModal(false)
    }

    return (
        <AppContext.Provider
            value={{
                showNav,
                toggleShowNav,
                setShowNav,
                appLanguage,
                changeLanguage,
                hasBorder,
                emailStatus,
                setEmailStatus,
                showCookieModal,
                closeCookieModal,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
