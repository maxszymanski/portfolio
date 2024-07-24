import styled from 'styled-components'
import { screenWidth } from '../styles/mediaQueries'
import ContactInfo from './ContactInfo'
import { SocialLink } from './SocialLink'
import Logo from './Logo'

const StyledFooter = styled.footer`
    padding: 1.5em 0 1em;
    margin-top: 4.5em;
    border-top: 1px solid #abb2bf44;
    color: var(--color-gray);

    @media ${screenWidth.sm} {
        padding: 0.5em 0;
    }

    @media ${screenWidth.lg} {
        margin-top: 6em;
    }
    @media ${screenWidth.xl} {
        margin-top: 8em;
    }
    @media ${screenWidth.xxl} {
        margin-top: 9em;
    }
`

const FooterContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${screenWidth.sm} {
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        gap: 4em;
    }
    @media ${screenWidth.lg} {
        flex-direction: row;
        justify-content: space-evenly;
        gap: 4em;
    }
    @media ${screenWidth.xl} {
        padding-top: 0.3em;
    }
`

const FooterSocials = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    max-width: 100%;
`

const FooterFoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1em;
    padding-top: 1em;
    font-size: 1.3rem;

    @media ${screenWidth.sm} {
        margin-top: 0;
    }
`
const FooterDate = styled.p``
const FooterDateTwo = styled.p`
    font-size: 1.7rem;
    margin-top: 0.2em;
    margin-right: 0.1em;
    @media ${screenWidth.xxl} {
        margin-top: 0.27em;
    }
`

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <StyledFooter>
            <FooterContainer>
                <Logo isMobile />
                <ContactInfo />
                <FooterSocials>
                    <SocialLink
                        to="https://github.com/maxszymanski"
                        aria-label="Przejdź do profilu na GitHub"
                        target="_blank"
                        rel="noopener"
                    >
                        <img src="./images/github.png" alt="GitHub" />
                    </SocialLink>
                    <SocialLink
                        to="https://linkedin.com/in/max-szymanski"
                        aria-label="Przejdź do profilu na Linkedin"
                        target="_blank"
                        rel="noopener"
                    >
                        <img src="./images/linkedin.png" alt="LinkedIn" />
                    </SocialLink>
                </FooterSocials>
            </FooterContainer>
            <FooterFoot>
                <FooterDateTwo>&copy;</FooterDateTwo>
                <FooterDate>{currentYear} Max Szymański</FooterDate>
            </FooterFoot>
        </StyledFooter>
    )
}

export default Footer
