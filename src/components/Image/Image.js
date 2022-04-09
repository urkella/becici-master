import React from "react";
import { string } from "prop-types";
import classNames from "classnames";

import css from "./Image.module.css";

const Image = (props) => {
  const { rootClassName, className, alt, src } = props;
  const classes = classNames(rootClassName || css.root, className);

  const imgProps = {
    className: classes,
    src,
  };
  return <img alt={alt || ""} {...imgProps} />;
};

Image.defaultProps = {
  rootClassName: null,
  className: null,
};

Image.propTypes = {
  rootClassName: string,
  className: string,
};

export default Image;
