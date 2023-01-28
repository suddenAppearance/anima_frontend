import React from 'react';
import cs from "./FileCard.module.css"

const FileCard = ({file, actions}) => {
    const ext = "." + file.initial_filename.split(".").pop()
    const createdAt = new Date(file.created_at)
    const getColor = (color) => {
        switch (color) {
            case ".pdf":
                return {background: "#DC3023", color: "white"}
            case ".docx":
                return {background: "#59ABE3", color: "white"}
            case ".txt":
                return {background: "#ECF0F1", color: "black"}
            case ".pptx":
                return {background: "#E68364", color: "white"}
            default:
                return {background: "gray", color: "white"}
        }
    }
    return (
        <div>
            <div className={cs.fileCard}>
                <div className={cs.animationCardPreview} style={getColor(ext)}>
                    <div>{ext}</div>
                </div>
                <div className={cs.fileInfo}>
                    <div className={cs.fileName}>
                        {file.initial_filename}
                    </div>
                    <div className={cs.fileSecondaryInfo}>{file.pretty_size}</div>
                    <div className={cs.fileSecondaryInfo}>{createdAt.toLocaleString("ru-RU")}</div>
                </div>
                {actions &&
                    <div className={cs.fileInfo}>{actions}</div>
                }
            </div>
        </div>
    );
};

export default FileCard;