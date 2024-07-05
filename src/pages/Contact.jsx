import ContactSection from '../ui/ContactSection'
import Main from '../ui/Main'
import Section from '../ui/Section'

function Contact() {
    return (
        <>
            <Main>
                <Section to="nav.contact">
                    <ContactSection />
                </Section>
            </Main>
        </>
    )
}

export default Contact
