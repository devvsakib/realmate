import Footer from '@/components/Footer/Footer'
import MainHeader from '@/components/Headers/MainHeader'
import MobileMainHeader from '@/components/Headers/MobileMainHeader'
import '@/styles/globals.css'
import '@/styles/tailwind.common.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return <>
        <Head>
            <title>RealMate - Find your mate</title>
            <link rel="shortcut icon" href="/assets/favicon.svg" type="image/x-icon" />
        </Head>
        <main className='flex flex-col justify-between min-h-screen'>
            <div className="lg:hidden">
                <MobileMainHeader />
            </div>
            <div className="hidden lg:block">
                <MainHeader />
            </div>
            <Component {...pageProps} />
            <Footer />
        </main>
    </>
}
