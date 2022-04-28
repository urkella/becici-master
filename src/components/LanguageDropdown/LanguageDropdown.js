import React from "react";
import config from "../../config";
import languages from "../../util/languages";

import css from "./LanguageDropdown.module.scss";

const handleLanguageChange = (lang) => {
  if (lang) {
    localStorage.setItem("language", lang);
    window.location.reload();
  }
};

const LanguageDropdown = () => {
  return (
    <div className={css.languageDropdown}>
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
  );
};

export default LanguageDropdown;
