import React from "react";
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

const SectionAmenities = () => {
  return (
    <div className={css.sectionAmenities}>
      <h2 className={css.amenitiesTitle}>Amenities</h2>
      <div className={css.amenities}>
        {amenityCard("Free car parking", <IconParking />)}
        {amenityCard("Free to use Wi-Fi", <IconWiFi />)}
        {amenityCard("Airport transport", <IconBus />)}
        {amenityCard("Air conditioner", <IconAirconditioner />)}
        {amenityCard("Unbeatable prices", <IconCash />)}
        {amenityCard("Online reservations", <IconReserve />)}
      </div>
    </div>
  );
};

export default SectionAmenities;
