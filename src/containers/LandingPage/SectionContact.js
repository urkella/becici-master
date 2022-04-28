import React from "react";

import css from "./LandingPage.module.scss";

const IconEmail = () => {
  return (
    <svg
      className={css.contactIcon}
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      viewBox="0 0 48 48"
    >
      <path
        d="M10.05 7A3 3 0 1 1 7 4a3 3 0 0 1 3.05 3Z"
        style={{
          fill: "none",
          stroke: "#4a4a4a",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        transform="scale(3.42857)"
      />
      <path
        d="M10.05 7v1.3c0 3.49 5.47.2 2.6-4.54A6.59 6.59 0 0 0 7 .5 6.5 6.5 0 1 0 9.52 13"
        style={{
          fill: "none",
          stroke: "#4a4a4a",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        transform="scale(3.42857)"
      />
    </svg>
  );
};

export const IconPhone = () => {
  return (
    <svg
      className={css.contactIcon}
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      viewBox="0 0 48 48"
    >
      <path
        d="M8.76 13a3.19 3.19 0 0 0 4-.44l.45-.44a1.08 1.08 0 0 0 0-1.51L11.3 8.72a1.07 1.07 0 0 0-1.5 0h0a1.08 1.08 0 0 1-1.51 0l-3-3a1.06 1.06 0 0 1 0-1.51h0a1.07 1.07 0 0 0 0-1.5L3.39.81a1.08 1.08 0 0 0-1.51 0l-.44.45a3.19 3.19 0 0 0-.44 4A28.94 28.94 0 0 0 8.76 13Z"
        style={{
          fill: "none",
          stroke: "#4a4a4a",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        transform="scale(3.42857)"
      />
    </svg>
  );
};

const SectionContact = () => {
  return (
    <div className={css.sectionContact}>
      <div className={css.contactInfo}>
        <div className={css.contactRow}>
          <div>
            <IconEmail />
            <h3>Email</h3>
          </div>
          <div className={css.contactEmail}>
            <a href="mailto:info@apartmentstomic.me">
              apartmentstomicbecici@gmail.com
            </a>
          </div>
        </div>
        <div className={css.contactRow}>
          <div>
            <IconPhone />
            <h3>Phone</h3>
          </div>
          <div className={css.contactEmail}>
            <a href="tel:+382 69 431 017">+382 69 431 017</a>
          </div>
        </div>
      </div>
      <div className={css.contactMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47226.70321064029!2d18.840286268490274!3d42.28558960456533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd56d765439c1%3A0xf5886649c1dcf1bf!2sAPARTMENTS%20TOMI%C4%86!5e0!3m2!1sen!2srs!4v1645523860204!5m2!1sen!2srs"
          width="100%"
          height="232"
          style={{ border: "none" }}
          allowFullScreen=""
          loading="lazy"
          title="Contact"
        ></iframe>
      </div>
    </div>
  );
};

export default SectionContact;
