import React, {useEffect, useState} from 'react';
import GreenButton from "../components/UI/button/GreenButton";
import Modal from "../components/UI/modal/Modal";
import ProjectsForm from "../components/ProjectsForm";
import {useFetching} from "../hooks/useFetching";
import {useProjectService} from "../hooks/useProjectService";
import {useKeycloak} from "@react-keycloak/web";

const Projects = () => {
    const {keycloak} = useKeycloak()
    const [modal, setModal] = useState(false)
    const [projects, setProjects] = useState(undefined)

    const projectService = useProjectService()
    const [sendProject, isProjectSending, projectSendError] = useFetching(async (project) => {
        const projectResponse = projectService.createProject(project)
    })
    const [getProjects, isProjectsGetting, projectsGetError] = useFetching(async () => {
        const projectResponse = await projectService.getProjects()
        setProjects(projectResponse.data)
    })


    useEffect(() => {
        const projects = getProjects()
    }, [keycloak?.authenticated])

    const createProject = async (project) => {
        await sendProject(project)
        setModal(false)
    }

    return (
        <div>
            <GreenButton onClick={() => setModal(true)}>
                Создать проект
            </GreenButton>
            {projects?.map(project => <div key={project.id}>{JSON.stringify(project)}</div>)}
            <Modal visible={modal} setVisible={setModal}>
                <ProjectsForm createProject={createProject}/>
            </Modal>
        </div>
    );
};

export default Projects;