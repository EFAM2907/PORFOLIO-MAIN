import React from "react";
import { useState } from "react";
import style from "./css/Animacion.module.css";
import Bounce from "react-reveal/Bounce";
import { Modal } from "@material-ui/core";
import Form  from './Form'


const Animacion = () => {
  const [modal, setModal] = useState(false);
  const abrirCerrarModal = () => {
    setModal(!modal);
  };
  const body = (
    <div >
      <Form abrirCerrarModal={abrirCerrarModal} />
    </div>
  );

  return (
    
       
         <div className="container">
      
      <Bounce right>
        <div className={style.section}>
          <img
            className={style.img}
            src="https://c.tenor.com/xMGn2xPAKvQAAAAC/approved.gif"
            alt="imagen"
          />
          <div className={style.cen}>
            <p className={style.p}>Hi, My Name is edwin arias</p>
            <p className={style.sub}>Full stack developer</p>
            
            

            <div className={style.centrar}>
            
              <a
                href="https://github.com/EFAM2907"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={style.iconos}
                  src="https://img.icons8.com/ios-glyphs/344/github.png"
                  alt='icono'
                />
              </a>
              <a
                href="https://www.linkedin.com/in/edwinfer2907/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={style.iconos}
                  src="https://img.icons8.com/ios-filled/344/linkedin.png"
                  alt='icono'
                />
              </a> 
              
            </div>
          

          </div>

 
          <Modal className={style.modal} open={modal} onClose={abrirCerrarModal}>
            {body}
          </Modal>
        </div>
        <div className={style.abrir}><h1 className={style.h1}>Feedback</h1> <a  onClick={abrirCerrarModal}><img className={style.cohete} src="https://img.icons8.com/color-glass/344/launched-rocket.png" alt='img'/></a> 
        <div className={style.desliza}>
        <a className={style.area}  onClick={abrirCerrarModal}>
           GO ⬇
           
        </a>
      </div>
        </div>
       
      </Bounce>

  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
      
     
    </div>
  );
};

export default Animacion;

{/*    <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="monitor">
            <div className="opening">
              <div className="camera o-x">
                <div className="camera o-y">
                  <div className="camera o-z">
                    <div className="awing">
                      <div className="stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                      </div>
                      <div className="fly o-x">
                        <div className="fly o-y">
                          <div className="fly o-z">
                            <div className="free_bounce">
                              <div className="free_rotate">
                                <div className="body">
                                  <div className="cockpit">
                                    <div className="under"></div>
                                    <div className="back"></div>
                                    <div className="left"></div>
                                    <div className="right"></div>
                                    <div className="edge_left"></div>
                                    <div className="edge_right"></div>
                                    <div className="boosts">
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                      <div className="boost"></div>
                                    </div>
                                  </div>
                                  <div className="wing_left">
                                    <div className="under"></div>
                                    <div className="back"></div>
                                    <div className="left"></div>
                                    <div className="right"></div>
                                  </div>
                                  <div className="wing_right">
                                    <div className="under"></div>
                                    <div className="back"></div>
                                    <div className="left"></div>
                                    <div className="right"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}