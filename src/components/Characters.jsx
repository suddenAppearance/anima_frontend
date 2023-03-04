import React from 'react';
import CharacterCard from "./CharacterCard";

const Characters = ({files, setCharacter, animation}) => {
    return (<div className="characters-container">
        {files.map((file) => <CharacterCard
            setCharacter={setCharacter}
            key={file.file_id}
            character={file}
            animation={animation}
            title={file.title}/>)}
    </div>);
};

export default Characters;