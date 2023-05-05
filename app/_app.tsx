import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return(
    <NextUIProvider>
    <ThemeProvider enableSystem={true} attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
    </NextUIProvider>
  ) 
}