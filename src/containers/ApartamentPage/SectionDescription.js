import React from "react";

import css from "./ApartamentPage.module.scss";

const SectionDescription = (props) => {
  const { text, label } = props;
  return (
    <div className={css.sectionDescription}>
      <h2 className={css.descriptionTitle}>About {label}</h2>
      <p className={css.description}>{text}</p>
    </div>
  );
};

export default SectionDescription;
