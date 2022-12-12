import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderDoc } from '../Components/HeaderDocumentos/HeaderDoc';
import styles from './Documents.module.css';
import FileDownload from 'js-file-download';
import { Axios } from 'axios';

export const Documents = ({ open }) => {
  const download = (e) => {
    e.preventDefault();
    Axios({
      ulr: 'http://localhost:8080/',
      method: 'GET',
      responseType: 'blob',
    }).then((res) => {
      FileDownload(res.data, 'Donwloaded.png');
    });
  };
  return (
    <section className={styles.containerPrincipal}>
      <button onClick={(e) => download(e)}>Download</button>
    </section>
  );
};
