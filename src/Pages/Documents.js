import React, { useState } from 'react';
import { FileList } from '../Components/FilesUpload/FileList';
import { FileUpload } from '../Components/FilesUpload/FileUpload';
import styles from './Documents.module.css';

const Documents = () => {
  const [files, setFiles] = useState([
    {
      name: 'myFile.pdf',
    },
  ]);

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };

  console.log(files);

  return (
    <section className={styles.containerPrincipal}>
      <div className={styles.containerDoc}>
        <p className={styles.title}>Upload file</p>
        <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} />
        <FileList files={files} removeFile={removeFile} />
      </div>
    </section>
  );
};

export default Documents;
