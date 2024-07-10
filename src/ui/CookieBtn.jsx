import styled from 'styled-components'
import { useAppContext } from '../context/useAppContext'
import { linkStyles } from './StyledLink'
import { useTranslation } from 'react-i18next'

const CookieButton = styled.button`
    ${linkStyles}
`

const CookieBtn = () => {
    const { closeCookieModal } = useAppContext()
    const { t } = useTranslation()
    return (
        <CookieButton $isPrimary onClick={closeCookieModal}>
            {t('cookie.accept')}
        </CookieButton>
    )
}

export default CookieBtn
