import React from "react";
import s from "./css/Form.module.css";
import { TextField } from "@material-ui/core";
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = ({ abrirCerrarModal }) => {
  


  const sendEmail = (e) => {
    e.preventDefault()
    .then(
    abrirCerrarModal() )
      .catch(error => (console.log(error)));
  };

  return (
    <div className={s.container}>
      <h1 className={s.titu}>deja tu Feedback aqui 👇</h1>
      <form className={s.Form} onsubmit={e => sendEmail(e)} action="https://formsubmit.co/efam2907@gmail.com" method="POST">
        <div>
          <TextField
            className={s.input}
            type="text"
            variant="filled"
            label="nombre"
            name="user_name"
          />
        </div>
        <div>
          <TextField
            className={s.input}
            type="email"
            variant="filled"
            label="correo"
            name="email"
          />
        </div>
        <div>
          <TextField
            className={s.input}
            variant="filled"
            label="Feedback"
            multiline
            minRows="3"
            name="user_message"
          />
        </div>

        <button className={s.botonForm}>Enviar</button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Form;
