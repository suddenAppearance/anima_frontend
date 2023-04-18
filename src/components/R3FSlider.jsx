import React, {useEffect, useRef, useState} from 'react';
import {Html} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import classes from "./styles/R3FSlider.module.css"

const R3FSlider = ({pause, duration, mixerRef}) => {
    const [timeline, setTimeline] = useState(0)
    const [frame, setFrame] = useState(0)
    const [totalFrames, setTotalFrames] = useState(1)

    const sliderRef = useRef()

    useFrame((state, delta) => {
        if (!pause?.current) {
            const frame = Math.floor(timeline * 30) % (duration.current * 30)
            setTimeline(timeline + delta)
            setFrame(frame)
        }
    })

    useEffect(() => {
        setTotalFrames(duration.current * 30)
    }, [duration.current])

    const setTime = (e) => {
        const frame = e.target.value
        const newTimeline = frame / 30
        setTimeline(newTimeline)
        setFrame(frame)

        let delta = duration.current - timeline % duration.current
        delta += newTimeline
        mixerRef.current.update(delta)
    }

    return (<Html fullscreen className={classes.timelineBlock}>
        <div className={classes.pause} onClick={() => {
            pause.current = !pause.current && totalFrames !== 1
        }}><i className="fa fa-play"></i></div>
        <div className={classes.timeline}><
            input style={{width: '100%'}}
                  ref={sliderRef}
                  type="range"
                  min="0"
                  max={totalFrames}
                  onChange={(e) => setTime(e)}
                  value={frame}/>
        </div>
        <div className={classes.framesInfo}>{Math.round(frame) + "/" + Math.ceil(totalFrames)}</div>
    </Html>);
};

export default R3FSlider;