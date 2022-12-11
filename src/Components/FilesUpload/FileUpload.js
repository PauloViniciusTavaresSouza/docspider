import React from 'react';
import styles from './FileUpload.module.css';
import axios from 'axios';

export const FileUpload = ({ files, setFiles, removeFile }) => {
  const uploadHandle = (event) => {
    const file = event.target.files[0];
    file.isUploading = true;
    setFiles([...files, file]);

    console.log('O que é files', files);

    // upload file

    const formData = new FormData();
    formData.append(file.name, file, file.name);

    axios
      .post('http://localhost:8080/upload', formData)
      .then((res) => {
        file.isUploading = false;
        setFiles([...files, file]);
      })
      .catch((err) => {
        // inform the user
        console.error(err);
        removeFile(file.name);
      });
  };

  return (
    <section>
      <div className={styles.fileCard}>
        <div className={styles.fileInputs}>
          <input onChange={uploadHandle} type="file" />
          <button>+ Uploade</button>
        </div>

        <p className={styles.main}>Suport files</p>
        <p className={styles.info}>PDF, JPG, PNG</p>
      </div>
    </section>
  );
};
