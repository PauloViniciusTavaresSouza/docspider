import React from 'react';
import styles from './FileItem.module.css';

export const FileItem = ({ file, deleteFile }) => {
  return (
    <li className={styles.listItem} key={File.name}>
      <p>{file.name}</p>
      <div className={styles.actions}>
        {file.isUploading && (
          <div onClick={() => deleteFile(file.name)}> imgArq </div>
        )}
        {!file.isUploading && (
          <div onClick={() => deleteFile(file.name)}> - </div>
        )}
      </div>
    </li>
  );
};
