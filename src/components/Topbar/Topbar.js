import React from "react";
import classNames from "classnames";
import { NamedLink, Image, LanguageDropdown } from "../../components";
import { FormattedMessage } from "react-intl";
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
        <div className={css.navigationAndLanguage}>
          <ul className={css.navigation}>
            <li className={css.navigationItem}>
              <a href="/#home">
                <FormattedMessage id="Topbar.home" />
              </a>
            </li>
            <li className={css.navigationItem}>
              <a href="/#cards">
                <FormattedMessage id="Topbar.apartments" />
              </a>
            </li>
            <li className={css.navigationItem}>
              <a href="/#amenities">
                <FormattedMessage id="Topbar.amenities" />
              </a>
            </li>
            <li className={css.navigationItem}>
              <a href="/#contact">
                <FormattedMessage id="Topbar.contact" />
              </a>
            </li>
          </ul>
          <LanguageDropdown />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
