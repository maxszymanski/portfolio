import styled from 'styled-components'
import NavMobileBox from './NavMobileBox'

const MainHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1em;
`

function Header({ children }) {
    return (
        <MainHeader>
            <NavMobileBox />
            {children}
        </MainHeader>
    )
}

export default Header
