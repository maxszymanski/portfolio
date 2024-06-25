import styled from 'styled-components'
import BurgerMenu from './BurgerMenu'
import { Link } from 'react-router-dom'

const NavBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LogoImage = styled.img``

const Logo = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.5em;
    transition: color 0.3s;

    &:hover {
        color: var(--color-primary);
    }
`

function NavMobileBox() {
    return (
        <NavBox>
            <Logo>
                <LogoImage src="/logo.svg"></LogoImage>
                Max
            </Logo>
            <BurgerMenu />
        </NavBox>
    )
}

export default NavMobileBox
