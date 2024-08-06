import styled from 'styled-components'
import { screenWidth } from '../styles/mediaQueries'

const PrivacyBox = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 2em auto;
    padding: 4.5em 1.5em 0em;
    font-size: 1.5rem;

    @media ${screenWidth.lg} {
        padding-top: 6em;
        font-size: 1.8rem;
    }
    @media ${screenWidth.xl} {
        padding-top: 8em;
    }
    @media ${screenWidth.xxl} {
        padding-top: 9em;
    }
`

const PrivacyParagraf = styled.p`
    padding: 1em 0;
    line-height: 160%;
    color: ${(props) =>
        props.$title ? 'var(--color-primary)' : 'var(--color-white)'};
`

function PrivacyPolicy() {
    return (
        <PrivacyBox>
            <PrivacyParagraf $title>Administrator danych</PrivacyParagraf>
            <PrivacyParagraf>
                Administratorem danych jest Maksymilian Szymański
                <br />
                hello@maxszymanski.pl
                <br />
            </PrivacyParagraf>
            <PrivacyParagraf $title>Kiedy zbieramy Twoje dane?</PrivacyParagraf>
            <PrivacyParagraf>
                Twoje dane (takie jak imię, nazwa firmy, email) zbierane są
                podczas korzystania z formularza kontaktowego. <br />
                Na stronie maxszymanski.pl korzystamy z usług Google Analytics
                (wyjaśnienie niżej).
            </PrivacyParagraf>
            <PrivacyParagraf $title>Google Analytics</PrivacyParagraf>
            <PrivacyParagraf>
                Strona maxszymanski.pl korzysta z usługi Google Analytics dla
                zbierania i analizowania informacji o serwisie (ilość
                miesięcznych odwiedzin, skąd ruch trafia na stronę – z
                wyszukiwarek, z linków w social media itd.) <br />W powyższym
                celu informacje o osobach korzystających z serwisu są przesyłane
                do Google. Google wyklucza przesyłanie informacji
                umożliwiających identyfikację danej osoby, jednakże adres IP nie
                jest traktowany jako taka informacja przez Google.
            </PrivacyParagraf>
            <PrivacyParagraf $title>Cele przetwarzania danych</PrivacyParagraf>
            <PrivacyParagraf>
                Twoje dane zebrane przez formularz kontaktowy przetwarzane są
                jedynie w celach kontaktowych. Nie udostępniamy ich nikomu, nie
                sprzedajemy ich.
                <br />
                W wiadomości zwrotnej może pojawić się oferta marketingowa
                dotycząca naszych usług.
                <br />
                Korzystanie z formularza kontaktowego jest dobrowolne.
            </PrivacyParagraf>
            <PrivacyParagraf $title>Pozostałe informacje</PrivacyParagraf>
            <PrivacyParagraf>
                W razie jakichkolwiek pytań, prosimy o kontakt na adres mailowy:{' '}
                <br />
                hello@maxszymanski.pl <br />
            </PrivacyParagraf>
        </PrivacyBox>
    )
}

export default PrivacyPolicy
