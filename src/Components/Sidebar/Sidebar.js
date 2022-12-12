import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import Home from '../../img/home.png';
import Doc from '../../img/doc.png';
import Sobre from '../../img/sobre.png';

export const Sidebar = ({ open, setOpen, modalVisible, setModalVisible }) => {
  const [submenu, setSubmenu] = React.useState(false);
  function activeModal() {
    setModalVisible(true);
  }

  function activeMenu() {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  function subMenu() {
    if (submenu === false) {
      setSubmenu(true);
    } else {
      setSubmenu(false);
    }
  }
  console.log('isso é o sub', submenu);
  return (
    <section
      id="sidebar"
      className={`${open === false ? styles.sidebar : styles.abrirSidebar}`}
    >
      <div id="inicio" className={`${styles.itemMenu} ${styles.inicio}`}>
        <div
          onClick={activeMenu}
          className={`${open ? styles.fecharSideBar : styles.infoMenu}`}
        >
          <Link to="inicio">Início</Link>
        </div>
        <div onClick={activeMenu} className={styles.icon}>
          <Link to="inicio">
            <img src={Home} alt="Home" />
          </Link>
        </div>
      </div>
      <div
        onClick={subMenu}
        id="documento"
        className={`${styles.itemMenu} ${styles.documento}`}
      >
        <div
          // onClick={activeMenu}
          className={`${open ? styles.fecharSideBar : styles.infoMenu}`}
        >
          <Link to="document">Meus Documentos</Link>
        </div>
        <div onClick={activeMenu} className={styles.icon}>
          <Link to="document">
            <img src={Doc} alt="Documento" />
          </Link>
        </div>
      </div>
      {/* //------------------------- */}
      {submenu && (
        <div
          id="documento"
          className={`${styles.itemMenu} ${styles.cadastrar}`}
        >
          <div
            onClick={activeMenu}
            className={`${open ? styles.fecharSideBar : styles.infoMenu}`}
          >
            <Link to="signup">Cadastrar</Link>
          </div>
          <div onClick={activeMenu} className={styles.icon}>
            <Link to="signup">
              <img src={Doc} alt="Documento" />
            </Link>
          </div>
        </div>
      )}
      {/* //------------------------- */}
      <div id="sobre" className={`${styles.itemMenu} ${styles.sobre}`}>
        <div
          onClick={activeMenu}
          className={`${open ? styles.fecharSideBar : styles.infoMenu}`}
        >
          <Link onClick={activeModal} to="sobre">
            Sobre
          </Link>
        </div>
        <div onClick={activeMenu} className={styles.icon}>
          <Link onClick={activeModal} to="sobre">
            <img src={Sobre} alt="Sobre" />
          </Link>
        </div>
      </div>
    </section>
  );
};
