import { Outlet, useLocation } from 'react-router-dom'

import Navigation from './Navigation'
import NavMobileBox from './NavMobileBox'
import Footer from './Footer'
import { useEffect } from 'react'

function AppLayout() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <>
            <NavMobileBox />
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout
