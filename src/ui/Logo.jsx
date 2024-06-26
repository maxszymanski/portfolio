import styled from 'styled-components'
import { useAppContext } from '../context/useAppContext'
import { Link } from 'react-router-dom'
import { screenWidth } from '../styles/mediaQueries'

const LogoImage = styled.img``

const LogoLink = styled(Link)`
    display: ${(props) => (props.$isMobile ? 'inline-flex' : 'none')};
    align-items: center;
    gap: 0.5em;
    padding: 0.5em;
    font-weight: 600;
    transition: color 0.3s;

    &:hover {
        color: var(--color-primary);
    }

    @media ${screenWidth.lg} {
        display: inline-flex;
    }
`

function Logo({ isMobile = false }) {
    const { toggleShowNav } = useAppContext()
    return (
        <LogoLink onClick={toggleShowNav} $isMobile={isMobile}>
            <LogoImage src="/logo.svg"></LogoImage>
            Max
        </LogoLink>
    )
}

export default Logo
