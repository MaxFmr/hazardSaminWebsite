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
      </Head>
      <div className='container'>
        <Script id='google-analytics' strategy='afterInteractive'>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P8DTC6L');`}
        </Script>
      </div>
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
