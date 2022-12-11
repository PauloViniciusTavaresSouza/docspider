import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './Home.module.css';
import { Header } from '../Components/Header/Header';
import { Sidebar } from '../Components/Sidebar/Sidebar';
import { Inicio } from './Inicio';
import Documents from './Documents';
import { Sobre } from './Sobre';

export const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(true);

  return (
    <BrowserRouter>
      <div className={styles.homepage}>
        <Header open={open} setOpen={setOpen} />
        <div className={styles.containerInfo}>
          <Sidebar
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            open={open}
            setOpen={setOpen}
          />
          <div
            className={`${
              open ? styles.containerConteudo : styles.containerConteudoAberto
            }`}
          >
            <Routes>
              <Route path="/inicio" element={<Inicio open={open} />} />
              <Route path="/document" element={<Documents />} />
              <Route
                path="/sobre"
                element={
                  <Sobre
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
