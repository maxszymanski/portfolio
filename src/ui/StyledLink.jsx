import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { screenWidth } from '../styles/mediaQueries'

const PrimaryLink = styled(Link)`
    border: 1px solid var(--color-primary);
    padding: 0.5em 1em;
    display: ${(props) => (props.$isMobile ? 'none' : 'inline-block')};

    @media ${screenWidth.md} {
        display: inline-block;
    }
`

function StyledLink({ text, to, isMobile = false }) {
    const { t } = useTranslation()
    return (
        <PrimaryLink to={to} $isMobile={isMobile}>
            {t(text)}
        </PrimaryLink>
    )
}

export default StyledLink
