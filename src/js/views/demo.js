import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [urlphoto, setUrlphoto] = useState("");

  return (
    <div className="container">
      <div className="titleAdd">
        <h1>Add a new contact</h1>
      </div>
      <div>
        <form className="formContainer">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Phone</label>
          <input
            type="number"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <label>URL Photo</label>
          <input
            type="text"
            placeholder="URL Photo"
            value={urlphoto}
            onChange={(e) => setUrlphoto(e.target.value)}
          ></input>
          <br />
          <button
            type="submit"
            className="submitButton"
            onClick={() => actions.addContact(name, email, urlphoto, phone)}
          >
            save
          </button>
        </form>
      </div>
      <br />
      <Link to="/">or get back to contact list</Link>
    </div>
  );
};
