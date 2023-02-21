import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls, PerspectiveCamera, Stage} from "@react-three/drei";
import CharacterModel from "./CharacterModel";
import classes from "./styles/CharacterViewer.module.css"

const CharacterViewer = ({character}) => {
    return (
        <div className={classes.characterViewCard}>
            <div>
                {character.title}
            </div>
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
                            <OrbitControls/>
                            <directionalLight position={[3.3, 1.0, 4.4]}/>
                        </mesh>
                    </PerspectiveCamera>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default CharacterViewer;