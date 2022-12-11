import React from 'react';
import styles from './Sobre.module.css';

export const Sobre = ({ modalVisible, setModalVisible }) => {
  function onClick(event) {
    if (event.target === event.currentTarget) setModalVisible(false);
    console.log('isso é current', event.currentTarget);
    console.log('isso é Target', event.target);
  }
  function toggleModal(event) {
    if (modalVisible === false) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }
  return (
    <section className={styles.containerPrincipal}>
      <div onClick={onClick} className={styles.containerModal}>
        {modalVisible ? (
          <div className={styles.modal}>
            ModalSobre
            <button onClick={toggleModal}>Fechar</button>
          </div>
        ) : (
          <div>
            <h1>nossa empresa bla bla bla</h1>
            <button onClick={toggleModal}>Saber Versão</button>
          </div>
        )}
      </div>
    </section>
  );
};
