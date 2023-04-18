import React from 'react';
import CharacterCard from "./CharacterCard";

const Characters = ({charactersFiles, setCharacter}) => {
    return (
        <div className="cards-container">
            {charactersFiles.map(
                (charactersFile) => <CharacterCard character={charactersFile} key={charactersFile.file_id}
                                                   setCharacter={setCharacter}/>
            )}
        </div>
    );
};

export default Characters;