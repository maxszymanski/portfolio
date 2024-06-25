import styled from 'styled-components'
import { useAppContext } from '../context/useAppContext'

const BurgerBox = styled.div`
    position: relative;
    padding: 0.5em;
    height: 28px;
    cursor: pointer;

    &:hover > div,
    &:hover > div::before,
    &:hover > div::after {
        width: 24px;
    }
`

const BurgerButton = styled.div`
    position: relative;
    height: 2px;
    width: 24px;
    background-color: var(--color-white);
    transition: width 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    pointer-events: none;

    &::before,
    &::after {
        content: '';
        position: absolute;
        height: 2px;
        left: 0px;
        background-color: inherit;
        transition: width 0.3s ease;
    }
    &::after {
        width: 16px;
        top: 6px;
    }
    &::before {
        width: 8px;
        top: 12px;
    }
    &:hover,
    &:hover::after,
    &:hover::before {
        width: 24px;
    }
`

function BurgerMenu() {
    const { toggleShowMenu } = useAppContext()
    return (
        <BurgerBox onClick={toggleShowMenu}>
            <BurgerButton />
        </BurgerBox>
    )
}

export default BurgerMenu
