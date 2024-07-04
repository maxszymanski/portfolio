import styled from 'styled-components'
import { CardSkill } from './SkillCard'
import { Link } from 'react-router-dom'
import { MdEmail, MdPhone } from 'react-icons/md'
import { screenWidth } from '../styles/mediaQueries'
import { useTranslation } from 'react-i18next'

const ContactInfoBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 100%;
    padding: 1em 0;
    border: 1px solid var(--color-gray);
    border-radius: 2px;
    margin: 0 auto;
    max-width: 400px;
    @media ${screenWidth.small} {
        align-items: center;
    }
    @media ${screenWidth.md} {
        align-items: flex-start;
        max-width: 300px;
    }
`

const ContactLink = styled(Link)`
    /* width: 100%; */
    display: inline-flex;
    align-items: center;

    gap: 0.7em;
    padding: 0.5em 1em;
    color: var(--color-gray);
    transition: color 0.3s;
    font-size: 1.5rem;

    &:hover {
        color: var(--color-primary);
    }

    @media ${screenWidth.xl} {
        font-size: 1.6rem;
    }
`

const Email = styled(MdEmail)`
    font-size: 3rem;
`
const Phone = styled(MdPhone)`
    font-size: 3rem;
`

const ContactsHeading = styled.h4`
    padding: 0.5em 1em;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--color-white);

    @media ${screenWidth.xl} {
        font-size: 2.2rem;
    }
`

function ContactInfo() {
    const { t } = useTranslation()
    return (
        <ContactInfoBox>
            <ContactsHeading>{t('contactDetails')}</ContactsHeading>
            <ContactLink to="mailto:hello@maxszymanski.pl">
                <Email /> hello@maxszymanski.pl
            </ContactLink>
            <ContactLink to="tel:+48888148045">
                <Phone /> +48888148045
            </ContactLink>
        </ContactInfoBox>
    )
}

export default ContactInfo
