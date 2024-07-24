import AboutMeSection from '../ui/AboutMeSection'
import SkillSection from '../ui/SkillSection'
import FunSection from '../ui/FunSection'
import Main from '../ui/Main'
import Section from '../ui/Section'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

function AboutMe() {
    const { t } = useTranslation()
    return (
        <>
            <Helmet>
                <title>Max Szymański | {t('nav.aboutMe')}</title>
                <meta
                    name="description"
                    content={t('meta.description.aboutMe')}
                />
                <meta
                    name="keywords"
                    content="frontend developer, Max Szymański, programista frontend, tworzenie stron internetowych, umiejętności programistyczne, pasja do kodowania"
                />
                <meta
                    property="og:title"
                    content={`Max Szymański | ${t('nav.aboutMe')}`}
                />
                <meta
                    property="og:description"
                    content={t('meta.description.aboutMe')}
                />
                <meta
                    property="og:url"
                    content="https://maxszymanski.pl/aboutme"
                />
            </Helmet>
            <Main>
                <Section to="nav.aboutMe">
                    <AboutMeSection />
                </Section>
                <Section to="section.skills">
                    <SkillSection />
                </Section>
                <Section to="section.fun">
                    <FunSection />
                </Section>
            </Main>
        </>
    )
}

export default AboutMe
