import React from 'react';
import cs from "./styles/AnimationCard.module.css"

const AnimationCard = ({animation}) => {
    const date = new Date(animation.updated_at)
    return (
        <div className={cs.animationCard}>
            <div className={cs.animationCardTitle}>
                {animation.title}
            </div>
            <div className={cs.animationCardPreview}>
                <img src={process.env.PUBLIC_URL + "/img.png"} alt="No Image" width="250px"/>
            </div>
            <div className={cs.animationCardFooter}>
                {date.toLocaleString('ru-RU')}
            </div>
        </div>
    );
};

export default AnimationCard;