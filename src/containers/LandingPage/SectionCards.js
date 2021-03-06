import React from "react";
import { NamedLink, Image, IconReviewStar } from "../../components";
import { FormattedMessage, injectIntl } from "react-intl";
import apartaments from "../../apartaments";

import css from "./LandingPage.module.scss";

const Card = (props) => {
  const { apartament, intl } = props;
  const images = apartament.images;
  const firstImage = images[0];
  return (
    <NamedLink
      className={css.card}
      name="ApartamentPage"
      params={{ id: apartament.id }}
    >
      <div className={css.cardImageContainer}>
        <Image
          className={css.cardImage}
          alt={intl.formatMessage({ id: apartament.labelId })}
          src={firstImage}
        />
      </div>
      <div className={css.cardContent}>
        <h3 className={css.cardTitle}>
          {intl.formatMessage({ id: apartament.labelId })}
        </h3>
        <p className={css.cardText}>
          {intl.formatMessage({ id: apartament.textId })}
        </p>
        <div className={css.ratings}>
          {[...Array(5).keys()].map((r, index) => {
            return (
              <IconReviewStar
                key={index}
                className={css.rating}
                isFilled={r < apartament.rating}
              />
            );
          })}
          <span className={css.ratingCount}>(5.0)</span>
        </div>
      </div>
    </NamedLink>
  );
};

const SectionCards = (props) => {
  const { intl } = props;
  return (
    <div className={css.sectionCards}>
      <h1 className={css.sectionTitle}>
        <FormattedMessage id="SectionCards.title" />
      </h1>
      <div className={css.cards}>
        {apartaments.map((a) => {
          return <Card key={a.id} apartament={a} intl={intl} />;
        })}
      </div>
    </div>
  );
};

export default injectIntl(SectionCards);
