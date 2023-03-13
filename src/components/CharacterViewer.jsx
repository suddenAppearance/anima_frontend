import React, {Suspense, useEffect, useState} from 'react';
import {Canvas} from "@react-three/fiber";
import {
    Grid,
    Environment,
    OrbitControls,
    PerspectiveCamera,
    GizmoHelper,
    GizmoViewport,
    Stage
} from "@react-three/drei";
import CharacterFBXModel from "./CharacterFBXModel";
import classes from "./styles/CharacterViewer.module.css"
import {useGateway} from "../hooks/useGateway";
import Loader from "./Loader";
import {useFetching} from "../hooks/useFetching";

const CharacterViewer = ({character, animation}) => {
    const gateway = useGateway()
    const [URL, setURL] = useState()

    const [getAnimationURL, isAnimationURLLoading, getAnimationURLError] = useFetching(async (modelId, animationId) => {
        let response = await gateway.animate(modelId, animationId)
        console.log(response.data.file.download_url)
        setURL(response.data.file.download_url)
    })

    useEffect(() => {
        animation ? getAnimationURL(character.file_id, animation.file_id) : setURL(character.file.download_url)
    }, [animation, character])

    return (<div className={classes.characterViewCard}>
        <div>
            {character.title}
        </div>
        <Canvas>
            <Suspense fallback={<Loader/>}>
                <PerspectiveCamera>
                    <group>
                        <Stage>
                            {URL &&
                                <CharacterFBXModel URL={URL}/>
                            }
                        </Stage>
                        <Environment
                            files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr"
                            background
                            blur={0.5}
                        />
                        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
                            <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white"/>
                        </GizmoHelper>
                        <OrbitControls/>
                    </group>
                </PerspectiveCamera>
            </Suspense>
        </Canvas>
    </div>);
};

export default CharacterViewer;