import styled from 'styled-components'
import { commonStyles } from '../features/mainPage/HeaderImage'
import { useTranslation } from 'react-i18next'
import { screenWidth } from '../styles/mediaQueries'

const FunContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;

    @media ${screenWidth.lg} {
        flex-direction: row-reverse;
    }
    @media ${screenWidth.xl} {
        padding: 0 2em;
    }
`
const FactsBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3em;
    font-size: 1.5rem;
    width: 100%;

    @media ${screenWidth.sm} {
        align-items: center;
    }
    @media ${screenWidth.md} {
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 1.6rem;
        gap: 1.5em;
    }
    @media ${screenWidth.xxl} {
        font-size: 1.8rem;
    }
`

const FunBox = styled.div`
    ${commonStyles}

    @media ${screenWidth.sm} {
        padding: 0.8em 1em;
        min-width: 510px;
    }
    @media ${screenWidth.md} {
        min-width: fit-content;
        max-width: fit-content;
    }
`
const FunFact = styled.p`
    text-align: center;

    color: var(--color-gray);
`

const FunImage = styled.img`
    min-height: 200px;
    @media ${screenWidth.sm} {
        min-height: 250px;
    }
    @media ${screenWidth.lg} {
        min-height: 300px;
    }
`

const facts = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']

function FunSection() {
    const { t } = useTranslation()
    return (
        <FunContainer>
            <FunImage src="./images/fun.webp" alt="" loading="lazy" />
            <FactsBox>
                {facts.map((fact) => (
                    <FunBox>
                        {' '}
                        <FunFact>{t(`fun.${fact}`)}</FunFact>
                    </FunBox>
                ))}
            </FactsBox>
        </FunContainer>
    )
}

export default FunSection
