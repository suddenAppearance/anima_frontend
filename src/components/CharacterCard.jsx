import React, {Suspense} from 'react';
import {Environment, Html, PerspectiveCamera, Stage} from "@react-three/drei";
import CharacterFBXModel from "./CharacterFBXModel";
import {Canvas} from "@react-three/fiber";

import classes from "./styles/CharacterCard.module.css"
import CharacterGLTFModel from "./CharacterGLTFModel";


const CharacterCard = ({character, setCharacter, animation, title, setAnimation}) => {
    return (
        <div className={classes.Card}
             onClick={() =>
                 setCharacter ?
                     setCharacter(character) :
                     setAnimation ?
                         setAnimation(animation) :
                         null
        }>
            <Canvas>
                <Suspense fallback={null}>
                    <PerspectiveCamera>
                        <mesh>
                            <Stage>
                                {character.file.initial_filename.endsWith(".fbx") ?
                                    <CharacterFBXModel URL={character.file.download_url}
                                                       animation={animation?.file.download_url}/> :
                                    <CharacterGLTFModel URL={character.file.download_url}/>}
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
            <div className={classes.Title}>{title}</div>
        </div>
    );
};

export default CharacterCard;