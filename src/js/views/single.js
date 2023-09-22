import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [myContact, setMyContact] = useState(null);

  useEffect(() => {
    const contactId = params.theid;
    actions.particularContact(contactId).then((data) => {
      setMyContact(data);
    });
  }, [params.theid]);

  if (!myContact) return null;

  return (
    <div className="jumbotron">
      <h1>{myContact.full_name}</h1>
      <p>Email: {myContact.email}</p>
      <p>Phone: {myContact.phone}</p>
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
