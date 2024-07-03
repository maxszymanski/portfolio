import { createGlobalStyle } from 'styled-components'
// Supports weights 300-700
import '@fontsource-variable/fira-code'
import { screenWidth } from './mediaQueries'

const GlobalStyles = createGlobalStyle`
:root {
 
  --background: #282C33;
  --color-white: #eef2ff;
  --color-primary: #C778DD;
  --color-gray: #ABB2BF;
  --color-stone: #4d5158;
  --color-socialLink: #4d51584c;
  --color-primaryLink: #c778dd33;
 

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

// &,&.ligt-mode{

//   /* Grey */
//   --color-grey-0: #fff;
//   --color-grey-50: #f9fafb;
//   --color-grey-100: #f3f4f6;
//   --color-grey-200: #e5e7eb;
//   --color-grey-300: #d1d5db;
//   --color-grey-400: #9ca3af;
//   --color-grey-500: #6b7280;
//   --color-grey-600: #4b5563;
//   --color-grey-700: #374151;
//   --color-grey-800: #1f2937;
//   --color-grey-900: #111827;

//   --color-blue-100: #e0f2fe;
//   --color-blue-700: #0369a1;
//   --color-green-100: #dcfce7;
//   --color-green-700: #15803d;
//   --color-yellow-100: #fef9c3;
//   --color-yellow-700: #a16207;
//   --color-silver-100: #e5e7eb;
//   --color-silver-700: #374151;
//   --color-indigo-100: #e0e7ff;
//   --color-indigo-700: #4338ca;

//   --color-red-100: #fee2e2;
//   --color-red-700: #b91c1c;
//   --color-red-800: #991b1b;

//   --backdrop-color: rgba(255, 255, 255, 0.1);

//   --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
//   --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
//   --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

//    --image-grayscale: 0;
//   --image-opacity: 100%;
// }

//   &.dark-mode {
//     --color-grey-0: #18212f;
// --color-grey-50: #111827;
// --color-grey-100: #1f2937;
// --color-grey-200: #374151;
// --color-grey-300: #4b5563;
// --color-grey-400: #6b7280;
// --color-grey-500: #9ca3af;
// --color-grey-600: #d1d5db;
// --color-grey-700: #e5e7eb;
// --color-grey-800: #f3f4f6;
// --color-grey-900: #f9fafb;

// --color-blue-100: #075985;
// --color-blue-700: #e0f2fe;
// --color-green-100: #166534;
// --color-green-700: #dcfce7;
// --color-yellow-100: #854d0e;
// --color-yellow-700: #fef9c3;
// --color-silver-100: #374151;
// --color-silver-700: #f3f4f6;
// --color-indigo-100: #3730a3;
// --color-indigo-700: #e0e7ff;

// --color-red-100: #fee2e2;
// --color-red-700: #b91c1c;
// --color-red-800: #991b1b;

// --backdrop-color: rgba(0, 0, 0, 0.3);

// --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
// --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
// --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

// --image-grayscale: 10%;
// --image-opacity: 90%;
//   }
