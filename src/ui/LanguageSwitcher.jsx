import styled from 'styled-components'
import i18n from '../../i18n'
import { screenWidth } from '../styles/mediaQueries'
import { useAppContext } from '../context/useAppContext'

const Switcher = styled.select`
    background-color: transparent;
    border: none;
    display: inline-block;
    width: fit-content;
    color: var(--color-gray);
    border: 1px solid var(--color-primary);
    border-radius: 2px;
    padding: 0.2em;
    margin-left: 0.5em;
    outline: var(--color-white);
    font-size: 2rem;
    transition: color 0.3s;
    cursor: pointer;
    &:focus {
        outline: none;
        border-color: var(--color-white);
        color: var(--color-white);
    }
    &:hover {
        color: var(--color-white);
    }

    @media ${screenWidth.lg} {
        border: none;
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
    const { toggleShowNav } = useAppContext()
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
        toggleShowNav()
    }

    return (
        <Switcher onChange={(e) => changeLanguage(e.target.value)}>
            <OptionButton value="en">EN</OptionButton>
            <OptionButton value="pl">PL</OptionButton>
        </Switcher>
    )
}

export default LanguageSwitcher
