import React from 'react';
import classes from "./FooterModal.module.css";

const FooterModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.footerModal]
    if (visible) {
        rootClasses.push(classes.active);
        const body = document.getElementsByTagName("body").item(0)
        body.style.overflow = "hidden"
    } else {
        const body = document.getElementsByTagName("body").item(0)
        body.style.overflow = "auto"
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.footerModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default FooterModal;