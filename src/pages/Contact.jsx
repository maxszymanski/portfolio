import { Helmet } from 'react-helmet-async'
import ContactSection from '../ui/ContactSection'
import Main from '../ui/Main'
import Section from '../ui/Section'
import { useTranslation } from 'react-i18next'

function Contact() {
    const { t } = useTranslation()
    return (
        <>
            <Helmet>
                <title>Max Szymański | {t('nav.contact')}</title>
                <meta
                    name="description"
                    content={t('meta.description.contact')}
                />
                <meta
                    name="keywords"
                    content="kontakt frontend developer, kontakt web developer, skontaktuj się z nami, zapytanie ofertowe web development, kontakt tworzenie stron internetowych"
                />
                <meta
                    property="og:title"
                    content={`Max Szymański | ${t('nav.contact')}`}
                />
                <meta
                    property="og:description"
                    content={t('meta.description.contact')}
                />
                <meta
                    property="og:url"
                    content="https://maxszymanski.pl/contact"
                />
            </Helmet>
            <Main>
                <Section to="nav.contact">
                    <ContactSection />
                </Section>
            </Main>
        </>
    )
}

export default Contact
