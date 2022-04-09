import React from "react";
import { IconPhone } from "../../containers/LandingPage/SectionContact";
import css from "./ApartamentPage.module.scss";

const BookingPanel = (props) => {
  const { label } = props;
  return (
    <div className={css.bookingPanel}>
      <div className={css.bookingPanelContent}>
        <h3 className={css.bookingPanelTitle}>Book {label}</h3>
        <a className={css.bookingPanelButton} href="/#contact">
          Reserve now
        </a>
      </div>
      <p className={css.contactPhone}>
        <IconPhone />
        <span>
          Call <a href="tel:+382 69 431 017">+382 69 431 017</a>
        </span>
      </p>
    </div>
  );
};

export default BookingPanel;
