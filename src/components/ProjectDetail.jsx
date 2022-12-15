import React from 'react';
import cs from './styles/ProjectDetail.module.css'
import AnimationCard from "./AnimationCard";

const ProjectDetail = ({project}) => {
    const date = new Date(project.created_at)
    const author = project.author
    const animations = project.animations
    return (
        <div className={cs.projectDetail}>
            <div className={cs.heading}>
                {project.title}
            </div>
            <div className={cs.projectInfoBlock}>
                <div className={cs.category}>
                    <div className={cs.categoryHeading}>
                        Описание
                    </div>
                    <div className={cs.infoPlaintext}>
                        {project.description}
                    </div>
                </div>
                <div className={cs.category}>
                    <div className={cs.categoryHeading}>
                        Общая информация
                    </div>
                    <div className={cs.infoRow}>
                        <div className={cs.infoLabel}>
                            Дата создания
                        </div>
                        <div className={cs.infoValue}>
                            {date.toLocaleString('ru-RU')}
                        </div>
                    </div>
                </div>
                <div className={cs.category}>
                    <div className={cs.categoryHeading}>
                        Автор
                    </div>
                    <div className={cs.infoRow}>
                        <div className={cs.infoLabel}>
                            Имя
                        </div>
                        <div className={cs.infoValue}>
                            {author.last_name} {author.first_name}
                        </div>
                    </div>
                    <div className={cs.infoRow}>
                        <div className={cs.infoLabel}>
                            Почта
                        </div>
                        <div className={cs.infoValue}>
                            {author.email}
                        </div>
                    </div>
                </div>
                <div className={cs.category}>
                    <div className={cs.categoryHeading}>
                        Анимации
                    </div>
                    <div className={cs.animationsList}>
                        {animations.map((animation) => <AnimationCard animation={animation}/>)

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;