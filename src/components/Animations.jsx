import React from 'react';
import CharacterCard from "./CharacterCard";

const Animations = ({animations, file, setAnimation}) => {
    return (<div className="characters-container">
        {animations.map((animation) => <CharacterCard
            setAnimation={setAnimation}
            key={animation.file_id}
            character={file}
            animation={animation}
            title={animation.title}/>)}
    </div>);
};

export default Animations;