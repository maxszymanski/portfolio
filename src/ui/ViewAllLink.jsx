import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { screenWidth } from '../styles/mediaQueries'
import { useTranslation } from 'react-i18next'

export const SectionProjectLink = styled(Link)`
    display: ${(props) => (props.$isMobile ? 'block' : 'none')};
    padding: 0.5em;
    flex-shrink: 0;
    color: var(--color-white);
    transition: color 0.3s;
    font-size: 1.8rem;

    &:hover {
        color: var(--color-primary);
    }

    @media ${screenWidth.lg} {
        display: ${(props) => (props.$isMobile ? 'none' : 'block')};
    }
`

function ViewAllLink({ isMobile = false }) {
    const { t } = useTranslation()
    return (
        <SectionProjectLink $isMobile={isMobile} to="/projects">
            {t('viewAll')}
        </SectionProjectLink>
    )
}

export default ViewAllLink
