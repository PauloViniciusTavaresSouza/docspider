import React from 'react';
import styles from './Inicio.module.css';
import Banner from '../img/banner.png';
import BannerInfo from '../img/bannerInfo.jpg';
import { Link } from 'react-router-dom';
import reactImg from '../img/react.svg';
import cssicon from '../img/css-3.svg';
import htmlicon from '../img/html-5.svg';
import javascripticon from '../img/javascript-js.svg';

export const Inicio = ({ open }) => {
  const [isReact, setIsReact] = React.useState(false);
  const [isCss, setIsCss] = React.useState(false);
  const [isHtml, setIsHtml] = React.useState(false);
  const [isJs, setIsJs] = React.useState(false);

  return (
    <section className={styles.containerPrincipal}>
      <div className={`${open ? styles.containerFechado : styles.container}`}>
        <div className={styles.bannerPrincipal}>
          <img src={Banner} alt="Banner Principal" />
        </div>

        <div className={styles.containerSobre}>
          <div className={styles.containerInfo}>
            <h2>O que fazemos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              soluta, nisi amet corporis qui velit? Provident maiores quia ex
              ea. Debitis, modi necessitatibus distinctio minima eaque
              repellendus aut quod magnam?
            </p>
          </div>
          <div className={styles.containerImgInfo}>
            <img src={BannerInfo} alt="empresa" />
          </div>
        </div>

        <div className={styles.containerCta}>
          <div className={styles.cta}>
            <div className={styles.infoCta}>
              <h1>Venha fazer um orçamento</h1>
              <div className={styles.buttoncta}>
                <button>
                  <Link to="/signup">Fazer Orçamento</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.containerTecnologias}>
          <h1>Tecnologias que utilizamos</h1>
          <div className={styles.tecnologias}>
            <div className={styles.tecnologiasUtilizadas}>
              <div
                onMouseEnter={() => setIsReact(true)}
                onMouseLeave={() => setIsReact(false)}
                className={styles.imgTec}
              >
                <img src={reactImg} alt="img react" />
              </div>

              <div
                onMouseEnter={() => setIsCss(true)}
                onMouseLeave={() => setIsCss(false)}
                className={styles.imgTec}
              >
                <img src={cssicon} alt="img css" />
              </div>
              <div
                onMouseEnter={() => setIsHtml(true)}
                onMouseLeave={() => setIsHtml(false)}
                className={styles.imgTec}
              >
                <img src={htmlicon} alt="img html" />
              </div>
              <div
                onMouseEnter={() => setIsJs(true)}
                onMouseLeave={() => setIsJs(false)}
                className={styles.imgTec}
              >
                <img src={javascripticon} alt="img js" />
              </div>
            </div>
            <div className={styles.modalAberto}>
              {isReact ? (
                <div id="modalInfo" className={styles.modalInfo}>
                  <h1>
                    O React é a biblioteca mais popular do JavaScript e é usada
                    para construir uma interface de usuário (IU). Ela oferece
                    uma resposta excelente para o usuário adicionar comandos
                    usando um novo método de renderizar sites. Os componentes
                    dessa ferramenta foram desenvolvidos pelo Facebook.
                  </h1>
                </div>
              ) : isCss ? (
                <div className={styles.modalInfo}>
                  <h1>
                    CSS é uma linguagem baseada em regras. — Você define regras
                    especificando grupos de estilo que devem ser aplicados para
                    elementos particulares ou grupos de elementos na sua página
                    web. Por exemplo, "Quero que o título principal, na minha
                    página, seja mostrado como um texto grande e de cor
                    vermelha."
                  </h1>
                </div>
              ) : isHtml ? (
                <div id="modalInfo" className={styles.modalInfo}>
                  <h1>
                    Html serve para dar significado e organizar as informações
                    de uma página na web. Sem isso, o navegador não saberia
                    exibir textos como elementos ou carregar imagens e outros
                    conteúdos.
                  </h1>
                </div>
              ) : isJs ? (
                <div id="modalInfo" className={styles.modalInfo}>
                  <h1>
                    JavaScript é uma linguagem de programação que permite a você
                    implementar itens complexos em páginas web — toda vez que
                    uma página da web faz mais do que simplesmente mostrar a
                    você informação estática — mostrando conteúdo que se
                    atualiza em um intervalo de tempo, mapas interativos ou
                    gráficos 2D/3D animados, etc.
                  </h1>
                </div>
              ) : (
                <h1>*Passe o mouse para saber sobre a tercnologia*</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
