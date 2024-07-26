import HomeAboutMeSection from '../features/mainPage/HomeAboutMeSection'
import HomeContactsSection from '../features/mainPage/HomeContactsSection'
import Header from '../features/mainPage/Header'
import HomeProjectsSection from '../features/mainPage/HomeProjectsSection'
import HomeSkillsSection from '../features/mainPage/HomeSkillsSection'
import Main from '../ui/Main'
import { Helmet } from 'react-helmet-async'

function MainPage() {
    return (
        <>
            <Helmet>
                <title>Max Szymanski | Frontend Developer</title>
                <meta
                    property="og:title"
                    content="Max Szymanski | Frontend Developer"
                />
            </Helmet>
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
