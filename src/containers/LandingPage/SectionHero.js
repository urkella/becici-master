import React from "react";
import { NamedLink } from "../../components";
import apartments from "../../apartaments";

import bookingReviewImage from "../../assets/booking-review.png";
import bgImage from "../../assets/bg.jpg";
import css from "./LandingPage.module.scss";

const SectionHero = () => {
  return (
    <div className={css.sectionHero}>
      <div className={css.heroContent}>
        <h1 className={css.heroTitle}>
          Welcome to Apartments Tomić in{" "}
          <span className={css.highlighted}>Bečići</span> ☀️
        </h1>
        <p className={css.heroText}>
          We are located only 300m from the main{" "}
          <span className={css.highlighted} style={{ fontWeight: "500" }}>
            Bečići
          </span>{" "}
          beach, all of our apartments come with air conditioning, a flat-screen
          TV in the living room, a safety deposit box, a private bathroom, a
          private kitchen with all the necessary equipment, a balcony, and free
          WiFi as well as free private parking for our guests who drive.
        </p>
        <ul className={css.heroTags}>
          {apartments.map((a) => {
            return (
              <li key={a.id} className={css.heroTag}>
                <NamedLink name="ApartamentPage" params={{ id: a.id }}>
                  <img
                    className={css.heroTagImage}
                    src={a.images[0]}
                    alt={a.label}
                  />
                  {a.label}
                </NamedLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={css.heroImageContainer}>
        <img className={css.heroImage} src={bgImage} alt="Becici" />
        <img
          className={css.reviewImage}
          src={bookingReviewImage}
          alt="Booking"
        />
      </div>
    </div>
  );
};

export default SectionHero;
