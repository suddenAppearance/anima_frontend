import React from 'react';
import GreenButton from "./UI/button/GreenButton";
import cs from "./styles/ProjectsHeading.module.css"

const ProjectsHeading = ({setModal}) => {
    return (
        <div className={cs.headingBar}>
            <div className={cs.headingItem}>
                <h1>
                    Проекты
                </h1>
            </div>

            <div className={cs.headingItem}>
                <div className={cs.headingTab}>Мои проекты</div>
                <div className={[cs.headingTab, cs.headingTabActive].join(" ")}>Все проекты</div>
            </div>
            <div className={cs.headingItem}>
                <GreenButton onClick={() => setModal(true)}>
                    + Создать проект
                </GreenButton>
            </div>
        </div>
    );
};

export default ProjectsHeading;