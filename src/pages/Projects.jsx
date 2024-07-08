import { CardsBox } from '../features/mainPage/HomeProjectsSection'
import { allProjects } from '../locales/projectsData'
import Main from '../ui/Main'
import ProjectCard from '../ui/ProjectCard'
import Section from '../ui/Section'

function Projects() {
    return (
        <>
            <Main>
                <Section to="nav.projects">
                    <CardsBox>
                        {allProjects.map((project) => (
                            <ProjectCard project={project} key={project.name} />
                        ))}
                    </CardsBox>
                </Section>
            </Main>
        </>
    )
}

export default Projects
