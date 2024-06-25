import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useAppContext } from '../context/useAppContext'

const NavItem = styled.li``

const NavLinkStyled = styled(NavLink)`
    font-size: 2.2rem;
    transition: color 0.3s;
    &:hover {
        color: var(--color-white);
    }
    &.active {
        color: var(--color-primary);
    }
`

const NavLinkSpan = styled.span`
    color: var(--color-primary);
    margin-right: 0.5em;
`

function NavigationLink({ to, text }) {
    const { toggleShowMenu } = useAppContext()
    return (
        <NavItem>
            <NavLinkStyled to={to} onClick={toggleShowMenu}>
                <NavLinkSpan>#</NavLinkSpan>
                {text}
            </NavLinkStyled>
        </NavItem>
    )
}

export default NavigationLink
