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

  const pairs = store.contacts.reduce((result, item, index) => {
    if (index % 2 === 0) result.push([]);
    result[result.length - 1].push(item);
    return result;
  }, []);

  return (
    <div className="container">
      {pairs.map((pair, index) => (
        <div key={index} className="row">
          {pair.map((contact, contactIndex) => (
            <div key={contactIndex} className="col">
              <div className="contactContainer">
                <div className="infoContainer">
                  <div className="imgContainer">
                    <img src={contact.address} alt={contact.full_name} />
                  </div>
                  <div className="nameContainer">{contact.full_name}</div>
                  <div className="buttonsContainer">
                    <button
                      onClick={() => callPhoneNumber(contact.phone)}
                      className="icon"
                    >
                      <i className="fa-solid fa-phone"></i>
                    </button>
                    <button
                      onClick={() => sendEmail(contact.email)}
                      className="icon"
                    >
                      <i className="fa-solid fa-envelope-open-text"></i>
                    </button>
                    <button className="icon">
                      <Link to={`/single/${contact.id}`}>
                        <i className="fa-regular fa-address-card"></i>
                      </Link>
                    </button>
                    <button
                      onClick={() => actions.deleteContact(contact.id)}
                      className="icon"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
