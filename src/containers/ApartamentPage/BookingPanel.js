import React from "react";
import { FormattedMessage } from "react-intl";

import { IconPhone } from "../../containers/LandingPage/SectionContact";
import css from "./ApartamentPage.module.scss";

const BookingPanel = (props) => {
  const { label } = props;
  return (
    <div className={css.bookingPanel}>
      <div className={css.bookingPanelContent}>
        <h3 className={css.bookingPanelTitle}>
          <FormattedMessage id="BookingPanel.title" values={{ label }} />
        </h3>
        <a className={css.bookingPanelButton} href="/#contact">
          <FormattedMessage id="BookingPanel.buttonText" />
        </a>
      </div>
      <p className={css.contactPhone}>
        <IconPhone />
        <span>
          <FormattedMessage
            id="BookingPanel.call"
            values={{
              phone: <a href="tel:+382 69 431 017">+382 69 431 017</a>,
            }}
          />
        </span>
      </p>
    </div>
  );
};

export default BookingPanel;
