import { Helmet } from 'react-helmet-async'
import { CardsBox } from '../features/mainPage/HomeProjectsSection'
import { allProjects } from '../locales/projectsData'
import Main from '../ui/Main'
import ProjectCard from '../ui/ProjectCard'
import Section from '../ui/Section'
import { useTranslation } from 'react-i18next'
import ReactGA from 'react-ga4'

function Projects() {
    ReactGA.send({
        hitType: 'pageviev',
        page: '/projects',
        title: 'Projects',
    })
    const { t } = useTranslation()
    return (
        <>
            <Helmet>
                <title>Max Szymański | {t('nav.projects')}</title>
                <meta
                    name="description"
                    content={t('meta.description.projects')}
                />
                <meta
                    name="keywords"
                    content="projekty frontend developer, przykłady projektów, portfolio, web development, aplikacje webowe, nowoczesne strony internetowe"
                />
                <meta
                    property="og:title"
                    content={`Max Szymański | ${t('nav.projects')}`}
                />
                <meta
                    property="og:description"
                    content={t('meta.description.projects')}
                />
                <meta
                    property="og:url"
                    content="https://maxszymanski.pl/projects"
                />
            </Helmet>
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
