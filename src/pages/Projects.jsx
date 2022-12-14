import React, {useEffect, useState} from 'react';
import GreenButton from "../components/UI/button/GreenButton";
import Modal from "../components/UI/modal/Modal";
import ProjectsForm from "../components/ProjectsForm";
import {useFetching} from "../hooks/useFetching";
import {useProjectService} from "../hooks/useProjectService";
import {useKeycloak} from "@react-keycloak/web";
import ProjectsList from "../components/ProjectsList";

const Projects = () => {
    const {keycloak} = useKeycloak()
    const [modal, setModal] = useState(false)
    const [projects, setProjects] = useState(undefined)

    const projectService = useProjectService()
    const [sendProject, isProjectSending, projectSendError] = useFetching(async (project) => {
        const projectResponse = await projectService.createProject(project)
        setProjects([...projects, projectResponse.data])
    })
    const [getProjects, isProjectsGetting, projectsGetError] = useFetching(async () => {
        const projectResponse = await projectService.getProjects()
        setProjects(projectResponse.data)
    })


    useEffect(() => {
        if (keycloak?.authenticated)
            getProjects()
    }, [keycloak?.authenticated])

    const createProject = async (project) => {
        await sendProject(project)
        setModal(false)
    }

    return (
        <div>
            {projects?.length &&
                <ProjectsList projects={projects} setModal={setModal}/>
            }
            <Modal visible={modal} setVisible={setModal}>
                <ProjectsForm createProject={createProject}/>
            </Modal>
        </div>
    );
};

export default Projects;