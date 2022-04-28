import React from "react";
import { Image } from "../../components";
import { FormattedMessage } from "react-intl";
import classNames from "classnames";

import css from "./Footer.module.scss";

const IconFacebook = () => {
  return (
    <svg
      className={css.icon}
      xmlns="http://www.w3.org/2000/svg"
      height="42"
      width="42"
      viewBox="0 0 48 48"
    >
      <path
        d="M8 4c0-1 .5-1 1-1h.6a.75.75 0 0 0 .76-.76V1.3a.76.76 0 0 0-.77-.76L8.17.52a2.86 2.86 0 0 0-2.95 3.2v1.45h-.79a.76.76 0 0 0-.76.76v.94a.76.76 0 0 0 .76.76h.79V13a.5.5 0 0 0 .5.5h1.81A.5.5 0 0 0 8 13V7.63h.88a.76.76 0 0 0 .76-.76v-.94a.76.76 0 0 0-.76-.76H8Z"
        style={{
          fill: "#00b1c8",
          stroke: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        transform="scale(3.42857)"
      />
    </svg>
  );
};

const IconTwitter = () => {
  return (
    <svg
      className={css.icon}
      xmlns="http://www.w3.org/2000/svg"
      height="32"
      width="32"
      viewBox="0 0 48 48"
    >
      <path
        d="M4 9.4a6.77 6.77 0 0 1-2.41 1.21.5.5 0 0 0 0 .94C8.51 14.39 12.91 10 12.24 5.13l1.12-2.32h-1.3C10.44.82 6.14.92 6.85 5.16c0 0-2.3.41-5.24-2.48A.5.5 0 0 0 .76 3 5.52 5.52 0 0 0 4 9.4Z"
        style={{
          fill: "#00b1c8",
          stroke: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        transform="scale(3.42857)"
      />
    </svg>
  );
};

const IconInstagram = () => {
  return (
    <svg
      className={css.icon}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      height="32"
      width="32"
      viewBox="0 0 24 24"
    >
      <path d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43 4.94 4.94 0 0 0-1.16-1.77 4.7 4.7 0 0 0-1.77-1.15 7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47 4.78 4.78 0 0 0-1.77 1.15 4.7 4.7 0 0 0-1.15 1.77 7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43 4.7 4.7 0 0 0 1.15 1.77 4.78 4.78 0 0 0 1.77 1.15 7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47 4.7 4.7 0 0 0 1.77-1.15 4.85 4.85 0 0 0 1.16-1.77 7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86 3.06 3.06 0 0 1-.75 1.15 3.19 3.19 0 0 1-1.15.75 5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3 3.27 3.27 0 0 1-1.1-.75 3 3 0 0 1-.74-1.15 5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34 3.06 3.06 0 0 1 1.19.8 3.06 3.06 0 0 1 .75 1.1 5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12 5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12 3.33 3.33 0 0 1 12 15.33Z" />
    </svg>
  );
};

const Footer = (props) => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.content}>
        <div className={css.icons}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <IconFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <IconTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <IconInstagram />
          </a>
        </div>
        <ul className={css.links}>
          <li>
            <a href="#home">
              <FormattedMessage id="Footer.home" />
            </a>
          </li>
          <li>
            <a href="#cards">
              <FormattedMessage id="Footer.apartments" />
            </a>
          </li>
          <li>
            <a href="#amenities">
              <FormattedMessage id="Footer.amenities" />
            </a>
          </li>
          <li>
            <a href="#contact">
              <FormattedMessage id="Footer.contact" />
            </a>
          </li>
        </ul>
        <div className={css.reviews}>
          <a
            href="https://www.google.com/search?q=apartments+tomic+becici&rlz=1C5CHFA_enRS976RS976&biw=1440&bih=821&sxsrf=APq-WBvj1JKaUPpoFO-rpUb5MmpIg7FhUg%3A1646246569921&ei=qbofYvPdN5rZkwWZg7a4DQ&ved=0ahUKEwiz1oywiqj2AhWa7KQKHZmBDdcQ4dUDCA4&uact=5&oq=apartments+tomic+becici&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELADEB5KBAhBGAFKBAhGGABQ8AJY8AJg-wNoAHAAeACAAZQCiAGUApIBAzItMZgBAKABAcgBAcABAQ&sclient=gws-wiz#lrd=0x134dd5590310c9db:0x5ca858e55fbf5118,1,,,"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://www.revivifymarketing.com/wp-content/uploads/2020/06/google-reviews-logo.png"
              alt="Google reviews"
            />
          </a>
          <a
            href="https://www.booking.com/hotel/me/apartments-tomic.sr.html#tab-reviews"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://logos-world.net/wp-content/uploads/2021/08/Booking-Logo.png"
              alt="Booking.com reviews"
            />
          </a>
        </div>
        <p className={css.copyright}>Apartments Tomić © All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
