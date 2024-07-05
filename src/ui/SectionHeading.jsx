import styled from 'styled-components'
import ProjectsSection from '../features/mainPage/HomeProjectsSection'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { TitleLink } from '../features/mainPage/HeaderImage'
import { screenWidth } from '../styles/mediaQueries'
import ViewAllLink from './ViewAllLink'

const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 4em;

    @media ${screenWidth.sm} {
        font-size: 2.8rem;
    }
`

const HeadingBox = styled.div`
    width: 100%;
    gap: 1em;
    max-width: 700px;
    display: flex;
    align-items: center;
`

const HeadingSection = styled.h2`
    color: var(--color-white);
    font-weight: 500;
    font-size: 2rem;
    flex-shrink: 0;

    &::first-letter {
        color: var(--color-primary);
    }

    @media ${screenWidth.small} {
        font-size: 2.2rem;
    }
    @media ${screenWidth.sm} {
        font-size: 2.8rem;
    }
    @media ${screenWidth.lg} {
        font-size: 3rem;
    }
    @media ${screenWidth.xl} {
        font-size: 3.2rem;
    }
`
const SectionLine = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--color-primary);
`

function SectionHeading({ title, to, mainPage = false }) {
    const { t } = useTranslation()
    const projectsSection = to === 'projects'
    const sectionMark = mainPage ? '#' : '/'

    return (
        <HeadingContainer>
            <HeadingBox>
                <HeadingSection>
                    {sectionMark}
                    {t(title)}
                </HeadingSection>
                {mainPage && <SectionLine />}
            </HeadingBox>
            {projectsSection && mainPage && <ViewAllLink />}
        </HeadingContainer>
    )
}

export default SectionHeading
