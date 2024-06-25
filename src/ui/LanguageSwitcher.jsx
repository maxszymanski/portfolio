import styled from 'styled-components'
import i18n from '../../i18n'

const Switcher = styled.select`
    background-color: transparent;
    border: none;
    display: inline-block;
    width: 45px;
    color: var(--color-primary);
`
const OptionButton = styled.option`
    color: var(--color-gray);
`

function LanguageSwitcher() {
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <Switcher onChange={(e) => changeLanguage(e.target.value)}>
            <OptionButton value="en">EN</OptionButton>
            <OptionButton value="pl" onChange={() => changeLanguage('pl')}>
                PL
            </OptionButton>
        </Switcher>
    )
}

export default LanguageSwitcher
