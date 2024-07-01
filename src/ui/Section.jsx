import styled from 'styled-components'
import SectionHeading from './SectionHeading'

const SectionBox = styled.section`
    padding: 4em 1.5em 0;
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
