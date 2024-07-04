import styled from 'styled-components'
import { Container } from './Container'
import { screenWidth } from '../styles/mediaQueries'
import ContactInfo from './ContactInfo'
import { SocialLink } from './SocialLink'

const StyledFooter = styled.footer`
    padding: 1.5em;
    margin-top: 4.5em;
    border-top: 1px solid var(--color-gray);

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

const FooterSocials = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
`

function Footer() {
    return (
        <StyledFooter>
            <Container>
                <ContactInfo />
                <FooterSocials>
                    <SocialLink to="https://github.com/maxszymanski">
                        <img src="./images/github.png" />
                    </SocialLink>
                    <SocialLink to="https://pl.linkedin.com/">
                        <img src="./images/linkedin.png" />
                    </SocialLink>
                </FooterSocials>
            </Container>
        </StyledFooter>
    )
}

export default Footer
