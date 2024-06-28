import { useTranslation } from 'react-i18next'
import Section from '../../ui/Section'
import SectionHeading from '../../ui/SectionHeading'
import ProjectCard from '../../ui/ProjectCard'
import styled from 'styled-components'
import { mainProjects } from '../../locales/projectsData'

const CardsBox = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 2em;
    padding: 4em 0;
`

function ProjectsSection() {
    const { t } = useTranslation()
    return (
        <Section>
            <SectionHeading>{t('projects')}</SectionHeading>
            <CardsBox>
                {mainProjects.map((project) => (
                    <ProjectCard project={project} key={project.name} />
                ))}
                {/* <ProjectCard />
                <ProjectCard />
                <ProjectCard /> */}
            </CardsBox>
        </Section>
    )
}

export default ProjectsSection
