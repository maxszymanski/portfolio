import { Outlet } from 'react-router-dom'

import styled from 'styled-components'
import Navigation from './Navigation'

const Container = styled.div`
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
`

function AppLayout() {
    return (
        <>
            <Navigation />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default AppLayout
