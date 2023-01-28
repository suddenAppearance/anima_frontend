import React from 'react';
import classes from './CenterModal.module.css'

const CenterModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.centerModal]
    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.centerModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default CenterModal;