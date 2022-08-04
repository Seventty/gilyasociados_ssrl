import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";

import {
  ServicesContainer,
  ServicesH1,
  ServicesSubtitle,
} from "./ServicesElements";

const Contact = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Contactate con nosotros</ServicesH1>
      <ServicesSubtitle>
        Contactate con nosotros por medio de los diferentes medios de nuestra
        plataforma.
      </ServicesSubtitle>
      <div className="contact__container">
        <article className="contact__option">
          <MdOutlineEmail />
          <h4>Email</h4>
          <h5>ejemplo@gmail.com</h5>
          <a href="mailto:ejemplo@gmail.com" target="_blank" rel="noreferrer">
            Enviar mensaje
          </a>
        </article>
        <article className="contact__option">
          <RiMessengerLine />
          <h4>Email</h4>
          <h5>ejemplo@gmail.com</h5>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            Enviar mensaje
          </a>
        </article>
        <article className="contact__option">
          <BsWhatsapp />
          <h4>Email</h4>
          <h5>ejemplo@gmail.com</h5>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            Enviar mensaje
          </a>
        </article>
      </div>
    </ServicesContainer>
  );
};

export default Contact;
