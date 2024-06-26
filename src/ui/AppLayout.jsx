import { Outlet } from 'react-router-dom'

import styled from 'styled-components'
import Navigation from './Navigation'
import NavMobileBox from './NavMobileBox'

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
`

function AppLayout() {
    return (
        <>
            <NavMobileBox />
            <Navigation />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default AppLayout
