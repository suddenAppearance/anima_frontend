import React, {Suspense, useEffect, useRef, useState} from 'react';
import {Canvas, useFrame} from "@react-three/fiber";
import {
    Environment,
    GizmoHelper,
    GizmoViewport,
    Html,
    OrbitControls,
    PerspectiveCamera,
    Stage
} from "@react-three/drei";
import CharacterFBXModel from "./CharacterFBXModel";
import classes from "./styles/CharacterViewer.module.css"
import {useGateway} from "../hooks/useGateway";
import Loader from "./Loader";
import {useFetching} from "../hooks/useFetching";
import R3FSlider from "./R3FSlider";

const CharacterViewer = ({character, animation}) => {
    const gateway = useGateway()
    const [URL, setURL] = useState()
    const mixerRef = useRef()
    const pause = useRef(true)
    const duration = useRef(0)

    const [getAnimationURL, isAnimationURLLoading, getAnimationURLError] = useFetching(async (modelId, animationId) => {
        let response = await gateway.animate(modelId, animationId)
        setURL(response.data.file.download_url)
    })

    useEffect(() => {
        animation ? getAnimationURL(character.file_id, animation.file_id) : setURL(character.file.download_url)
    }, [animation, character])

    return (<div className={classes.characterViewCard}>
        <div className={classes.viewInfo}>
            <div className={classes.viewInfoRow}>
                <div className={classes.viewInfoOption}>
                    Персонаж:
                </div>
                <div className={classes.viewInfoOptionValue}>
                    {character.title}
                </div>
            </div>
            {animation &&
                <div className={classes.viewInfoRow}>
                    <div className={classes.viewInfoOption}>
                        Эффект:
                    </div>
                    <div className={classes.viewInfoOptionValue}>
                        {animation.title}
                    </div>
                </div>
            }
        </div>
        <Canvas>
            <Suspense fallback={<Loader/>}>
                <PerspectiveCamera>
                    <group>
                        <Stage>
                            {URL &&
                                <CharacterFBXModel URL={URL} mixerRef={mixerRef} pause={pause} duration={duration}/>
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
        {animation &&
            <Canvas style={{height: '45px'}}>
                <R3FSlider pause={pause} duration={duration} mixerRef={mixerRef}/>
            </Canvas>
        }
        <div className={classes.downloadAnimatedCharacterButton} onClick={() => window.open(URL, "_blank")}>
            Скачать файл
        </div>
    </div>);
};

export default CharacterViewer;