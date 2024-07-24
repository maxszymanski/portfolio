import HomeAboutMeSection from '../features/mainPage/HomeAboutMeSection'
import HomeContactsSection from '../features/mainPage/HomeContactsSection'
import Header from '../features/mainPage/Header'
import HomeProjectsSection from '../features/mainPage/HomeProjectsSection'
import HomeSkillsSection from '../features/mainPage/HomeSkillsSection'
import Main from '../ui/Main'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

function MainPage() {
    const { t } = useTranslation()
    return (
        <>
            <Helmet>
                <title>Max Szymanski | Frontend Developer</title>
                <meta name="description" content={t('meta.description.main')} />
                <meta
                    name="keywords"
                    content="frontend developer, projektowanie stron internetowych, tworzenie stron www, usługi web development, zlecenia na frontend, JavaScript developer, React developer, web design, responsive web design, HTML CSS JavaScript, nowoczesne strony internetowe, aplikacje webowe"
                />
                <meta
                    property="og:title"
                    content="Max Szymanski | Frontend Developer"
                />
                <meta
                    property="og:description"
                    content={t('meta.description.main')}
                />
                <meta property="og:image" content="/images/logo-og.png" />
                <meta property="og:url" content="https://maxszymanski.pl" />
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
