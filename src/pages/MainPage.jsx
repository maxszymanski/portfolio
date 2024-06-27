import Header from '../features/mainPage/Header'
import ProjectsSection from '../features/mainPage/ProjectsSection'
import Main from '../ui/Main'

function MainPage() {
    return (
        <>
            <Header />
            <Main>
                <ProjectsSection />
            </Main>
        </>
    )
}

export default MainPage
