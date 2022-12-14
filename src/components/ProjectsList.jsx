import React from 'react';
import cs from './styles/ProjectsList.module.css'
import ProjectsTable from "./ProjectsTable";
import ProjectsHeading from "./ProjectsHeading";

const ProjectsList = ({projects, setModal}) => {
    return (
        <div>
            <ProjectsHeading setModal={setModal}/>
            <ProjectsTable projects={projects}/>
        </div>
    );
};

export default ProjectsList;