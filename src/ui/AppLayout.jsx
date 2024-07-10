import { Outlet, useLocation } from 'react-router-dom'

import Navigation from './Navigation'
import NavMobileBox from './NavMobileBox'
import Footer from './Footer'
import { useEffect } from 'react'
import AnimatedCursor from 'react-animated-cursor'
import Cookie from './Cookie'
import { useAppContext } from '../context/useAppContext'

function AppLayout() {
    const { showCookieModal } = useAppContext()
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    const isDesktop = window.innerWidth >= 1024

    return (
        <>
            <NavMobileBox />
            <Navigation />
            <Outlet />
            <Footer />
            {showCookieModal && <Cookie />}
            {isDesktop && (
                <AnimatedCursor
                    innerSize={10}
                    outerSize={35}
                    innerScale={1.5}
                    outerScale={0}
                    outerAlpha={0}
                    hasBlendMode={true}
                    innerStyle={{
                        backgroundColor: 'var(--color-primary)',
                    }}
                    outerStyle={{
                        border: '2px solid var(--color-primary)',
                    }}
                />
            )}
        </>
    )
}

export default AppLayout
