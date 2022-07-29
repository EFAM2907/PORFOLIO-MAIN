import React from "react";
import s from "./css/Proyecto.module.css";

const Proyecto = () => {
  return (
    <div className={s.container}>

      {/* PATITAS */}
      <div className={s.Proyecto}>
        <div className={s.Proye}>
          <img className={s.img} src='https://www.weare-family.com/petfanmx/wp-content/uploads/sites/10/2021/03/adopcion-mascotas.jpg'alt="imf" />
           <h4 className={s.h4}>patitas🐾</h4>
          <p className={s.parra}>
          este Proyecto Surgio  con la idea de hacer un beneficio social,
          concientizar a las personas a optar por animales y no venderlos. 
          Sobre todo buscar ayudar a los animales que se encuentran en malas condiciones de vida,
          sin comer y sin salud.
          se Proporciona una conexión entre la persona que quiere ayudar a un animal a que lo adopten y darle un buen hospedaje y vida
          </p>
          <div className={s.botones}>
            <a
              className={s.demo}
              href="https://github.com/FrancoG21/PF-Henry-Front"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.icon}
                src="https://img.icons8.com/fluency/344/github.png"
                alt="proyecto"
              />
            </a>
            <a
              className={s.demo}
              href="https://pf-henry-front-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.icon}
                src="https://img.icons8.com/emoji/344/link-emoji.png"
                alt="proyecto"
              />
            </a>
           
          </div>
        </div>

        {/* Countries */}

        <div className={s.Proye}>
          <img className={s.img} src="https://thumbs.dreamstime.com/b/siluetas-de-la-gente-que-sostiene-banderas-de-diversos-pa%C3%ADses-41520437.jpg" alt="imf" />
          <h4 className={s.h4}>COUNTRIES ✈</h4>
          <p className={s.parra}>
          Una App Diseñada para El que viaja,
          el que estudia,Al que le interesa Saber un poco de la inmensidad de lugares que podemos recorrer en este mundo!
         Countries es tu mejor opción
          </p>
          <div className={s.botones}>
            <a
              className={s.demo}
              href="https://github.com/EFAM2907/PI-Countries-main"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.icon}
                src="https://img.icons8.com/fluency/344/github.png"
                alt="proyecto"
              />
            </a>
            {/* <a className={s.demo} target="_blank" rel="noopener noreferrer">
              <img
                className={s.icon}
                src="https://img.icons8.com/emoji/344/link-emoji.png"
                alt="proyecto"
              />
            </a> */}
          </div>
        </div>


         {/* APP-DOGS */}
        <div className={s.Proye}>
          <img className={s.img} src="https://gestion.portalbiesa.com/redaccio/arxius/imatges/201902/770_1550480986blog_post_consejo_perro_adoptado_1.jpg" alt="imf" />
          <h4 className={s.h4}>Dogs🐶</h4>
          <p className={s.parra}>
            Se trata de una SPA, utilizando React y Redux para el Front End.
            La SPA consume datos de una API a través de un
            Back End desarrollado en Node.js utilizando Express, agregando
            nuevas funcionalidades a la API original. Algunos features del
            proyecto: Cache de búsquedas, ordenamiento y filtros, formularios
            controlados.
          </p>
          <div className={s.botones}>
            <a
              className={s.demo}
              href="https://github.com/EFAM2907/Proyecto-De-Perros"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.icon}
                src="https://img.icons8.com/fluency/344/github.png"
                alt="proyecto"
              />
            </a>
            {/* <a className={s.demo} target="_blank" rel="noopener noreferrer">
              <img
                className={s.icon}
                src="https://img.icons8.com/emoji/344/link-emoji.png"
                alt="proyecto"
              />
            </a> */}
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Proyecto;
