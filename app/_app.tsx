import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Roboto } from 'next/font/google';

 // 1. Import `createTheme`

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {white:"#fffefc"}, // optional
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {dark:"#121212"}, // optional
  }
})

// Font Failed
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return(
    
    <NextThemesProvider defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
    <NextUIProvider>
      <Component {...pageProps} />
      </NextUIProvider>
      </NextThemesProvider>
  ) 
}