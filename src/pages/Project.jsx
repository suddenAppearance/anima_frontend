import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useKeycloak} from "@react-keycloak/web";
import {useFetching} from "../hooks/useFetching";
import {useProjectService} from "../hooks/useProjectService";
import ProjectDetail from "../components/ProjectDetail";

const Project = () => {
    let {id} = useParams()

    const {keycloak} = useKeycloak()
    const [project, setProjectData] = useState()

    const projectService = useProjectService()
    const [getProject, isProjectGetting, projectGetError] = useFetching(async (id) => {
        const projectResponse = await projectService.getProject(id)
        setProjectData(projectResponse.data)
    })
    useEffect(() => {
        if (keycloak?.authenticated)
            getProject(id)
    }, [keycloak?.authenticated, id])

    return (
        <div>
            {project &&
                <ProjectDetail project={project}/>
            }
        </div>
    );
};

export default Project;