import React from 'react';
import {Link, useLocation} from "react-router-dom";
import cl from "./Navlink.module.css"

const Navlink = ({children, ...props}) => {
    const location = useLocation()
    const isActive = location.pathname === props.to

    const classNames = [cl.navlink]
    if (isActive) {
        classNames.push(cl.active)
    }

    return (
        <Link {...props} className={classNames.join(" ")}>
            {children}
        </Link>
    );
};

export default Navlink;