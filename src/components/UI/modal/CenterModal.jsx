import React, {useCallback, useEffect} from 'react';
import classes from './CenterModal.module.css'

const CenterModal = ({children, visible, setVisible}) => {
    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            setVisible(false)
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

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