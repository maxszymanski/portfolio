import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { screenWidth } from '../../styles/mediaQueries'
import { MdOutlineWavingHand } from 'react-icons/md'
import StyledLink from '../../ui/StyledLink'

const TitleBox = styled.div`
    margin-top: 0.5em;
    text-align: center;

    @media ${screenWidth.md} {
        padding: 0 5em;
    }
    @media ${screenWidth.lg} {
        padding: 0 3em 0 0;
        margin-top: 0;
        text-align: left;
        flex-basis: 60%;
    }
    @media ${screenWidth.xl} {
        padding: 0 8em 0 5em;
    }
`

const Title = styled.h1`
    position: relative;
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 1em;

    @media ${screenWidth.small} {
        padding: 0 0.5em;
    }
    @media ${screenWidth.lg} {
        padding: 0;
    }
    @media ${screenWidth.xl} {
        font-size: 3.5rem;
    }
    @media ${screenWidth.xxl} {
        font-size: 4rem;
    }
`
export const TitleSpan = styled.span`
    color: var(--color-primary);
    font-weight: 800;
`

const TitleText = styled.p`
    color: var(--color-gray);

    @media ${screenWidth.md} {
        margin-bottom: 3em;
    }
    @media ${screenWidth.xl} {
        font-size: 1.8rem;
    }
`

const Hand = styled(MdOutlineWavingHand)`
    color: var(--color-primary);
    margin-bottom: -0.1em;
`

function HeaderTitle() {
    const { t } = useTranslation()
    return (
        <TitleBox>
            <Title>
                {t('hi')} <Hand />
                <br />
                {t('welcome')} <br /> <TitleSpan>front-end developer</TitleSpan>
            </Title>
            <TitleText>{t('introduction')}</TitleText>
            <StyledLink isMobile text="contactme" to="/contact" />
        </TitleBox>
    )
}

export default HeaderTitle
