import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { screenWidth } from '../../styles/mediaQueries'
import { TitleInfo } from './HeaderImage'

const Title = styled.h1`
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 0.8em;
    text-align: center;

    @media ${screenWidth.small} {
        text-align: left;
    }
`
export const TitleSpan = styled.span`
    color: var(--color-primary);
    font-weight: 800;
`

function HeaderTitle() {
    const { t } = useTranslation()
    return (
        <>
            <Title>
                {t('welcome')} <br />{' '}
                <TitleSpan>
                    front-end <br /> developer
                </TitleSpan>
            </Title>
            <TitleInfo>{t('introduction')}</TitleInfo>
        </>
    )
}

export default HeaderTitle
