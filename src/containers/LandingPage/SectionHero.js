import React from "react";
import { NamedLink } from "../../components";
import apartments from "../../apartaments";
import { FormattedMessage, injectIntl } from "react-intl";

import bookingReviewImage from "../../assets/booking-review.png";
import bgImage from "../../assets/bg.jpg";
import css from "./LandingPage.module.scss";

const SectionHero = (props) => {
  const { intl } = props;
  return (
    <div className={css.sectionHero}>
      <div className={css.heroContent}>
        <h1 className={css.heroTitle}>
          <FormattedMessage
            id="SectionHero.title"
            values={{
              highlighted: (
                <span className={css.highlighted}>
                  <FormattedMessage id="SectionHero.becici" />
                </span>
              ),
            }}
          />
        </h1>
        <p className={css.heroText}>
          <FormattedMessage
            id="SectionHero.text"
            values={{
              highlighted: (
                <span className={css.highlighted} style={{ fontWeight: "500" }}>
                  <FormattedMessage id="SectionHero.becici" />
                </span>
              ),
            }}
          />
        </p>
        <ul className={css.heroTags}>
          {apartments.map((a) => {
            return (
              <li key={a.id} className={css.heroTag}>
                <NamedLink name="ApartamentPage" params={{ id: a.id }}>
                  <img
                    className={css.heroTagImage}
                    src={a.images[0]}
                    alt={intl.formatMessage({ id: a.labelId })}
                  />
                  {intl.formatMessage({ id: a.labelId })}
                </NamedLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={css.heroImageContainer}>
        <img className={css.heroImage} src={bgImage} alt="Becici" />
        <a
          className={css.bookingReviewLink}
          href="https://www.booking.com/hotel/me/apartments-tomic.sr.html#tab-reviews"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={css.reviewImage}
            src={bookingReviewImage}
            alt="Booking"
          />
        </a>
      </div>
    </div>
  );
};

export default injectIntl(SectionHero);
