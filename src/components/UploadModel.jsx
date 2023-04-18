import React, {useState} from 'react';
import FileSelector from "./UI/input/FileSelector";
import {useGateway} from "../hooks/useGateway";
import {useFetching} from "../hooks/useFetching";
import classes from "./styles/UploadModel.module.css"

const UploadModel = ({setVisible}) => {
    const gateway = useGateway()
    const [file, setFile] = useState()
    const [fileInfo, setFileInfo] = useState({title: null, file_id: null, type: "CHARACTER"})
    const [uploadModel, isModelUploading, uploadModelError] = useFetching(async () => {
        const response = await gateway.uploadFile(file)
        await gateway.uploadMeta({...fileInfo, file_id: response.data.id})
        return response
    })
    const handleSubmitModel = async () => {
        await uploadModel()
        setFile(undefined)
        setFileInfo({title: null, file_id: null, type: "CHARACTER"})
        setVisible(false)
    }
    return (
        <div className={classes.uploadModelForm}>
            <div className={classes.formTitle}>Загрузить модель</div>
            <label className={classes.formInputLabel}>
                <input
                    className={classes.formInput} onChange={(e) => setFileInfo({...fileInfo, title: e.target.value})}
                       required
                       value={fileInfo.title}
                    placeholder="Имя персонажа"/>
            </label>
            <FileSelector file={file} setFile={setFile}/>
            <button className={classes.uploadButton} onClick={handleSubmitModel}>Загрузить персонажа</button>
        </div>
    );
};

export default UploadModel;