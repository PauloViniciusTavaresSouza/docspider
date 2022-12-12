import React from 'react';
import styles from './FileUpload.module.css';
import axios from 'axios';

export const FileUpload = ({ files, setFiles, removeFile }) => {
  const uploadHandle = (event) => {
    const file = event.target.files[0];
    file.isUploading = true;
    setFiles([...files, file]);

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

  const [valueInput, SetValueInput] = React.useState('');
  const [name, SetName] = React.useState('');

  // console.log(valueInput);

  function onChange(ev) {
    const { name, value } = ev.target;
    SetValueInput(value);
    SetName(name);
  }
  // console.log(name);
  // console.log(valueInput);

  return (
    <section>
      <form className={styles.formulario}>
        <label htmlFor="titulo">Título</label>
        <input
          className={styles.inputText}
          type="text"
          name={name}
          value={valueInput}
          onChange={onChange}
        />

        <label htmlFor="descricao">Descrição</label>
        <input
          onChange={onChange}
          className={styles.inputText}
          type="text"
          name="descricao"
        />
      </form>
      <p className={styles.title}>Upload file</p>

      <div className={styles.fileCard}>
        <div className={styles.fileInputs}>
          <input
            className={styles.inputfile}
            onChange={uploadHandle}
            type="file"
            name="file"
          />
          <button>+ Uploade</button>
        </div>

        <p className={styles.main}>Suport files</p>
        <p className={styles.info}>PDF, JPG, PNG</p>
      </div>
    </section>
  );
};
