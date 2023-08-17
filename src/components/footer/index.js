import React from "react";
import './index.css'

export const Footer = () => {
  return (
    <div className="container-fluid containFooter">
      <footer>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <p className=" px-2 text-muted">
            Una vida llena de estilo.
            </p>
          </li>
        </ul>
        <p className="text-center text-muted">&copy; 2023 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
