import AboutMeSection from '../ui/AboutMeSection'
import SkillSection from '../ui/SkillSection'
import Main from '../ui/Main'
import Section from '../ui/Section'

function AboutMe() {
    return (
        <>
            <Main>
                <Section to="aboutme">
                    <AboutMeSection />
                </Section>
                <Section to="skills">
                    <SkillSection />
                </Section>
            </Main>
        </>
    )
}

export default AboutMe
