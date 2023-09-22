import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

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
                <br />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
