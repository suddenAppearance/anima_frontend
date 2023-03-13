import React from 'react';
import CharacterCard from "./CharacterCard";

const Animations = ({animationFiles, setAnimation}) => {
    return (
        <div className="cards-container">
            {animationFiles.map((animationFile) => <CharacterCard character={animationFile} key={animationFile.file_id} setCharacter={setAnimation}/>)}
        </div>
    );
};

export default Animations;