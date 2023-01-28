import React from 'react';
import cs from "./FileInput.module.css"
import FileCard from "./FileCard";

const FileInput = ({file, selectFile, setFile}) => {
    if (file) {
        return (
            <div className={cs.fileInput}>
                <div
                    className={cs.fileInputSelected}
                >
                    <FileCard
                        file={file}
                        actions={
                            <div className={cs.fileInputAction}>
                                <div className={cs.fileInputDelete} onClick={() => setFile(null)}>Очистить</div>
                                <div className={cs.fileInputEdit} onClick={selectFile}>Изменить файл</div>
                            </div>
                        }
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div className={cs.fileInput}>
                <div className={cs.fileInputSelected}>
                    Файл не выбран...
                </div>
                <div className={cs.fileInputAction} onClick={selectFile}>
                    <div className={cs.fileInputEdit}>Выбрать файл</div>
                </div>
            </div>
        );
    }
};

export default FileInput;