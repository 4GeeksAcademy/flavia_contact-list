import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
  const { actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [urlphoto, setUrlphoto] = useState("");

  return (
    <div className="theContainer">
      <div className="titleAdd">
        <h4>Add a new contact</h4>
      </div>
      <div className="formContainer">
        <form>
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Phone</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <label>URL Photo</label>
          <input
            type="text"
            value={urlphoto}
            onChange={(e) => setUrlphoto(e.target.value)}
          ></input>
          <br />
          <button
            type="submit"
            className="submitButton"
            onClick={() => actions.addContact(name, email, urlphoto, phone)}
          >
            Save
          </button>
          <Link to="/" className="backContacts">
            {" "}
            <i class="fa-solid fa-circle-chevron-left"></i> Back to Contacts
          </Link>
        </form>
      </div>
    </div>
  );
};
