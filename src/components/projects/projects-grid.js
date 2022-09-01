import { Fragment } from 'react';
import ProjectItem from './project-item';

function ProjectsGrid(props) {
    const { projects } = props;

    return (
        <Fragment>
            {projects.map((project) => (
                <ProjectItem key={project.slug} project={project} />
            ))}
        </Fragment>
    );
}

export default ProjectsGrid;
