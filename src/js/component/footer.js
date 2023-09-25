import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center fixed-bottom">
    <p>
      Made with <i className="fa fa-heart text-danger" /> by{" "}
      <a
        href="https://www.linkedin.com/in/flavia-fernandezolivera/"
        className="linkedin"
      >
        Flavia Olivera
      </a>
    </p>
  </footer>
);
