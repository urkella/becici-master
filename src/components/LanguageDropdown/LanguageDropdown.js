import React, { useState } from "react";
import config from "../../config";
import languages from "../../util/languages";
import classNames from "classnames";

import css from "./LanguageDropdown.module.scss";

const handleLanguageChange = (lang) => {
  if (lang) {
    localStorage.setItem("language", lang);
    window.location.reload();
  }
};

const LanguageDropdown = (props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const { rootClassName, className, dropdownLabelClassName } = props;
  const classes = classNames(rootClassName || css.root, className);

  const currentLanguage = languages.find((l) => l.code === config.locale);
  return (
    <div
      className={classes}
      onBlur={() => {
        if (isDropdownOpen) {
          setDropdownOpen(false);
        }
      }}
      tabIndex={0}
    >
      <div
        className={classNames(css.dropdownLabel, dropdownLabelClassName, {
          [css.dropdownLabelActive]: isDropdownOpen,
        })}
        onClick={() => {
          if (isDropdownOpen) {
            setDropdownOpen(false);
          } else {
            setDropdownOpen(true);
          }
        }}
      >
        <img
          className={css.dropdownImage}
          src={currentLanguage.flagSrc}
          alt={currentLanguage.name}
        />
      </div>
      {isDropdownOpen ? (
        <div className={css.dropdownContent}>
          {languages.map((l) => {
            const isLanguageActive = l.code === config.locale;
            return (
              <div
                key={l.code}
                className={classNames(css.dropdownItem, {
                  [css.dropdownItemActive]: isLanguageActive,
                })}
                onClick={() => handleLanguageChange(l.code)}
              >
                <img
                  className={css.dropdownItemImage}
                  src={l.flagSrc}
                  alt={l.name}
                />
                <span className={css.dropdownItemHeading}>{l.name}</span>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default LanguageDropdown;
