import { Outlet, useLocation } from 'react-router-dom'

import Navigation from './Navigation'
import NavMobileBox from './NavMobileBox'
import Footer from './Footer'
import { useEffect } from 'react'
import AnimatedCursor from 'react-animated-cursor'

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
            <AnimatedCursor
                innerSize={10}
                outerSize={35}
                innerScale={1}
                outerScale={1.8}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: 'var(--color-primary)',
                }}
                outerStyle={{
                    border: '2px solid var(--color-primary)',
                }}
            />
        </>
    )
}

export default AppLayout
