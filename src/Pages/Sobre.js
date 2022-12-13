import React from 'react';
import styles from './Sobre.module.css';
import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';

export const Sobre = ({ modalVisible, setModalVisible }) => {
  function onClick(event) {
    if (event.target === event.currentTarget) setModalVisible(false);
  }

  function toggleModal() {
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
            <div className={styles.logo}>
              <img src={Logo} alt="logo empresa" />
            </div>
            <div className={styles.logoInfo}>
              <h1>DOCSPIDER</h1>
              <p>Versão: "version": "0.1.0",</p>
            </div>
          </div>
        ) : (
          ''
        )}
        {modalVisible ? (
          <Link to="/inicio">
            <button className={styles.buttonFechar} onClick={toggleModal}>
              x
            </button>
          </Link>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};
