import React from 'react';
import {Html, useProgress} from "@react-three/drei";

const Loader = () => {
    const progress = useProgress()
    return <Html center>
        <div>{JSON.stringify(progress)}</div>
    </Html>
};

export default Loader;