import React, {useState} from 'react';
import FileSelector from "./UI/input/FileSelector";
import {useGateway} from "../hooks/useGateway";
import {useFetching} from "../hooks/useFetching";

const UploadModel = () => {
    const gateway = useGateway()
    const [file, setFile] = useState()
    const [fileInfo, setFileInfo] = useState({title: null, file_id: null, type: "CHARACTER"})
    const [uploadModel, isModelUploading, uploadModelError] = useFetching(async () => {
        const response = await gateway.uploadFile(file)
        await gateway.uploadMeta({...fileInfo, file_id: response.data.id})
        return response
    })
    const handleSubmitModel = async () => {
        console.log(await uploadModel())
    }
    return (
        <div style={{margin: "10px 0px"}}>
            <div>Загрузить модель</div>
            <label>
                <input onChange={(e) => setFileInfo({...fileInfo, title: e.target.value})} required/>
            </label>
            <FileSelector file={file} setFile={setFile}/>
            <button onClick={handleSubmitModel}>Загрузить</button>
        </div>
    );
};

export default UploadModel;