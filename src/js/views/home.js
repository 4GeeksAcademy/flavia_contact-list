import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const sendEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const callPhoneNumber = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="container">
      <div className="contactContainer">
        <div className="data">
          {store.contacts.map((contact, index) => {
            return (
              <>
                <li key={index}>
                  <img src={contact.address} />
                  {contact.full_name}, {contact.email}, {contact.phone}
                </li>
                <button onClick={() => actions.deleteContact(contact.id)}>
                  Eliminar
                </button>
                <Link to={`/single/${contact.id}`}>Ir al perfil</Link>
                <button onClick={() => sendEmail(contact.email)}>
                  Enviar Correo
                </button>
                <button onClick={() => callPhoneNumber(contact.phone)}>
                  Llamar
                </button>
                <br />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
