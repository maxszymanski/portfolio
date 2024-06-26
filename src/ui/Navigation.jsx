import styled from 'styled-components'
import { useAppContext } from '../context/useAppContext'
import NavigationLink from './NavigationLink'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { screenWidth } from '../styles/mediaQueries'
import Logo from './Logo'

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
    padding: 4em 2em;

    @media ${screenWidth.sm} {
        transform: translateX(${(props) => (props.$showNav ? '70%' : '100%')});
        border-left: 1px solid var(--color-gray);
    }
    @media ${screenWidth.lg} {
        transform: translate(0);
        padding: 1em;
        height: fit-content;
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
        width: 70%;
        justify-content: space-between;
    }
`
const SocialBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;

    @media ${screenWidth.sm} {
        justify-content: flex-start;
    }
    @media ${screenWidth.lg} {
        position: fixed;
        left: 10px;
        top: 60px;
        flex-direction: column;
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
                <SocialBox>
                    <Link to="https://github.com/maxszymanski">
                        <img src="./images/github.png" />
                    </Link>
                    <Link to="https://pl.linkedin.com/">
                        <img src="./images/Linkedin.png" />
                    </Link>
                </SocialBox>
            </NavContainer>
        </Nav>
    )
}

export default Navigation
