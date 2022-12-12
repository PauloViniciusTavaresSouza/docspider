import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderDoc.module.css';

export const HeaderDoc = ({ open }) => {
  return (
    <div>
      <nav
        className={`${
          open === true ? styles.navegacaoFechado : styles.navegacaoAberto
        }`}
      >
        <ul>
          <li>
            <Link to="signup">Cadastro</Link>
          </li>
          <li>
            <Link to="signup2">Meus documentos</Link>
          </li>
          <li>
            <Link to="signup3">Editar Docs</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
