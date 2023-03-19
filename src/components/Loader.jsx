import React from 'react';
import {Html, useProgress} from "@react-three/drei";

const Loader = () => {
    const {progress} = useProgress()
    return <Html center>
        <div>{Math.round(progress)}</div>
    </Html>
};

export default Loader;