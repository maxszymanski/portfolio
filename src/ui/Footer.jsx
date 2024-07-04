import styled from 'styled-components'
import { Container } from './Container'
import { screenWidth } from '../styles/mediaQueries'

const StyledFooter = styled.footer`
    padding: 4.5em 1.5em 0em;
    margin-top: 4.5em;
    border-top: 1px solid var(--color-gray);
    height: 150px;

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

function Footer() {
    return (
        <StyledFooter>
            <Container></Container>
        </StyledFooter>
    )
}

export default Footer
