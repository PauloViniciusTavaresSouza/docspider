import React, { useEffect } from 'react';
import { fakeData } from '../Database/FakeDatabase';
import Doc from '../img/doc.png';

import styles from './Documents.module.css';
import { Sobre } from './Sobre';

export const Documents = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    setData(fakeData);
  });

  return (
    <section className={styles.containerPrincipal}>
      <h1 className={styles.TitleDoc}>Meus Documentos</h1>
      <div className={styles.pageDoc}>
        {data &&
          data.map((item) => {
            return (
              <div key={item} className={styles.cardDoc}>
                <img src={Doc} alt="icon documento" />
                <p>{item.uploadFile[0].name}</p>
                <h2>{item.title}</h2>
                <p>
                  {' '}
                  <b>Descrição:</b> <br /> {item.description}
                </p>
                <p>
                  <b>Tipo: </b>
                  {item.uploadFile[0].type}
                </p>
                <div>
                  {' '}
                  <b>Data: </b>
                  {item.uploadFile[0].dateTime.constructor()}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};
