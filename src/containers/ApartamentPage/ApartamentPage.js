import React from "react";
import { useParams } from "react-router-dom";
import { Page, Topbar, Footer } from "../../components";
import { injectIntl } from "react-intl";

import apartaments from "../../apartaments";
import config from "../../config";

import SectionGallery from "./SectionGallery";
import SectionDescription from "./SectionDescription";
import SectionAmenities from "./SectionAmenities";
import BookingPanel from "./BookingPanel";

import css from "./ApartamentPage.module.scss";

const ApartamentPage = (props) => {
  const { intl } = props;
  const { id } = useParams();

  const currentApartament = apartaments.find((a) => a.id === id);
  const { labelId, textId, images } = currentApartament;

  const schemaTitle = `${intl.formatMessage({ id: labelId })} | ${
    config.siteTitle
  }`;
  return (
    <Page title={schemaTitle}>
      <Topbar />
      <div className={css.apartamentPage}>
        <div className={css.pageWrapper}>
          <div>
            <h1 className={css.pageTitle}>
              {intl.formatMessage({ id: labelId })}
            </h1>
            <div className={css.pageSections}>
              <SectionGallery images={images} />
              <SectionDescription
                text={intl.formatMessage({ id: textId })}
                label={intl.formatMessage({ id: labelId })}
              />
              <SectionAmenities />
            </div>
          </div>
          <BookingPanel label={intl.formatMessage({ id: labelId })} />
        </div>
        <Footer />
      </div>
    </Page>
  );
};

export default injectIntl(ApartamentPage);
