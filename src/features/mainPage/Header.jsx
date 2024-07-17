import styled from 'styled-components'
import HeaderTitle from './HeaderTitle'
import HeaderImage from './HeaderImage'
import HeaderQoute from './HeaderQoute'
import { screenWidth } from '../../styles/mediaQueries'
import RotatedSquare from '../../ui/RotatedSquare'
import { useAppContext } from '../../context/useAppContext'

const MainHeader = styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5em 1.5em 0;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;

    @media ${screenWidth.lg} {
        padding: 8em 2em 0;
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

function Header() {
    const { isDesktop } = useAppContext()

    return (
        <MainHeader>
            <HeaderBox>
                <HeaderTitle />
                <HeaderImage />
            </HeaderBox>
            <HeaderQoute />
            <RotatedSquare />
            <RotatedSquare $position="left" />
        </MainHeader>
    )
}

export default Header
