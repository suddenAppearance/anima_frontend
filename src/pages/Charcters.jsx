import React, {useEffect, useState} from 'react';
import {useGateway} from "../hooks/useGateway";
import {useFetching} from "../hooks/useFetching";
import {useKeycloak} from "@react-keycloak/web";
import CharacterCard from "../components/CharacterCard";

const Characters = () => {
    const gateway = useGateway()
    const {keycloak} = useKeycloak()
    const [files, setFiles] = useState([])
    const [getFiles, isLoadingFiles, getFilesError] = useFetching(async () => {
        let response = await gateway.getFiles()
        if (response.status === 200) {
            setFiles(response.data)
        } else setFiles([])
    })
    useEffect(() => {
        if (keycloak.authenticated)
            getFiles()
    }, [keycloak.authenticated])
    return (
        <div className="characters">
            <div className="characters-container">
                {files.map((file) => <CharacterCard key={file.id} character={file}/>)}
            </div>
            <div className="character-scene">
                Test
            </div>
        </div>
    );
};

export default Characters;