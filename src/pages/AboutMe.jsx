import AboutMeSection from '../ui/AboutMeSection'
import SkillSection from '../ui/SkillSection'
import FunSection from '../ui/FunSection'
import Main from '../ui/Main'
import Section from '../ui/Section'

function AboutMe() {
    return (
        <>
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
