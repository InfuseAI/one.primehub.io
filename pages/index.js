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
  
        <!-- Hotjar Tracking Code for https://one.primehub.io/ -->
        <script>
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2559508,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        </script>
  
      </Head>

      <Hero />

      <Logos />

      <Coffee />

      <Footer />
    </div>
  )
}
