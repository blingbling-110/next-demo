import '../styles/globals.css'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>网站通用标题</title>
      </Head>
      <div>header</div>
      <Component {...pageProps} />
      <div>footer</div>
    </>
  )
}

export default MyApp
