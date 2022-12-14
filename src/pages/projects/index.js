import Head from 'next/head';
import { Fragment } from 'react';
import Breadcrumb from '../../components/breadcrumb';
import HeaderTwo from '../../components/header/header-2';
import AllProjects from '../../components/projects/all-projects';
import { getAllItems } from '../../lib/items-util';

function allItemsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Chantiers</title>
        <meta
          name='description'
          content='Exemples de trois chantiers réalisés par l’entreprise peintures Hazard-Samin, Serge Samin et son équipe. Peinture, revêtements, murs, sol, ameublement sur mesure, aménagements'
        />
      </Head>
      <HeaderTwo />
      <Breadcrumb activePage={'Chantiers'} pageTitle={'Nos chantiers'} />
      <AllProjects projects={props.projects} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allItems = getAllItems('projects');

  return {
    props: {
      projects: allItems,
    },
  };
}

export default allItemsPage;
