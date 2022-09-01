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
                <title>All Projects</title>
                <meta
                    name='description'
                    content='A list of all programming-related tutorials and projects!'
                />
            </Head>
            <HeaderTwo />
            <Breadcrumb activePage={'Projects'} pageTitle={'Our Projects'} />
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
