import styled from 'styled-components'
import { useAppContext } from '../context/useAppContext'
import NavigationLink from './NavigationLink'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { screenWidth } from '../styles/mediaQueries'
import Logo from './Logo'
import NavSocials from './NavSocials'

const Nav = styled.nav`
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: var(--background);
    left: 0;
    top: 0;
    transform: translateX(${(props) => (props.$showNav ? '0' : '100%')});
    color: var(--color-gray);
    transition: transform 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    z-index: 100;
    padding: 4em 1.5em;

    @media ${screenWidth.md} {
        transform: translateX(${(props) => (props.$showNav ? '68%' : '100%')});
        border-left: 1px solid var(--color-stone);
    }
    @media ${screenWidth.lg} {
        position: absolute;
        transform: translate(0);
        padding: 1em;
        height: fit-content;
        border-left: none;
    }
    @media ${screenWidth.xl} {
        padding: 1em 4em;
    }
`

const NavContainer = styled.div`
    height: 100%;
    width: 100%;

    @media ${screenWidth.lg} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1440px;
        margin: 0 auto;
    }
`

const NavList = styled.ul`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media ${screenWidth.lg} {
        flex-direction: row;
        height: fit-content;
        width: 85%;
        justify-content: space-between;
    }
    @media ${screenWidth.xl} {
        width: 70%;
    }
`

function Navigation() {
    const { showNav } = useAppContext()
    const { t } = useTranslation()

    return (
        <Nav $showNav={showNav}>
            <NavContainer>
                <Logo />
                <NavList>
                    <NavigationLink to="/" text={t('home')} />
                    <NavigationLink to="/projects" text={t('projects')} />
                    <NavigationLink to="/aboutme" text={t('aboutMe')} />
                    <NavigationLink to="/contact" text={t('contact')} />
                    <LanguageSwitcher />
                </NavList>
                <NavSocials />
            </NavContainer>
        </Nav>
    )
}

export default Navigation
