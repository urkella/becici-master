import React from "react";
import { useParams } from "react-router-dom";
import { Page, Topbar, Footer } from "../../components";

import apartaments from "../../apartaments";
import config from "../../config";

import SectionGallery from "./SectionGallery";
import SectionDescription from "./SectionDescription";
import SectionAmenities from "./SectionAmenities";
import BookingPanel from "./BookingPanel";

import css from "./ApartamentPage.module.scss";

const ApartamentPage = () => {
  const { id } = useParams();
  const currentApartament = apartaments.find((a) => a.id === id);
  const { label, text, images } = currentApartament;

  const schemaTitle = `${label} | ${config.siteTitle}`;
  return (
    <Page title={schemaTitle}>
      <Topbar />
      <div className={css.apartamentPage}>
        <div className={css.pageWrapper}>
          <div>
            <h1 className={css.pageTitle}>{label}</h1>
            <div className={css.pageSections}>
              <SectionGallery images={images} />
              <SectionDescription text={text} label={label} />
              <SectionAmenities />
            </div>
          </div>
          <BookingPanel label={label} />
        </div>
        <Footer />
      </div>
    </Page>
  );
};

export default ApartamentPage;
