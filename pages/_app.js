// use the App component to keep state between pages

// apply styles globally
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }