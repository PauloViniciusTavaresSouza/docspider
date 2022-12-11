import axios from 'axios';
import React from 'react';
import { FileItem } from './FileItem';
import styles from './FileList.module.css';

export const FileList = ({ files, removeFile }) => {
  const deleteFileHandler = (_name) => {
    axios
      .delete(`http://localhost:8080/upload?name=${_name}`)
      .then((res) => removeFile(_name))
      .catch((err) => console.error(err));
  };

  return (
    <ul className={styles.fileList}>
      {files &&
        files.map((file) => (
          <FileItem
            key={file.name}
            file={file}
            deleteFile={deleteFileHandler}
          />
        ))}
    </ul>
  );
};
