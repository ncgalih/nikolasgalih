import '../styles/globals.css'
import {useEffect} from 'react'
import Menu from '../components/menu'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.style.setProperty('--vh',`${window.innerHeight * 0.01}px`)
  })
  return (
    <>
      <Component {...pageProps} />
      <Menu />
    </>
  )
}

export default MyApp
