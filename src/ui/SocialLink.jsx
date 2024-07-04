import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SocialLink = styled(Link)`
    padding: 0.1em;
    border-radius: 8px;
    transition: background-color 0.3s;
    &:hover {
        background-color: var(--color-socialLink);
    }
`
