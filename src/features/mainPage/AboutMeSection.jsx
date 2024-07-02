import styled from 'styled-components'
import Section from '../../ui/Section'
import StyledLink from '../../ui/StyledLink'
import { useTranslation } from 'react-i18next'
import { screenWidth } from '../../styles/mediaQueries'

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 3em;

    @media ${screenWidth.md} {
        flex-direction: row;
        align-items: center;
    }
    @media ${screenWidth.lg} {
        gap: 4em;
        justify-content: space-evenly;
    }
`

const Image = styled.img`
    max-height: 360px;

    @media ${screenWidth.small} {
        max-height: 400px;
    }
    @media ${screenWidth.sm} {
        padding: 0 4em;
    }
    @media ${screenWidth.md} {
        padding: 0;
        max-height: none;
        max-width: 40%;
    }
    @media ${screenWidth.xl} {
        max-width: 60%;
    }
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    color: var(--color-gray);

    @media ${screenWidth.xl} {
        max-width: 40%;
    }
`

const RowText = styled.p`
    line-height: 2.6rem;
`

function AboutMeSection() {
    const { t } = useTranslation()
    return (
        <Section to="aboutme">
            <SectionContainer>
                <TextBox>
                    <RowText>{t('aboutHello')}</RowText>
                    <RowText>{t('aboutmeone')}</RowText>
                    <RowText>{t('aboutmetwo')}</RowText>
                    <RowText>{t('aboutmethree')}</RowText>
                    <StyledLink to="/aboutme" text="readmore" />
                </TextBox>
                <Image src="./images/about.webp" />
            </SectionContainer>
        </Section>
    )
}

export default AboutMeSection
