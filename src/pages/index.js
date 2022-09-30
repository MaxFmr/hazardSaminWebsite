import { Fragment } from 'react';
import Head from 'next/head';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import HeaderOne from '../components/header/header-1';
import Hero from '../components/home-page/hero';
import Services from '../components/home-page/services';
import About from '../components/home-page/about';
import Testimonial from '../components/home-page/testimonial';
import Script from 'next/script';

import LatestProject from '../components/home-page/latest-project';

function HomePage(props) {
  return (
    <Fragment>
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-N7D6C32BNJ'
        id='google-analytics'
        strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-N7D6C32BNJ');
        `}
      </Script>
      <Head>
        <title>Peinture Hazard-Samin</title>
        <meta
          name='google-site-verification'
          content='YvTIft4XGDXwZTAbiex5wwvb7V5t3fA9V3bL5VIOF10'
        />
        <meta
          name='description'
          content='Peintures Hazard-Samin, artisan peintre à Valenciennes, site officiel. Notre entreprise de peinture en batiment, décoration d’intérieur et revêtements de sol est située à Aulnoye-Lez-Valenciennes et reconnue dans le Valenciennois'
        />
        <meta
          property='og:url'
          content='https://www.peintureshazardsamin.com'
        />
        <meta
          property='og:video'
          content='https://www.maximekerlidou.fr/videos/samin/videobanner.mp4'
        />
        <meta
          property='og:video'
          content='https://www.maximekerlidou.fr/videos/samin/video.mp4'
        />
        <meta
          property='og:video'
          content='https://www.maximekerlidou.fr/videos/samin/pinceau.mp4'
        />
        <meta property='url' content='https://www.peintureshazardsamin.com' />
        <meta
          property='video'
          content='https://www.maximekerlidou.fr/videos/samin/videobanner.mp4'
        />
        <meta
          property='video'
          content='https://www.maximekerlidou.fr/videos/samin/video.mp4'
        />
        <meta
          property='video'
          content='https://www.maximekerlidou.fr/videos/samin/pinceau.mp4'
        />
      </Head>

      <HeaderOne />
      <Hero heroItems={props.heroItems} />
      <Services services={props.services} />
      <About />
      <LatestProject projects={props.projects} />
      <Testimonial testimonialItems={props.testimonialItems} />
      {/* <Brand brandItems={props.brandItems} /> */}
    </Fragment>
  );
}

export function getStaticProps() {
  const heroItems = getAllItems('heros');
  const posts = getAllItems('posts');
  const projects = getAllItems('projects');
  const services = getAllItems('services');
  const pricingItems = getAllItems('pricing');
  const testimonialItems = getAllItems('testimonial');
  const brandItems = getAllItems('brands');
  const LatestProject = getFeaturedItems(projects);
  const FeaturedPost = getFeaturedItems(posts);

  return {
    props: {
      heroItems,
      projects: LatestProject,
      posts: FeaturedPost,
      services,
      pricingItems,
      testimonialItems,
      brandItems,
    },
  };
}

export default HomePage;
