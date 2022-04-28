import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import {
  IconParking,
  IconWiFi,
  IconBus,
  IconAirconditioner,
  IconCash,
  IconReserve,
} from "../../containers/LandingPage/SectionAmenities";

import css from "./ApartamentPage.module.scss";

export const amenityCard = (text, icon) => {
  return (
    <div className={css.amenity}>
      {icon}
      <span className={css.amenityText}>{text}</span>
    </div>
  );
};

const SectionAmenities = (props) => {
  const { intl } = props;
  return (
    <div className={css.sectionAmenities}>
      <h2 className={css.amenitiesTitle}>
        <FormattedMessage id="SectionAmenities.title" />
      </h2>
      <div className={css.amenities}>
        {amenityCard(
          intl.formatMessage({ id: "SectionAmenities.parking" }),
          <IconParking />
        )}
        {amenityCard(
          intl.formatMessage({ id: "SectionAmenities.wifi" }),
          <IconWiFi />
        )}
        {amenityCard(
          intl.formatMessage({ id: "SectionAmenities.airport" }),
          <IconBus />
        )}
        {amenityCard(
          intl.formatMessage({ id: "SectionAmenities.air" }),
          <IconAirconditioner />
        )}
        {amenityCard(
          intl.formatMessage({ id: "SectionAmenities.parking" }),
          <IconCash />
        )}
        {amenityCard(
          intl.formatMessage({ id: "SectionAmenities.reservations" }),
          <IconReserve />
        )}
      </div>
    </div>
  );
};

export default injectIntl(SectionAmenities);
