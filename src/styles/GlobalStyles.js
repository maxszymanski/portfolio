import { createGlobalStyle } from 'styled-components'
// Supports weights 300-700
import '@fontsource-variable/fira-code'
import { screenWidth } from './mediaQueries'

const GlobalStyles = createGlobalStyle`
:root {
 
  --background: rgb(40, 44, 51);
  --color-white: rgb(238, 242, 255);
  --color-primary: rgb(199, 120, 221);
  --color-primary2: #e4e7f5;
  --color-gray: rgb(171, 178, 191);
  --color-stone: rgb(77, 81, 88);
  --color-socialLink: rgba(77, 81, 88, 0.3);
  --color-primaryLink: rgba(199, 120, 221, 0.2);
  --color-success: rgb(25, 135, 84);
  --color-successHover: rgb(26, 186, 111);
  --color-alert: rgb(219,54,70);
  --color-alertHover: rgba(219,54,70,0.6);
 

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
 

}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px var(--background) inset !important;
    -webkit-text-fill-color: var(--color-white) !important;
  }
 
  @media ${screenWidth.lg} {
    overflow-x: hidden;
  }
 
}

body {
  font-family: 'Fira Code Variable', monospace;
  background-color: var(--background);
  color: var(--color-white);
  line-height: 1.5;
  font-size: 1.6rem;
  position: relative;
  width: 100%;

}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
}

*:disabled {
  cursor: not-allowed;
}



a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;

}
`

export default GlobalStyles
