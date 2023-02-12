import React from 'react';
import {useLoader, useThree} from "@react-three/fiber";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";
import {Box3, Vector3} from "three";

const CharacterModel = ({URL}) => {
    const gltf = useLoader(GLTFLoader, URL)
    const box = new Box3().setFromObject(gltf.scene);
    const center = box.getCenter(new Vector3());

    gltf.scene.position.x += (gltf.scene.position.x - center.x);
    gltf.scene.position.y += (gltf.scene.position.y - center.y);
    gltf.scene.position.z += (gltf.scene.position.z - center.z);
    useThree(({camera}) => {
        camera.position.z += Math.max(center.x, center.y) * 1.5
    })
    return <primitive object={gltf.scene}/>
};

export default CharacterModel;