import React from 'react';

const CharacterCard = ({character}) => {
    return (
        <div>
            {character.initial_filename}
        </div>
    );
};

export default CharacterCard;