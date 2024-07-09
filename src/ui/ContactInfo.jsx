import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { MdEmail, MdPhone } from 'react-icons/md'
import { screenWidth } from '../styles/mediaQueries'
import { useTranslation } from 'react-i18next'

export const shadow = css`
    -webkit-box-shadow: 0px 0px 34px -1px rgba(73, 75, 77, 0.46);
    -moz-box-shadow: 0px 0px 34px -1px rgba(73, 75, 77, 0.46);
    box-shadow: 0px 0px 34px -1px rgba(73, 75, 77, 0.46);
`

const ContactInfoBox = styled.div`
    width: ${(props) => (props.$contact ? '100%' : 'fit-content')};
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.$contact ? 'flex-start' : 'center')};
    gap: 0.5em;
    padding: 1em 0;

    border: ${(props) =>
        props.$contact ? '1px solid var(--color-gray)' : 'none'};
    border-radius: 2px;
    max-width: 400px;
    ${(props) => (props.$contact ? shadow : '')}

    @media ${screenWidth.small} {
        align-items: center;
    }
    @media ${screenWidth.sm} {
        align-items: ${(props) => (props.$contact ? 'center' : 'flex-start')};
    }
    @media ${screenWidth.md} {
        align-items: flex-start;
        max-width: 300px;
    }
    @media ${screenWidth.xl} {
        flex-direction: ${(props) => (props.$contact ? 'column' : 'row')};

        max-width: ${(props) => (props.$contact ? '300px' : '100%')};
    }
`

const ContactLink = styled(Link)`
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

function ContactInfo({ inContactSection = false }) {
    const { t } = useTranslation()
    return (
        <ContactInfoBox $contact={inContactSection}>
            {inContactSection && (
                <ContactsHeading>{t('contact.contactDetails')}</ContactsHeading>
            )}
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
