import styled, { css } from 'styled-components'
import { screenWidth } from '../styles/mediaQueries'

const position = {
    left: css`
        left: 5em;
        bottom: 5em;
    `,
    right: css`
        right: -5em;
        bottom: 5em;
    `,
}

const RotatedSquare = styled.div`
    position: absolute;
    display: none;
    height: 120px;
    width: 120px;
    background-color: transparent;
    border: 1px solid var(--color-gray);
    border-radius: 5px;
    animation: 100s infinite rotateSquare;
    ${(props) => position[props.$position] + ';'}

    @media ${screenWidth.xl} {
        display: block;
    }

    @keyframes rotateSquare {
        from {
            rotate: 0deg;
        }
        to {
            rotate: 360deg;
        }
    }
`
RotatedSquare.defaultProps = {
    $position: 'right',
}
export default RotatedSquare
