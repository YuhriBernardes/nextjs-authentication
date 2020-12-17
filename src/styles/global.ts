import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${props => props.theme.palette.background};
color: ${props => props.theme.font.color};
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font: ${props => `400 16px ${props.theme.font.family}, sans-serif`};
}
`
