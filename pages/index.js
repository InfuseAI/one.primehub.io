import Hero from '../components/hero'
import Head from 'next/head'
import Logos from '../components/logos'
import Coffee from '../components/coffee'
import Footer from '../components/footer'

export default function Home () {
  return (
    <div>
      <Head>
        <title>1-click Install for PrimeHub</title>
        <link rel="icon" href="/favicon.ico" />

        <script type="text/javascript" src="/hotjar.js" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L0B04EW6NF" />
        <script type="text/javascript" src="/ga.js" />
      </Head>

      <Hero />

      <Logos />

      <Coffee />

      <Footer />
    </div>
  )
}
