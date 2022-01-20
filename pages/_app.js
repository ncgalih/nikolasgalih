import '../styles/globals.css'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.style.setProperty('--vh',`${window.innerHeight * 0.01}px`)
  })
  return <Component {...pageProps} />
}

export default MyApp
