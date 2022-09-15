import { Fragment } from 'react';
import ProjectsGrid from './projects-grid';
import { useState } from 'react';

function AllProjects(props) {
  const [projects, setProjects] = useState(props.projects);

  const onFilterHandler = (e) => {
    e.preventDefault();
    const target = e.target;
    const filterValue = target.dataset.filter;
    const filteredProject = props.projects.filter(
      (pro) => pro.category === filterValue
    );
    filterValue === 'all'
      ? setProjects(props.projects)
      : setProjects(filteredProject);
  };
  return (
    <Fragment>
      <div className='container'></div>
      <div className='grid xl:grid-cols-3 fixed-lg:grid-cols-3 fixed-md:grid-cols-3 gap-[5px] m-4'>
        <ProjectsGrid projects={projects} />
      </div>
    </Fragment>
  );
}

export default AllProjects;
