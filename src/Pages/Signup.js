import React, { useState } from 'react';
import { FileList } from '../Components/FilesUpload/FileList';
import { FileUpload } from '../Components/FilesUpload/FileUpload';
import { HeaderDoc } from '../Components/HeaderDocumentos/HeaderDoc';
import styles from './Signup.module.css';

const Signup = () => {
  const [files, setFiles] = useState([]);

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };

  console.log(files);

  return (
    <section className={styles.containerPrincipal}>
      <div className={styles.informacoesForm}>
        <h1>Faça um orçamento com a TecDeveloper</h1>
      </div>
      <div className={styles.containerDoc}>
        <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} />
        <FileList files={files} removeFile={removeFile} />
      </div>
    </section>
  );
};

export default Signup;
