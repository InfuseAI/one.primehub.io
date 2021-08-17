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
      </Head>

      <Hero />

      <Logos />

      <Coffee />

      <Footer />
    </div>
  )
}
