import React from 'react';
import styles from './FileItem.module.css';

export const FileItem = ({ file, deleteFile }) => {
  return (
    <li className={styles.listItem} key={File.name}>
      <p className={styles.namearq}>{file.name}</p>
      <div className={styles.actions}>
        {file.isUploading && <div className={styles.animationLoading}> </div>}
        {!file.isUploading && (
          <div
            className={styles.removeItem}
            onClick={() => deleteFile(file.name)}
          >
            <p> Remove</p>
          </div>
        )}
      </div>
    </li>
  );
};
