import FeaturedProfile from '@/components/Featured-Profiles/FeaturedProfiles'
import Footer from '@/components/Footer/Footer'
import MainHeader from '@/components/Headers/MainHeader'
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
            <MainHeader />
            <Component {...pageProps} />
            <FeaturedProfile />
            <Footer />
        </main>
    </>
}
