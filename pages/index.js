import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Araia Capital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/logo-araia-capital.png"></img>
        <p className="description">
          contact us at hello[at]araia.capital
        </p>
      </main>
      <Footer />
    </div>
  )
}
