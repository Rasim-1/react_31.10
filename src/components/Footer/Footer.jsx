import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="footer__info">
            <div className="footer__info-logo">
          
               
              <h5>© Oli Harris 2023</h5>
            </div>
            <div className="footer__info-call">
              <a href="#">Twitter</a>
              <a href="#">Linkedin</a>
              <a href="#">Mail</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
