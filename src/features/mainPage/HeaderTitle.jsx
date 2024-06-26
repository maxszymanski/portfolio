import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { screenWidth } from '../../styles/mediaQueries'
import { TitleInfo } from './HeaderImage'
import StyledLink from '../../ui/StyledLink'

const Title = styled.h1`
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 1em;

    @media ${screenWidth.small} {
        padding: 0 0.5em;
    }
`
export const TitleSpan = styled.span`
    color: var(--color-primary);
    font-weight: 800;
`

const TitleBox = styled.div`
    margin-top: 0.5em;
    text-align: center;
`

function HeaderTitle() {
    const { t } = useTranslation()
    return (
        <TitleBox>
            <Title>
                {t('hi')} 👋
                <br />
                {t('welcome')} <br /> <TitleSpan>front-end developer</TitleSpan>
            </Title>
            <TitleInfo>{t('introduction')}</TitleInfo>
            <StyledLink isMobile text="contactme" to="/contact" />
        </TitleBox>
    )
}

export default HeaderTitle
