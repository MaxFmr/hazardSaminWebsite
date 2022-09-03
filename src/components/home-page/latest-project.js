import ProjectSlider from '../projects/projects-slider';
import Link from 'next/link';

function LatestProject(props) {
  return (
    <div className='project-area md:pt-160 pt-[60px]'>
      <div className='container'>
        <div className='project-wrap flex justify-between items-center max-sm:flex-col mb-[60px]'>
          <h2 className='lm:text-[42px] lm:leading-[50px] text-[32px] max-sm:mb-[15px]'>
            Nos Chantiers
          </h2>
          <Link href='/projects'>
            <a className='text-[18px] text-secondary uppercase leading-[24px]'>
              Les projets
            </a>
          </Link>
        </div>
      </div>
      <ProjectSlider projects={props.projects} />
    </div>
  );
}

export default LatestProject;
