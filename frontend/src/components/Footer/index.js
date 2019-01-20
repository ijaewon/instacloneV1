import React from "react";
import "./styles.scss";
import propTypes from 'prop-types';

const Footer = (props, context) => (
  <footer className="footer">
    <div className="column">
      <nav className="nav">
        <ul className="list">
          <li className="list-item">{context.t("About Us")}</li>
          <li className="list-item">{context.t("Support")}</li>
          <li className="list-item">{context.t("Blog")}</li>
          <li className="list-item">{context.t("Press")}</li>
          <li className="list-item">{context.t("API")}</li>
          <li className="list-item">{context.t("Jobs")}</li>
          <li className="list-item">{context.t("Privacy")}</li>
          <li className="list-item">{context.t("Terms")}</li>
          <li className="list-item">{context.t("Directory")}</li>
          <li className="list-item">{context.t("Language")}</li>
        </ul>
      </nav>
    </div>
    <div className="column">
      <span className="copyright">© 2017 Instagram</span>
    </div>
  </footer>
);

Footer.contextTypes = {
  t: propTypes.func.isRequired
};


export default Footer;

