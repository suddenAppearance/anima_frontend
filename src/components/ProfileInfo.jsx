import React from 'react';

const ProfileInfo = ({name, email, session}) => {


    return (
        <div>
            <div>
                {name}
            </div>
            <div>
                {email}
            </div>
            <div>
                {session}
            </div>
        </div>
    );
};

export default ProfileInfo;