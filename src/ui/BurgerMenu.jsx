import styled from 'styled-components'

const BurgerButton = styled.div`
    position: relative;
    height: 2px;
    width: 20px;
    background-color: var(--color-white);

    @::before {
        content: '';
        position: absolute;
    }
`

function BurgerMenu() {
    return <BurgerButton />
}

export default BurgerMenu
