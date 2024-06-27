import styled from 'styled-components'
import HeaderTitle from './HeaderTitle'
import HeaderImage from './HeaderImage'
import HeaderQoute from './HeaderQoute'
import { screenWidth } from '../../styles/mediaQueries'

const MainHeader = styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 5em 1.5em;
    align-items: center;

    @media ${screenWidth.lg} {
        padding: 8em 2em 5em;
    }
    @media ${screenWidth.xl} {
        padding-top: 10em;
    }
`

const HeaderBox = styled.div`
    display: flex;
    flex-direction: column;

    @media ${screenWidth.lg} {
        flex-direction: row;
        align-items: center;
        margin-bottom: 3em;
    }
    @media ${screenWidth.xl} {
        margin-bottom: 5em;
    }
`

const RotatedSquare = styled.div`
    position: absolute;
    display: none;
    right: -5em;
    bottom: 5em;
    height: 120px;
    width: 120px;
    background-color: transparent;
    border: 1px solid var(--color-gray);
    border-radius: 5px;
    animation: 100s infinite rotateSquare;

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

function Header() {
    return (
        <MainHeader>
            <HeaderBox>
                <HeaderTitle />
                <HeaderImage />
            </HeaderBox>
            <HeaderQoute />
            <RotatedSquare />
        </MainHeader>
    )
}

export default Header
