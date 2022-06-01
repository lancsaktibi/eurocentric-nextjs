// use the App component to keep state between pages

// apply styles globally
import '../styles/globals.css'
import type { AppProps } from 'next/app';

export default function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}
