import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import ProjectBanner from './project-banner';
import { Fragment } from 'react';
import Link from 'next/link';
import { IoMdGrid } from 'react-icons/io';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export const images = [];

function ProjectContent(props) {
  const { project } = props;

  const imagePath = `/images/projects/${project.id}/${project.image}`;

  const images = [];

  for (let index = 0; index < project.nbOfPhotos; index++) {
    images.push({
      original: `/images/projects/${project.id}/${index}.jpg`,

      thumbnail: `/images/projects/${project.id}/${index}.jpg`,
    });
  }

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <Fragment>
            <div className='project-upper-box md:pt-[150px] pt-[55px]'>
              <div className='container'>
                <div className='navigation pb-[50px]'>
                  <Link href='/projects'>
                    <a className='flex items-center text-[14px] leading-6 uppercase'>
                      <IoMdGrid className='text-[20px] mr-5' />
                      Back to Projects
                    </a>
                  </Link>
                </div>
                <ul className='info grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3'>
                  <li>
                    <span className='text-[#4D5660] mr-[5px]'>Location:</span>
                    {project?.location}
                  </li>
                  <li>
                    <span className='text-[#4D5660] mr-[5px]'>Client:</span>
                    {project?.clientName}
                  </li>
                  <li>
                    <span className='text-[#4D5660] mr-[5px]'>Completed:</span>
                    {project.completedDate}
                  </li>
                  <li>
                    <span className='text-[#4D5660] mr-[5px]'>Architect:</span>
                    {project.architectName}
                  </li>
                  <li>
                    <span className='text-[#4D5660] mr-[5px]'>Area:</span>
                    {project.squareUnits}
                  </li>
                </ul>
              </div>
            </div>
            <div className='project-description md:pt-[80px] pt-[40px]'>
              <div className='container'>
                <div className='content'>
                  <h2 className='text-[36px] leading-[58px] pb-10'>
                    Description
                  </h2>
                  <div
                    className='text-[18px] leading-8 text-secondary'
                    dangerouslySetInnerHTML={{
                      __html: project.additionDesc,
                    }}
                  />
                </div>
                <div className='image md:pt-[85px] pt-[50px] pb-20 '>
                  <ImageGallery items={images} additionalClass='caroussel' />
                </div>
              </div>
            </div>
          </Fragment>
        );
      }
    },
  };

  return (
    <article>
      <ProjectBanner
        title={project.title}
        excerpt={project.excerpt}
        categoryName={project.categoryName}
        image={imagePath}
      />
      <ReactMarkdown components={customRenderers}>
        {project.content}
      </ReactMarkdown>
    </article>
  );
}

export default ProjectContent;
