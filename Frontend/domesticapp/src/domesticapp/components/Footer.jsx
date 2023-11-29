import { FaGithub, FaLinkedin, FaLink } from "react-icons/fa";

import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="footer_container">
          <div className="footer_grid">
            <div className="footer_desc">
              <h3 className="heading_3_footer">DomesticApp Logo</h3>
            </div>
            <div className="footer_desc">
              <h3 className="heading_3_footer">Contacto</h3>
              <p className="footer_paragraph">
                <span>
                  <a href="">Email</a>
                </span>
                <span>
                  <a href="">Telefono</a>
                </span>
                <span>
                  <a href="">Precio</a>
                </span>
                <span>
                  <a href="">Ayuda</a>
                </span>
              </p>
            </div>
            <div className="footer_desc">
              <h3 className="heading_3_footer">Enlaces</h3>
              <p className="footer_paragraph">
                <span>
                  <a href="">
                    <FaGithub className="footer_icon" />
                  </a>
                </span>
                <span>
                  <a href="">
                    <FaLinkedin className="footer_icon" />
                  </a>
                </span>
                <span>
                  <a href="">
                    <FaLink className="footer_icon" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="footer_end">
            <p>
              © 2023 by DomesticApp. Proudly created with React. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
