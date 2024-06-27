import styled from 'styled-components'

const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`

const HeadingSection = styled.h2`
    color: var(--color-white);
    font-weight: 500;

    &::first-letter {
        color: var(--color-primary);
    }
`
const SectionLine = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--color-primary);
`

function SectionHeading({ children }) {
    return (
        <HeadingContainer>
            <HeadingSection>#{children}</HeadingSection>
            <SectionLine />
        </HeadingContainer>
    )
}

export default SectionHeading
