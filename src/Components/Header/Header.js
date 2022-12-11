import React from 'react';
import styles from './Header.module.css';
import Logo from '../../img/logo.png';

export const Header = ({ open, setOpen }) => {
  function activeMenu() {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <header className={styles.header}>
      <div
        onClick={activeMenu}
        id="menuHamburguer"
        className={styles.menuHamburguerDiv}
      >
        <div
          className={`${
            open ? styles.menuHamburguer : styles.menuHamburguerAtivo
          }`}
        ></div>
      </div>
      <div className={styles.menuLogo}>
        <img src={Logo} alt="Logo" />
      </div>
    </header>
  );
};
