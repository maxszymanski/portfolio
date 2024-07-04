import styled from 'styled-components'
import Section from '../../ui/Section'
import { useTranslation } from 'react-i18next'
import ContactForm from '../../ui/ContactForm'
import ContactInfo from '../../ui/ContactInfo'
import { screenWidth } from '../../styles/mediaQueries'

const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 4em;

    @media ${screenWidth.small} {
        gap: 5em;
    }
    @media ${screenWidth.md} {
        flex-wrap: nowrap;
        gap: 1em;
    }
    @media ${screenWidth.lg} {
        gap: 5em;
        justify-content: space-evenly;
    }
    @media ${screenWidth.xl} {
        gap: 10em;
        align-items: flex-start;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;

    @media ${screenWidth.small} {
        gap: 5em;
    }
    @media ${screenWidth.lg} {
        max-width: 40%;
    }
    @media ${screenWidth.xl} {
        margin-top: 3em;
    }
`

const ContactText = styled.p`
    color: var(--color-gray);
    line-height: 2.6rem;
    @media ${screenWidth.xl} {
        font-size: 1.8rem;
    }
`

function ContactsSection() {
    const { t } = useTranslation()
    return (
        <Section to="contact">
            <ContactContainer>
                <Box>
                    <ContactText>{t('contactText')}</ContactText>
                    <ContactInfo />
                </Box>
                <ContactForm />
            </ContactContainer>
        </Section>
    )
}

export default ContactsSection
