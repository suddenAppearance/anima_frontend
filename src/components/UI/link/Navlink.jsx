import React from 'react';
import {Link} from "react-router-dom";
import cl from "./Navlink.module.css"

const Navlink = ({children, ...props}) => {
    return (
        <Link {...props} className={cl.navlink}>
            {children}
        </Link>
    );
};

export default Navlink;