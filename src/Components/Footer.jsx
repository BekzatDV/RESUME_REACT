import React from "react";
import "./Footer.css";
import img from "../Imgae/2023-03-16 13.54.50.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
        <img src={img} alt="Error" />
      </div>
      <div className="footer__reight-side">
        {" "}
        <div className="footer__links" id="footer-id">
          <h3 className="link_title">Друзья</h3>
          <a
            className="links"
            href="https://www.instagram.com/ejunushov/"
            target="_blank"
          >
            Эмир
          </a>
          <a className="links" href="">
            Аскат
          </a>
          <a className="links" href="">
            Максат
          </a>
        </div>
        <div className="footer__links">
          <h3 className="link_title">Контакты</h3>
          <a className="links" href="">
            +996 700 000 000
          </a>
          <a className="links" href="">
            beka@gamil.com
          </a>
          <a
            className="links"
            href="https://www.instagram.com/bekzat_os/"
            target="_blank"
          >
            @Bekzat_OS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
