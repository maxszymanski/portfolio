import styled from 'styled-components'
import Section from '../../ui/Section'
import { useTranslation } from 'react-i18next'
import ContactForm from '../../ui/ContactForm'

const ContactContainer = styled.div``

const ContactText = styled.p`
    color: var(--color-gray);
`

function ContactsSection() {
    const { t } = useTranslation()
    return (
        <Section to="contacts">
            <ContactContainer>
                <ContactText>{t('contactText')}</ContactText>
                <ContactForm />
            </ContactContainer>
        </Section>
    )
}

export default ContactsSection
