import Head from 'next/head';
import { Fragment } from 'react';
import Services from '../components/home-page/services';
import About from '../components/home-page/about';
import Testimonial from '../components/home-page/testimonial';
import { getAllItems } from '../lib/items-util';
import Brand from '../components/home-page/brand';
import PageBanner from '../components/page-banner/index';
import Team from '../components/team';
import HeaderTwo from '../components/header/header-2';

function AboutPage(props) {
  return (
    <Fragment>
      <Head>
        <title>A propos</title>
      </Head>
      <HeaderTwo />
      <About />
      {/* <Services services={props.services} /> */}
      <Testimonial testimonialItems={props.testimonialItems} />
      {/* <Brand brandItems={props.brandItems} /> */}
      <Team teamItems={props.teamItems} />
    </Fragment>
  );
}

export function getStaticProps() {
  const services = getAllItems('services');
  const testimonialItems = getAllItems('testimonial');
  const brandItems = getAllItems('brands');
  const teamItems = getAllItems('teams');

  return {
    props: {
      services,
      testimonialItems,
      brandItems,
      teamItems,
    },
  };
}

export default AboutPage;
