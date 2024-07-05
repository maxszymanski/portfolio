import HomeAboutMeSection from '../features/mainPage/HomeAboutMeSection'
import HomeContactsSection from '../features/mainPage/HomeContactsSection'
import Header from '../features/mainPage/Header'
import HomeProjectsSection from '../features/mainPage/HomeProjectsSection'
import HomeSkillsSection from '../features/mainPage/HomeSkillsSection'
import Main from '../ui/Main'

function MainPage() {
    return (
        <>
            <Header />
            <Main $mainPage>
                <HomeProjectsSection />
                <HomeSkillsSection />
                <HomeAboutMeSection />
                <HomeContactsSection />
            </Main>
        </>
    )
}

export default MainPage
