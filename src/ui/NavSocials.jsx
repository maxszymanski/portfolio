import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { screenWidth } from '../styles/mediaQueries'
import { SocialLink } from './SocialLink'

const SocialBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;

    @media ${screenWidth.sm} {
        justify-content: flex-start;
    }
    @media ${screenWidth.lg} {
        display: none;
    }
    @media ${screenWidth.xl} {
        position: absolute;
        display: ${(props) => (props.$mainPage ? 'flex' : 'none')};
        left: 15px;
        top: 0;
        flex-direction: column;
    }
    @media ${screenWidth.xxl} {
        left: 30px;
    }
    @media ${screenWidth.xxxl} {
        display: flex;
    }
`

const Line = styled.div`
    display: none;
    height: 230px;
    width: 1px;
    background-color: var(--color-gray);

    @media ${screenWidth.xl} {
        display: block;
    }
`

function NavSocials() {
    const { pathname } = useLocation()
    const mainPage = pathname === '/'
    return (
        <SocialBox $mainPage={mainPage}>
            <Line />
            <SocialLink
                to="https://github.com/maxszymanski"
                aria-label="Przejdź do profilu na GitHub"
            >
                <img src="./images/github.png" alt="GitHub" />
            </SocialLink>
            <SocialLink to="https://pl.linkedin.com/">
                <img
                    src="./images/linkedin.png"
                    alt="LinkedIn"
                    aria-label="Przejdź do profilu na LinkedIn "
                />
            </SocialLink>
        </SocialBox>
    )
}

export default NavSocials
