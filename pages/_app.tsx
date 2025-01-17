import '../styles/styles.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Bepronetwork</title>
      <script src='https://embed.runkit.com'></script>

    </Head>
    <Component {...pageProps} />
  </>
}
