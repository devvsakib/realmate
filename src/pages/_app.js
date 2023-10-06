import ExampleNavbarOne  from '@/components/Headers/MainHeader'
import FooterFour  from '@/components/Footer/footer'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>RealMate - Find your mate</title>
      <link rel="shortcut icon" href="/assets/favicon.svg" type="image/x-icon" />
    </Head>
    <ExampleNavbarOne/>
    <div className='mb-96'>
     

    </div>
    <FooterFour/>
    <Component {...pageProps} />
  </>
}
