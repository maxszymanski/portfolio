import { Outlet } from 'react-router-dom'

import Navigation from './Navigation'
import NavMobileBox from './NavMobileBox'
import Footer from './Footer'

function AppLayout() {
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
