import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { screenWidth } from '../styles/mediaQueries'

const PrimaryLink = styled(Link)`
    border: 1px solid var(--color-primary);
    padding: 0.5em 1em;
    display: ${(props) => (props.$isMobile ? 'none' : 'inline-block')};
    background-color: transparent;
    transition: background-color 0.3s;
    border-radius: 2px;
    border-color: ${(props) =>
        props.$isPrimary ? 'var(--color-primary)' : 'var(--color-gray)'};

    &:hover {
        background-color: var(--color-primaryLink);
    }

    @media ${screenWidth.md} {
        display: inline-block;
    }
    @media ${screenWidth.xl} {
        font-size: 1.8rem;
    }
    @media ${screenWidth.xxl} {
        font-size: 2rem;
    }
`

function StyledLink({ text, to, isMobile = false, isPrimary = true }) {
    const { t } = useTranslation()
    return (
        <PrimaryLink
            to={to}
            $isMobile={isMobile}
            $isPrimary={isPrimary}
            target="_blank"
            rel="noopener"
        >
            {t(text)}
        </PrimaryLink>
    )
}

export default StyledLink
