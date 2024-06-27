import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { screenWidth } from '../styles/mediaQueries'

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
        position: fixed;
        display: flex;
        left: 15px;
        top: 0;
        flex-direction: column;
    }
    @media ${screenWidth.xxl} {
        left: 30px;
    }
`

const SocialLink = styled(Link)`
    padding: 0.1em;
    border-radius: 8px;
    transition: background-color 0.3s;
    &:hover {
        background-color: var(--color-socialLink);
    }
`
const Line = styled.div`
    display: hidden;
    height: 230px;
    width: 1px;
    background-color: var(--color-gray);

    @media ${screenWidth.xl} {
        display: block;
    }
`

function NavSocials() {
    return (
        <SocialBox>
            <Line />
            <SocialLink to="https://github.com/maxszymanski">
                <img src="./images/github.png" />
            </SocialLink>
            <SocialLink to="https://pl.linkedin.com/">
                <img src="./images/linkedin.png" />
            </SocialLink>
        </SocialBox>
    )
}

export default NavSocials
