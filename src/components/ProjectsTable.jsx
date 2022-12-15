import React from 'react';
import cs from "./styles/ProjectsList.module.css";
import {Link} from "react-router-dom";

const ProjectsTable = ({projects}) => {
    return (
        <div className={cs.projectTable}>
            <div className={cs.projectTableRow}>
                <div className={cs.projectTableHeader} style={{width: "10%"}}>
                    <div>Номер</div>
                </div>
                <div className={cs.projectTableHeader} style={{width: "20%"}}>
                    <div>Дата и время создания</div>
                </div>
                <div className={cs.projectTableHeader} style={{width: "40%"}}>
                    <div>Название</div>
                </div>
                <div className={cs.projectTableHeader} style={{width: "30%"}}>
                    <div>Автор</div>
                </div>
            </div>
            {projects?.map(project => {
                const date = new Date(project.created_at)
                const author = project.author
                return (
                    <Link to={"/projects/" + project.id} key={project.id} className={cs.projectTableRow}>
                        <div className={cs.projectTableData} style={{width: "10%"}}>
                            <div>{project.id}</div>
                        </div>
                        <div className={cs.projectTableData} style={{width: "20%"}}>
                            <div>
                                <div className={cs.dataPrimary}>{date.toLocaleDateString('ru-RU')}</div>
                                <div className={cs.dataSecondary}>{date.toLocaleTimeString('ru-RU')}</div>
                            </div>
                        </div>
                        <div className={cs.projectTableData} style={{width: "40%"}}>
                            <div>{project.title}</div>
                        </div>
                        <div className={cs.projectTableData} style={{width: "30%"}}>
                            <div>
                                <div className={cs.dataPrimary}>{author.last_name} {author.first_name}</div>
                                <div className={cs.dataSecondary}>{author.email}</div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
};

export default ProjectsTable;