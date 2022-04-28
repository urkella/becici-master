import React from "react";
import { FormattedMessage } from "react-intl";

import css from "./ApartamentPage.module.scss";

const SectionDescription = (props) => {
  const { text, label } = props;
  return (
    <div className={css.sectionDescription}>
      <h2 className={css.descriptionTitle}>
        <FormattedMessage id="SectionDescription.title" values={{ label }} />
      </h2>
      <p className={css.description}>{text}</p>
    </div>
  );
};

export default SectionDescription;
