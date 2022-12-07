import React from 'react';
import {useKeycloak} from "@react-keycloak/web";
import ProfileInfo from "../components/ProfileInfo";

const Profile = () => {
    const {keycloak} = useKeycloak()
    if (keycloak?.authenticated){
        console.log(keycloak.idToken)
    }
    return (
        <div>
            {keycloak?.authenticated
                ? <ProfileInfo
                    email={keycloak?.idTokenParsed?.email}
                    name={keycloak?.idTokenParsed?.name}
                />
                : ""
            }
        </div>
    );
};

export default Profile;