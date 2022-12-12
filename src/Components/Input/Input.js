import React from 'react';
import styles from './Input.module.css';

export const Input = () => {
  return (
    <form className={styles.formulario}>
      <label htmlFor="titulo">Nome</label>
      <input type="text" name="titulo" id="" />
    </form>
  );
};
