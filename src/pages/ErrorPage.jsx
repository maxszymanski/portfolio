import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { screenWidth } from '../styles/mediaQueries'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import ReactGA from 'react-ga4'

const ErrorContainer = styled.div`
    background-image: url(/images/404.webp);
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3em;
    padding: 1.5em;

    @media ${screenWidth.xl} {
        gap: 5em;
    }
`
const ErrorTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    line-height: 250%;
    color: #9e9bb2;

    @media ${screenWidth.small} {
        font-size: 2.3rem;
        line-height: 300%;
    }
    @media ${screenWidth.small} {
        font-size: 3rem;
        line-height: 350%;
    }
    @media ${screenWidth.lg} {
        font-size: 3.5rem;
        line-height: 350%;
    }
    @media ${screenWidth.xl} {
        font-size: 6.4rem;
        line-height: 250%;
    }
`

const ErrorSpan = styled.span`
    font-size: 10rem;
    color: #d7d5e4;

    @media ${screenWidth.small} {
        font-size: 14rem;
    }
    @media ${screenWidth.md} {
        font-size: 16rem;
    }
    @media ${screenWidth.lg} {
        font-size: 20rem;
    }

    @media ${screenWidth.xl} {
        font-size: 26rem;
    }
`
const ErrorLink = styled(Link)`
    font-size: 2rem;
    padding: 0.3em;
    color: var(--color-gray);
    transition: color 0.3s;
    text-align: center;

    &:hover {
        color: var(--color-white);
    }

    @media ${screenWidth.small} {
        font-size: 2.4rem;
    }
    @media ${screenWidth.md} {
        font-size: 2.8rem;
    }
    @media ${screenWidth.lg} {
        font-size: 3rem;
    }
    @media ${screenWidth.xl} {
        font-size: 3rem;
    }
`

function ErrorPage() {
    ReactGA.send({
        hitType: 'pageviev',
        page: '/404',
        title: 'ErrorPage',
    })
    const { t } = useTranslation()
    return (
        <>
            <Helmet>
                <title>Max Szymański | {t('meta.errorPageTitle')}</title>
                <meta
                    name="description"
                    content={t('meta.description.pageError')}
                />
                <meta name="keywords" content="Strona 404" />
                <meta name="robots" content="noindex, nofollow"></meta>
            </Helmet>
            <ErrorContainer>
                <ErrorTitle>
                    <ErrorSpan>404</ErrorSpan> <br />
                    {t('errorPage.title')}
                </ErrorTitle>
                <ErrorLink to="/">{t('errorPage.link')}</ErrorLink>
            </ErrorContainer>
        </>
    )
}

export default ErrorPage
