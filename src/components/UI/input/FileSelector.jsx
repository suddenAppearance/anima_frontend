import React from 'react';
import classes from "./FileSelector.module.css";

const FileSelector = ({file, setFile}) => {
    const handleChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }
    return (
        <div>
            <label className={classes.uploadFile}>
                <input type="file" onChange={handleChange} required/>
                <span className={classes.uploadFileButton}>Выберите файл</span>
                <span className={classes.uploadFileText}>{file ? file.name : "Файл не выбран..."}</span>
            </label>
        </div>
    );
};

export default FileSelector;