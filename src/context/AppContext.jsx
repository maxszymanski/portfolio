import { createContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleShowMenu = () => {
        setShowMenu((is) => !is)
    }

    return (
        <AppContext.Provider
            value={{
                showMenu,
                toggleShowMenu,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
