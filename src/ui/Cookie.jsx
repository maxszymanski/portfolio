import styled from 'styled-components'
import CookieBtn from './CookieBtn'
import { TitleLink } from '../features/mainPage/HeaderImage'
import { screenWidth } from '../styles/mediaQueries'
import { useTranslation } from 'react-i18next'

const CookieModal = styled.div`
    position: fixed;
    z-index: 50;
    width: 100%;
    bottom: 0;
    background-color: rgb(38, 41, 48);
    color: rgb(198, 202, 210);
    animation: slide 1s linear;

    @keyframes slide {
        from {
            transform: translateY(100%);
            opacity: 0;
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`

const CookieContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1.5em;
    padding: 1.5em;

    @media ${screenWidth.lg} {
        flex-direction: row;
        justify-content: space-evenly;
        gap: 2em;
    }
`
const CookieInfoBox = styled.div`
    line-height: 170%;
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    text-align: center;

    @media ${screenWidth.lg} {
        gap: 0.5em;
    }
    @media ${screenWidth.xl} {
        font-size: 1.6rem;
    }
`

function Cookie() {
    const { t } = useTranslation()
    return (
        <CookieModal>
            <CookieContainer>
                <CookieInfoBox>
                    <p>{t('cookie.textOne')}</p>
                    <p>
                        {t('cookie.textTwo')}{' '}
                        <TitleLink to="/privacy-polity">
                            {t('cookie.link')}
                        </TitleLink>
                        .
                    </p>
                </CookieInfoBox>
                <CookieBtn />
            </CookieContainer>
        </CookieModal>
    )
}

export default Cookie
