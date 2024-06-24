import { Outlet } from 'react-router-dom'
import GlobalStyles from '../styles/GlobalStyles'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
`

function AppLayout() {
    return (
        <>
            <GlobalStyles />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default AppLayout
