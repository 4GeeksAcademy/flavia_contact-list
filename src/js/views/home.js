import React from "react";
import "../../styles/home.css";

export const Home = () => (
  <div className="container">
    <div className="buttonAddContainer">
      <button>Add new contact</button>
    </div>
    <div className="listContainer">
      <div className="contactContainer">
        <div className="photo">foto</div>
        <div className="data">datos</div>
        <div className="buttons">botones</div>
      </div>
    </div>
  </div>
);
