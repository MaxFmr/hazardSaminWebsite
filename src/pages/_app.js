import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Head from 'next/head';
import { ScrollToTop } from '../components/scroll';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='shortcut icon' href='../favicon.png' />
            </Head>
            <Component {...pageProps} />
            <ScrollToTop />
        </Layout>
    );
}

export default MyApp;
