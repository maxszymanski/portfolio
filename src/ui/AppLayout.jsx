import { Outlet } from 'react-router-dom'

import Navigation from './Navigation'
import NavMobileBox from './NavMobileBox'

function AppLayout() {
    return (
        <>
            <NavMobileBox />
            <Navigation />
            <Outlet />
        </>
    )
}

export default AppLayout
