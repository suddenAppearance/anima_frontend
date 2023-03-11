import React from 'react';
import classes from "./styles/ProfileInfo.module.css"

const ProfileInfo = ({name, email}) => {


    return (
        <div className={classes.profileContainer}>
            <div className={classes.nameField}>
                {name}
            </div>
            <div className={classes.emailField}>
                {email}
            </div>
        </div>
    );
};

export default ProfileInfo;