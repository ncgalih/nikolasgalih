import '../styles/globals.css'
import {useEffect} from 'react'
import Menu from '../components/menu'
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    document.documentElement.style.setProperty('--vh',`${window.innerHeight * 0.01}px`)
  })
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Component {...pageProps} />
      <Menu />
    </>
  )
}

export default MyApp
