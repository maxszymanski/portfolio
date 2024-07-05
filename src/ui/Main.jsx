import styled from 'styled-components'

const Main = styled.main`
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    padding-top: ${(props) => (props.$mainPage ? '0' : '2em')};
`
export default Main
