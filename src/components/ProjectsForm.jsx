import React, {useRef, useState} from 'react';
import Input from "./UI/input/Input";
import GreenButton from "./UI/button/GreenButton";

const ProjectsForm = ({createProject}) => {
    const [project, setProject] = useState({title: '', description: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newProject = {
            ...project
        }
        createProject(newProject)
    }

    return (
        <form>
            <Input
                onChange={e => setProject({...project, title: e.target.value})}
                placeholder="Название"
            />
            <Input
                onChange={e => setProject({...project, description: e.target.value})}
                placeholder="Описание"
            />
            <GreenButton onClick={addNewPost}
            >
                Создать
            </GreenButton>
        </form>
    );
};

export default ProjectsForm;