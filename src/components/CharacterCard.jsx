import React, {Suspense} from 'react';
import {Environment, Html, PerspectiveCamera, Stage} from "@react-three/drei";
import CharacterModel from "./CharacterModel";
import {Canvas} from "@react-three/fiber";

import classes from "./styles/CharacterCard.module.css"


const CharacterCard = ({character, setCharacter}) => {
    return (
        <div className={classes.Card} onClick={() => setCharacter(character)}>
            <Canvas>
                <Suspense fallback={null}>
                    <PerspectiveCamera>
                        <mesh>
                            <Stage>
                                <CharacterModel URL={character.file.download_url}/>
                            </Stage>
                            <Environment
                                files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr"
                                background
                                blur={0.5}
                            />
                            <directionalLight position={[3.3, 1.0, 4.4]}/>
                        </mesh>
                    </PerspectiveCamera>
                </Suspense>
            </Canvas>
            <div className={classes.Title}>{character.title}</div>
        </div>
    );
};

export default CharacterCard;