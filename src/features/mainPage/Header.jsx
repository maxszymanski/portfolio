import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BurgerMenu from '../../ui/BurgerMenu'

const MainHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1em;
`
const NavBox = styled.div`
    display: flex;
    margin-right: 12px;
    align-items: center;
    justify-content: space-between;
`
const LogoImage = styled.img``

const Logo = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.5em;
`

function Header() {
    return (
        <MainHeader>
            <NavBox>
                <Logo>
                    <LogoImage src="/logo.svg"></LogoImage>
                    Max
                </Logo>
                <BurgerMenu />
            </NavBox>
        </MainHeader>
    )
}

export default Header
