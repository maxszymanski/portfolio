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
    gap: 4em;
`

function ProjectsSection() {
    return (
        <Section to="projects">
            <CardsBox>
                {mainProjects.map((project) => (
                    <ProjectCard project={project} key={project.name} />
                ))}
            </CardsBox>
        </Section>
    )
}

export default ProjectsSection
