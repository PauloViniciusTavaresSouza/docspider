import React, { useEffect } from 'react';
import { fakeData } from '../Database/FakeDatabase';
import Doc from '../img/doc.png';

import styles from './Documents.module.css';

export const Documents = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    setData(fakeData);
  });

  return (
    <section className={styles.containerPrincipal}>
      <div className={styles.pageDoc}>
        <h1 className={styles.TitleDoc}>Meus Documentos</h1>
        {data &&
          data.map((item) => {
            return (
              <div key={item} className={styles.cardDoc}>
                <img src={Doc} alt="icon documento" />
                <h2>{item.title}</h2>
                <p>Descrição: {item.description}</p>
                <p>{item.uploadFile[0].name}</p>
                <p>{item.uploadFile[0].type}</p>
                <div>{item.uploadFile[0].dateTime.constructor()}</div>
              </div>
            );
          })}
      </div>
    </section>
  );
};
