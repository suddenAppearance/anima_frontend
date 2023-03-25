import React from 'react';
import classes from "../styles/Index.module.css"

const Index = () => {
    return (
        <div className={classes.indexPage}>
            <div className={classes.indexTitle}>
                Anima
            </div>
            <div className={classes.indexDescription}>
                Анимируйте свои модели всего за пару кликов
            </div>
        </div>
    );
};

export default Index;