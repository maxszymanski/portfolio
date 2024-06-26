import styled from 'styled-components'
import BurgerMenu from './BurgerMenu'
import { screenWidth } from '../styles/mediaQueries'
import Logo from './Logo'

const NavBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 0.5em 1.5em;
    background-color: var(--background);

    @media ${screenWidth.lg} {
        display: none;
    }
`

function NavMobileBox() {
    return (
        <NavBox>
            <Logo isMobile />
            <BurgerMenu />
        </NavBox>
    )
}

export default NavMobileBox
