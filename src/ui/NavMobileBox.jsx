import styled from 'styled-components'
import BurgerMenu from './BurgerMenu'
import { screenWidth } from '../styles/mediaQueries'
import Logo from './Logo'
import { useAppContext } from '../context/useAppContext'

const NavBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 2000;
    padding: 0.8em 1.5em;
    background-color: var(--background);

    &.with-border {
        border-bottom: 1px solid var(--color-stone);
    }

    @media ${screenWidth.lg} {
        display: none;
    }
`

function NavMobileBox() {
    const { hasBorder } = useAppContext()

    return (
        <NavBox className={hasBorder ? 'with-border' : ''}>
            <Logo isMobile />
            <BurgerMenu />
        </NavBox>
    )
}

export default NavMobileBox
