import React from 'react';
import styles from './FileUpload.module.css';
import axios from 'axios';
import { fakeData } from '../../Database/FakeDatabase';
import { Link } from 'react-router-dom';

export const FileUpload = ({ files, setFiles, removeFile }) => {
  const uploadHandle = (event) => {
    const file = event.target.files[0];
    file.isUploading = true;
    setFiles([...files, file]);

    // upload file

    console.log(files);
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

  function handleSubmit() {
    fakeData.push({
      title,
      description,
      uploadFile: [
        {
          name: files[0].name,
          type: files[0].type,
          dateTime: files[0].lastModifiedDate,
        },
      ],
    });
    return fakeData;
  }
  console.log(fakeData);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  return (
    <section>
      <form className={styles.formulario}>
        <label htmlFor="titulo">Título</label>
        <input
          className={styles.inputText}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="descricao">Descrição</label>
        <input
          className={styles.inputText}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <p className={styles.title}>Upload file</p>

        <div className={styles.fileCard}>
          <div className={styles.fileInputs}>
            <input
              required
              className={styles.inputfile}
              onChange={uploadHandle}
              type="file"
              name="file"
            />
            <button>+ Upload</button>
          </div>

          <p className={styles.main}>Suport files</p>
          <p className={styles.info}>PDF, JPG, PNG</p>
        </div>
        <span>
          Obs: todos os campos devem ser preenchidos, ou o formulário não
          encaminhará os dados
        </span>
        <button
          className={styles.buttonSubmit}
          type="button"
          onClick={handleSubmit}
        >
          <Link to="/document">Enviar</Link>
        </button>
      </form>
    </section>
  );
};
