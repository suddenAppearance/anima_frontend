import React, {Suspense} from 'react';
import {Environment, PerspectiveCamera, Stage} from "@react-three/drei";
import CharacterFBXModel from "./CharacterFBXModel";
import {Canvas} from "@react-three/fiber";

import classes from "./styles/CharacterCard.module.css"
import Loader from "./Loader";


const CharacterCard = ({character, setCharacter}) => {
    return (
        <div className={classes.card}
             onClick={() => setCharacter(character)}
        >
            <div className={classes.cardPreview}>
                <Canvas>
                    <Suspense fallback={<Loader/>}>
                        <PerspectiveCamera>
                            <mesh>
                                <Stage>
                                    <CharacterFBXModel
                                        URL={character.file.download_url}
                                    />
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
            </div>
            <div className={classes.title}>{character.title}</div>
        </div>
    );
};

export default CharacterCard;