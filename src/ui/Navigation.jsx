import styled from 'styled-components'
import { useAppContext } from '../context/useAppContext'
import NavigationLink from './NavigationLink'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
    position: absolute;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background-color: var(--background);
    left: 0;
    top: 0;
    transform: translateX(${(props) => (props.$showMenu ? '0' : '100%')});
    color: var(--color-gray);
    transition: transform 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    z-index: 100;
    padding: 1em 3em;
`

const NavList = styled.ul`
    min-height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const SocialBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

function Navigation() {
    const { showMenu } = useAppContext()
    const { t } = useTranslation()

    return (
        <Nav $showMenu={showMenu}>
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
                <Link>
                    <img src="./images/linkedin1.png" />
                </Link>
            </SocialBox>
        </Nav>
    )
}

export default Navigation
