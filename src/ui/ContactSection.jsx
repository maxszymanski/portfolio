import { useTranslation } from 'react-i18next'
import { screenWidth } from '../styles/mediaQueries'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import styled from 'styled-components'

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

function ContactSection() {
    const { t } = useTranslation()
    return (
        <ContactContainer>
            <Box>
                <ContactText>{t('contact.contactText')}</ContactText>
                <ContactInfo inContactSection />
            </Box>
            <ContactForm />
        </ContactContainer>
    )
}

export default ContactSection
