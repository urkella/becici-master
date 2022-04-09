import React from "react";
import classNames from "classnames";
import { NamedLink, Image } from "../../components";
import config from "../../config";

import logo from "./logo.png";
import css from "./Topbar.module.scss";

const Topbar = (props) => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.topbarWrapper}>
        <NamedLink className={css.logoContainer} name="LandingPage">
          <Image className={css.logo} src={logo} alt={config.siteTitle} />
        </NamedLink>
        <ul className={css.navigation}>
          <li className={css.navigationItem}>
            <a href="/#home">Home</a>
          </li>
          <li className={css.navigationItem}>
            <a href="/#cards">Apartaments</a>
          </li>
          <li className={css.navigationItem}>
            <a href="/#amenities">Amenities</a>
          </li>
          <li className={css.navigationItem}>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
