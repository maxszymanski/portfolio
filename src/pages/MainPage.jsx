import AboutMeSection from '../features/mainPage/AboutMeSection'
import Header from '../features/mainPage/Header'
import ProjectsSection from '../features/mainPage/ProjectsSection'
import SkillsSection from '../features/mainPage/SkillsSection'
import { Container } from '../ui/Container'
import Main from '../ui/Main'

function MainPage() {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <ProjectsSection sectionId="projects" />
                    <SkillsSection />
                    <AboutMeSection />
                </Container>
            </Main>
        </>
    )
}

export default MainPage
