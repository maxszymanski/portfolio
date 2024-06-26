import { createContext, useEffect, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [showNav, setShowNav] = useState(false)

    const toggleShowNav = () => {
        setShowNav((is) => !is)
    }

    useEffect(() => {
        if (showNav) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [showNav])

    return (
        <AppContext.Provider
            value={{
                showNav,
                toggleShowNav,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
