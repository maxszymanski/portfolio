import AboutMeSection from '../features/mainPage/AboutMeSection'
import ContactsSection from '../features/mainPage/ContactsSection'
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
                    <ProjectsSection />
                    <SkillsSection />
                    <AboutMeSection />
                    <ContactsSection />
                </Container>
            </Main>
        </>
    )
}

export default MainPage
