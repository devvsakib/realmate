import MainHeader from '@/components/Headers/MainHeader'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>RealMate - Find your mate</title>
      <link rel="shortcut icon" href="/assets/favicon.svg" type="image/x-icon" />
    </Head>
    <MainHeader />
    <Component {...pageProps} />
  </>
}
