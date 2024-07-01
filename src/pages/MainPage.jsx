import AboutMeSection from '../features/mainPage/AboutMeSection'
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
            </Main>
        </>
    )
}

export default MainPage
