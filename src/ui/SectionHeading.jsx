import styled from 'styled-components'
import ProjectsSection from '../features/mainPage/ProjectsSection'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { TitleLink } from '../features/mainPage/HeaderImage'
import { screenWidth } from '../styles/mediaQueries'

const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 4em;
    padding-top: 1em;
    gap: 0.5em;
`

const HeadingSection = styled.h2`
    color: var(--color-white);
    font-weight: 500;
    font-size: 2rem;

    &::first-letter {
        color: var(--color-primary);
    }

    @media ${screenWidth.small} {
        font-size: 2.2rem;
    }
`
const SectionLine = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--color-primary);
    max-width: 500px;
`

const SectionLink = styled(Link)`
    font-size: 1.2rem;
    padding: 0.3em;
    flex-shrink: 0;
    color: var(--color-white);
    position: relative;

    @media ${screenWidth.lg} {
        &:hover::after {
            width: 100%;
        }

        &::after {
            content: '';
            position: absolute;
            width: 0;
            height: 1px;
            bottom: 3px;
            left: 0;
            background-color: var(--color-white);
            transition: width 0.3s;
        }
    }
`

function SectionHeading({ title, to }) {
    const { t } = useTranslation()
    const projectsSection = to === 'projects'

    return (
        <HeadingContainer>
            <HeadingSection>#{t(title)}</HeadingSection>
            <SectionLine />
            {projectsSection && (
                <SectionLink to={to}>{t('viewAll')}</SectionLink>
            )}
        </HeadingContainer>
    )
}

export default SectionHeading
