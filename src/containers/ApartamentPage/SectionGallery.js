import React, { useState } from "react";
import { IconArrowHead } from "../../components";

import ImageGallery from "react-image-gallery";

// Copied directly from
// `node_modules/react-image-gallery/styles/css/image-gallery.css`. The
// copied file is left unedited, and all the overrides are defined in
// the component CSS file below.
import "./image-gallery.css";

import css from "./ApartamentPage.module.scss";

const IMAGE_GALLERY_OPTIONS = {
  showPlayButton: false,
};

const SectionGallery = (props) => {
  const { images } = props;
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Gallery classes
  const galleryClasses = {
    originalClass: isFullscreen ? css.fullScreenGalleryImage : css.galleryImage,
  };

  // Denormalised gallery images
  const galleryImages = images.map((i) => {
    return {
      original: i,
      thumbnail: i,
      image: i,
      ...galleryClasses,
    };
  });

  const onScreenChange = (isFull) => {
    setIsFullscreen(isFull);
  };
  const renderLeftNav = (onClick, disabled) => {
    return (
      <button className={css.navLeft} disabled={disabled} onClick={onClick}>
        <div className={css.navArrowWrapper}>
          <IconArrowHead direction="left" size="big" />
        </div>
      </button>
    );
  };
  const renderRightNav = (onClick, disabled) => {
    return (
      <button className={css.navRight} disabled={disabled} onClick={onClick}>
        <div className={css.navArrowWrapper}>
          <IconArrowHead direction="right" size="big" />
        </div>
      </button>
    );
  };

  return (
    <div className={css.sectionGallery}>
      <ImageGallery
        items={galleryImages}
        onScreenChange={onScreenChange}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
        {...IMAGE_GALLERY_OPTIONS}
      />
    </div>
  );
};

export default SectionGallery;
