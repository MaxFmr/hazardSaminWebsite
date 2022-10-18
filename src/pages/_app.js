import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Head from 'next/head';
import { GoogleAnalytics } from 'nextjs-google-analytics';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GoogleAnalytics trackPageViews />

      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='../favicon.png' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
