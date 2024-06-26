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
`

const HeaderBox = styled.div`
    display: flex;
    flex-direction: column;

    @media ${screenWidth.lg} {
        flex-direction: row;
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
        </MainHeader>
    )
}

export default Header
