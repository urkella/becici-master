import React from "react";
import classNames from "classnames";
import { NamedLink, Image } from "../../components";
import { FormattedMessage } from "react-intl";
import languages from "../../util/languages";
import config from "../../config";

import logo from "./logo.png";
import css from "./Topbar.module.scss";

const handleLanguageChange = (lang) => {
  if (lang) {
    localStorage.setItem("language", lang);
    window.location.reload();
  }
};

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
          <div className="languageDropdown">
            <select
              onChange={(e) => handleLanguageChange(e.target.value)}
              value={config.locale}
            >
              {languages.map((l) => {
                return (
                  <option key={l.code} value={l.code}>
                    {l.flat} {l.name}
                  </option>
                );
              })}
            </select>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
