import AboutMeSection from '../features/mainPage/AboutMeSection'
import ContactsSection from '../features/mainPage/ContactsSection'
import Header from '../features/mainPage/Header'
import ProjectsSection from '../features/mainPage/ProjectsSection'
import SkillsSection from '../features/mainPage/SkillsSection'
import Main from '../ui/Main'

function MainPage() {
    return (
        <>
            <Header />
            <Main>
                <ProjectsSection />
                <SkillsSection />
                <AboutMeSection />
                <ContactsSection />
            </Main>
        </>
    )
}

export default MainPage
