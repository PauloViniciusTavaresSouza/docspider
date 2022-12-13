import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './Home.module.css';
import { Header } from '../Components/Header/Header';
import { Sidebar } from '../Components/Sidebar/Sidebar';
import { Inicio } from './Inicio';
import Signup from './Signup';
import { Sobre } from './Sobre';
import { Documents } from './Documents';

export const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(true);
  console.log(open);

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
              <Route
                path="/document"
                element={<Documents modalVisible={modalVisible} open={open} />}
              />
              <Route path="/signup" element={<Signup open={open} />} />
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
