import { AppProps } from 'next/app'
import { FC } from 'react'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyles />
  </ThemeProvider>
)

export default App
