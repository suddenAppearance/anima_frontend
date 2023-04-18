import React, {useState} from 'react';
import FileSelector from "./UI/input/FileSelector";
import {useGateway} from "../hooks/useGateway";
import {useFetching} from "../hooks/useFetching";
import classes from "./styles/UploadAnimation.module.css"

const UploadAnimation = ({setVisible}) => {
    const gateway = useGateway()
    const [file, setFile] = useState()
    const [fileInfo, setFileInfo] = useState({title: null, file_id: null, type: "ANIMATION"})
    const [uploadAnimation, isAnimationUploading, uploadAnimationError] = useFetching(async () => {
        const response = await gateway.uploadFile(file)
        await gateway.uploadMeta({...fileInfo, file_id: response.data.id})
        return response
    })
    const handleSubmitModel = async () => {
        await uploadAnimation()
        setFile(undefined)
        setFileInfo({title: "", file_id: null, type: "ANIMATION"})
        setVisible(false)
    }
    return (
        <div className={classes.uploadAnimationForm}>
            <div className={classes.formTitle}>
                Загрузить анимацию
            </div>
            <label className={classes.formInputLabel}>
                <input
                    className={classes.formInput}
                    onChange={(e) => setFileInfo({...fileInfo, title: e.target.value})}
                    required
                    value={fileInfo.title}
                    placeholder="Название анимации"
                />
            </label>
            <FileSelector file={file} setFile={setFile}/>
            <button className={classes.uploadButton} onClick={handleSubmitModel}>Загрузить анимацию</button>
        </div>
    );
};

export default UploadAnimation;