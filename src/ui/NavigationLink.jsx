import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useAppContext } from '../context/useAppContext'

const NavItem = styled.li``

const NavLinkStyled = styled(NavLink)`
    font-size: 2.2rem;
    transition: color 0.3s;
    padding: 0.5em;
    &:hover {
        color: var(--color-white);
    }
    &.active {
        color: var(--color-white);
    }
`

const NavLinkSpan = styled.span`
    color: var(--color-primary);
    margin-right: 0.3em;
`

function NavigationLink({ to, text }) {
    const { toggleShowNav } = useAppContext()
    return (
        <NavItem>
            <NavLinkStyled to={to} onClick={toggleShowNav}>
                <NavLinkSpan>#</NavLinkSpan>
                {text}
            </NavLinkStyled>
        </NavItem>
    )
}

export default NavigationLink
