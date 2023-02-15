import React, {Suspense} from 'react';
import {Environment} from "@react-three/drei";
import CharacterModel from "./CharacterModel";
import {Canvas} from "@react-three/fiber";
import classes from "./styles/CharacterCard.module.css"


const CharacterCard = ({character}) => {
    return (
        <div className={classes.Card}>
            <Canvas>
                <Suspense fallback={null}>
                    <CharacterModel URL={character.file.download_url}/>
                    <Environment
                        files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr"
                        background
                        blur={0.5}
                    />
                    <directionalLight position={[3.3, 1.0, 4.4]}/>
                    {/*<OrbitControls target={[0, 0, 0]}/>*/}
                    {/*<primitive object={new AxesHelper(10)}/>*/}
                </Suspense>
            </Canvas>
            <div className={classes.Footer}>
                <div className={classes.Filename}>{character.title}</div>
            </div>
        </div>
    );
};

export default CharacterCard;