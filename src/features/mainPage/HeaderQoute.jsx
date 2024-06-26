import styled from 'styled-components'
import { commonStyles } from './HeaderImage'
import { useTranslation } from 'react-i18next'

const QuoteFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const QuoteBox = styled.div`
    ${commonStyles}
    margin-top: 2.5em;
    z-index: 0;
`
const AuthorBox = styled.div`
    ${commonStyles}
    border-top: none;
    flex-grow: 0;
    z-index: 0;
`

const qouteImageStyles = `
     position: absolute;
    z-index: 1;
    width: 30px;
`
const QouteTop = styled.img`
    ${qouteImageStyles}
    top: -10px;
    left: 10px;
`
const QouteBottom = styled.img`
    ${qouteImageStyles}
    bottom: -12px;
    right: 10px;
`

const Quote = styled.p`
    color: var(--color-white);
`

function HeaderQoute() {
    const { t } = useTranslation()
    return (
        <QuoteFlex>
            <QuoteBox>
                <Quote>{t('quote')}</Quote>
                <QouteTop src="/images/quote.png" />
                <QouteBottom src="/images/quote.png" />
            </QuoteBox>
            <AuthorBox>- Cory House</AuthorBox>
        </QuoteFlex>
    )
}

export default HeaderQoute
