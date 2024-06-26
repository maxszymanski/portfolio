import styled from 'styled-components'
import i18n from '../../i18n'

const Switcher = styled.select`
    background-color: transparent;
    border: none;
    display: inline-block;
    width: 55px;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 2px;
    padding: 0.2em;
    outline: var(--color-white);
    &:focus {
        outline: none;
        border-color: var(--color-white);
        color: var(--color-white);
    }
`
const OptionButton = styled.option`
    color: var(--color-white);
    background-color: var(--background);
    &:hover {
        color: var(--color-primary);
        background-color: var(--color-white);
    }
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
