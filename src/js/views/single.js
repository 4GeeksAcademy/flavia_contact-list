import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

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
        <>
          <h1>Editar información</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            value={urlphoto}
            onChange={(e) => setUrlphoto(e.target.value)}
          ></input>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <Link to="/" onClick={()=> actions.updateContact(myContact.id, name, email, urlphoto, phone)}>
          Guardar
          </Link>
        </>
      ) : (
        <>
          <h1>{myContact.full_name}</h1>
          <img src={myContact.address} />
          <p>Email: {myContact.email}</p>
          <p>Phone: {myContact.phone}</p>
          <button onClick={() => setEditButton(!editButton)}>Editar</button>
        </>
      )}
      <Link to="/">Back home</Link>
    </>
  );
};
