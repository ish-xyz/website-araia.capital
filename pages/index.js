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
        <Header title="Araia Capital LTD" />
        <p className="description">
          creating a better tomorrow
        </p>
        <p className="description">
          <code>contact us at hello[at]araia.capital</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
