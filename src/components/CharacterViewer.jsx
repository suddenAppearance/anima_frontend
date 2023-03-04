import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls, PerspectiveCamera, Stage} from "@react-three/drei";
import CharacterFBXModel from "./CharacterFBXModel";
import classes from "./styles/CharacterViewer.module.css"
import CharacterGLTFModel from "./CharacterGLTFModel";

const CharacterViewer = ({character, animation}) => {
    return (<div className={classes.characterViewCard}>
        <div>
            {character.title}
        </div>
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
                        <OrbitControls/>
                        <directionalLight position={[330, 10, 44]}/>
                    </mesh>
                </PerspectiveCamera>
            </Suspense>
        </Canvas>
    </div>);
};

export default CharacterViewer;