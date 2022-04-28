import React from "react";
import { Page, Topbar, Footer } from "../../components";
import { injectIntl } from "react-intl";
import config from "../../config";

import SectionHero from "./SectionHero";
import SectionAmenities from "./SectionAmenities";
import SectionCards from "./SectionCards";
import SectionContact from "./SectionContact";
import css from "./LandingPage.module.scss";

const LandingPage = (props) => {
  const { intl } = props;
  const schemaTitle = intl.formatMessage(
    { id: "LandingPage.schemaTitle" },
    { siteTitle: config.siteTitle }
  );
  return (
    <Page title={schemaTitle}>
      <Topbar />
      <div className={css.landingPage} id="home">
        <SectionHero />
        <ul className={css.sections}>
          <li className={css.sectionContent} id="amenities">
            <SectionAmenities />
          </li>
          <li className={css.sectionContent} id="cards">
            <SectionCards />
          </li>
          <li className={css.sectionContent} id="contact">
            <SectionContact />
          </li>
        </ul>
        <Footer />
      </div>
    </Page>
  );
};

export default injectIntl(LandingPage);
