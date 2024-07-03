import styled from 'styled-components'
import SectionHeading from './SectionHeading'
import { screenWidth } from '../styles/mediaQueries'

const SectionBox = styled.section`
    padding: 4.5em 1.5em 0em;

    @media ${screenWidth.lg} {
        padding-top: 6em;
    }
    @media ${screenWidth.xl} {
        padding-top: 8em;
    }
    @media ${screenWidth.xxl} {
        padding-top: 9em;
    }
`

function Section({ to, children }) {
    return (
        <SectionBox>
            <SectionHeading to={to} title={to} />
            {children}
        </SectionBox>
    )
}

export default Section
