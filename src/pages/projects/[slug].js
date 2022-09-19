import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import HeaderOne from '../../components/header/header-1';
import ProjectContent from '../../components/projects/project-detail/project-content';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';

function ProjectDetailPage(props) {
  const { prevProject, nextProject } = props;

  return (
    <Fragment>
      <Head>
        <title>{props.project.title}</title>
        <meta name='description' content={props.project.excerpt} />
      </Head>
      <HeaderOne />
      <ProjectContent project={props.project} />

      <div className='project-pagination' style={{ marginTop: '40px' }}>
        <div className='image-layer relative'>
          <div className='grid grid-cols-2 relative text-[18px] leading-6 uppercase font-semibold tracking-[10px] z-[1]'>
            <Link href={`/projects/${prevProject.slug}`}>
              <a
                className={`prev py-[50px] mr-[30px] flex justify-center bg-cover bg-no-repeat bg-center relative z-[1] before:z-[-1] before:bg-black before:opacity-60 before:absolute before:w-full before:h-full before:top-0 before:left-0 ${
                  !prevProject?.slug
                    ? 'text-dark pointer-events-none opacity-40'
                    : 'text-white'
                }`}
                style={{
                  backgroundImage: `url('/images/projects/${
                    prevProject?.id + '/' + prevProject?.image
                  }')`,
                }}>
                Précédent
              </a>
            </Link>
            <Link href={`/projects/${nextProject?.slug}`}>
              <a
                className={`next py-[50px] flex justify-center bg-cover bg-no-repeat bg-center text-right relative z-[1] before:z-[-1] before:bg-black before:opacity-60 before:absolute before:w-full before:h-full before:top-0 before:left-0 ${
                  !nextProject?.slug
                    ? 'text-dark pointer-events-none opacity-40'
                    : 'text-white'
                }`}
                style={{
                  backgroundImage: `url('/images/projects/${
                    nextProject?.id + '/' + nextProject?.image
                  }')`,
                }}>
                Suivant
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const project = getItemData(slug, 'projects');
  const projects = getAllItems('projects');
  const currentProjectIndex = projects.findIndex(
    (project) => project.slug === slug
  );
  const nextProject = projects[currentProjectIndex + 1]
    ? projects[currentProjectIndex + 1]
    : {};
  const prevProject = projects[currentProjectIndex - 1]
    ? projects[currentProjectIndex - 1]
    : {};

  return {
    props: {
      project,
      prevProject,
      nextProject,
    },
  };
}

export function getStaticPaths() {
  const projectFilenames = getItemsFiles('projects');

  const slugs = projectFilenames.map((fileName) =>
    fileName.replace(/\.md$/, '')
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default ProjectDetailPage;
