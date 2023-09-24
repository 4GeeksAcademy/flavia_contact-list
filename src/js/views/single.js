import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";

export const Single = () => {
  const { actions } = useContext(Context);
  const params = useParams();
  const [myContact, setMyContact] = useState(null);
  const [editButton, setEditButton] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [urlphoto, setUrlphoto] = useState("");

  useEffect(() => {
    const contactId = params.theid;
    actions.particularContact(contactId).then((data) => {
      setMyContact(data);
      setName(data.full_name);
      setEmail(data.email);
      setPhone(data.phone);
      setUrlphoto(data.address);
    });
  }, [params.theid]);

  if (!myContact) return null;

  return (
    <>
      {editButton ? (
        <div className="singleContainer">
          <div className="cardContainer">
            <div className="row1">
              <div className="col1">
                <img src={myContact.address} className="imgProfile" />
              </div>
              <div className="col2">
                <h1>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="editInput"
                    style={{ width: "90%" }}
                  ></input>
                </h1>
                <p>
                  <i class="fa-solid fa-at"></i>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="editInput"
                  ></input>
                </p>
                <p>
                  <i class="fa-solid fa-mobile-screen-button"></i>
                  <input
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="editInput"
                  ></input>
                </p>
                <p>
                  <i class="fa-solid fa-image"></i>
                  <input
                    type="text"
                    value={urlphoto}
                    onChange={(e) => setUrlphoto(e.target.value)}
                    className="editInput"
                  ></input>
                </p>
              </div>
            </div>
            <div className="row2">
              <button
                onClick={() => {
                  actions.updateContact(
                    myContact.id,
                    name,
                    email,
                    urlphoto,
                    phone
                  );
                }}
                className="editButton"
              >
                Guardar
              </button>
              <Link
                onClick={() => window.location.reload()}
                className="backHome"
              >
                <i class="fa-solid fa-circle-chevron-left"></i> Back to Profile
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="singleContainer">
          <div className="cardContainer">
            <div className="row1">
              <div className="col1">
                <img src={myContact.address} className="imgProfile" />
              </div>
              <div className="col2">
                <h1>{myContact.full_name}</h1>
                <p>
                  <i class="fa-solid fa-at"></i> {myContact.email}
                </p>
                <p>
                  <i class="fa-solid fa-mobile-screen-button"></i>{" "}
                  {myContact.phone}
                </p>
              </div>
            </div>
            <div className="row2">
              <button
                onClick={() => setEditButton(!editButton)}
                className="editButton"
              >
                Editar
              </button>
              <Link to="/" className="backHome">
                <i class="fa-solid fa-circle-chevron-left"></i> Back to Contacts
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
