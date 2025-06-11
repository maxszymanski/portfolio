import { Outlet, useLocation } from 'react-router-dom'

import Navigation from './Navigation'
import NavMobileBox from './NavMobileBox'
import Footer from './Footer'
import { useEffect } from 'react'
import AnimatedCursor from 'react-animated-cursor'
import Cookie from './Cookie'
import { useAppContext } from '../context/useAppContext'
import EmailStatusMessage from './EmailStatusMessage'
import ReactGA from 'react-ga4'

function AppLayout() {
    const { showCookieModal, emailStatus, isDesktop } = useAppContext()
    const { pathname, search } = useLocation()
    useEffect(() => {
        ReactGA.send({
            hitType: 'pageview',
            page: pathname + search,
        })
    }, [pathname, search])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    const showEmailStatus = emailStatus === 'error' || emailStatus === 'success'
    const showSucces = emailStatus === 'success'

    return (
        <>
            <NavMobileBox />
            <Navigation />
            <Outlet />
            <Footer />
            {showEmailStatus && <EmailStatusMessage success={showSucces} />}
            {showCookieModal && <Cookie />}
            {/* {isDesktop && (
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
            )} */}
        </>
    )
}

export default AppLayout
