import styled from 'styled-components'
import { screenWidth } from '../styles/mediaQueries'
import { useTranslation } from 'react-i18next'
import StyledLink from './StyledLink'

const SectionContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    gap: 3em;
    align-items: center;

    @media ${screenWidth.sm} {
        align-items: center;
    }
    @media ${screenWidth.md} {
        flex-direction: row;
        align-items: center;
    }

    @media ${screenWidth.lg} {
        gap: 4em;
        justify-content: space-around;
        margin-top: -0.8em;
    }
    @media ${screenWidth.xl} {
        justify-content: space-between;
        margin-top: -2em;
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
        max-width: 100%;
        min-height: 600px;
    }
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    color: var(--color-gray);

    @media ${screenWidth.lg} {
        max-width: 60%;
        align-items: flex-start;
    }
`

const RowText = styled.p`
    line-height: 2.6rem;

    @media ${screenWidth.xl} {
        font-size: 1.8rem;
    }
`

function AboutMeSection({ mainPage = false }) {
    const { t } = useTranslation()

    return (
        <SectionContainer>
            <TextBox>
                <RowText>{t('aboutHello')}</RowText>
                <RowText>{t('aboutmeone')}</RowText>
                <RowText>{t('aboutmetwo')}</RowText>
                <RowText>{t('aboutmethree')}</RowText>
                {mainPage && <StyledLink to="/aboutme" text="readmore" />}
            </TextBox>
            <Image src="./images/about.webp" />
        </SectionContainer>
    )
}

export default AboutMeSection
