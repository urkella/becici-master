import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import classNames from "classnames";
import config from "../../config";
import { metaTagProps } from "../../util/seo";
import { useLocation } from "react-router-dom";

import facebookImage from "../../assets/saunatimeFacebook-1200x630.jpg";
import twitterImage from "../../assets/saunatimeTwitter-600x314.jpg";
import css from "./Page.module.css";

const twitterPageURL = (siteTwitterHandle) => {
  if (siteTwitterHandle && siteTwitterHandle.charAt(0) === "@") {
    return `https://twitter.com/${siteTwitterHandle.substring(1)}`;
  } else if (siteTwitterHandle) {
    return `https://twitter.com/${siteTwitterHandle}`;
  }
  return null;
};

const Page = (props) => {
  const {
    className,
    rootClassName,
    children,
    referrer,
    author,
    contentType,
    description,
    facebookImages,
    published,
    schema,
    tags,
    title,
    twitterHandle,
    twitterImages,
    updated,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const location = useLocation();

  const referrerMeta = referrer ? (
    <meta name="referrer" content={referrer} />
  ) : null;

  const canonicalRootURL = config.canonicalRootURL;
  const canonicalPath = location.pathname;
  const canonicalUrl = `${canonicalRootURL}${canonicalPath}`;

  const siteTitle = config.siteTitle;
  const schemaTitle = config.siteTitle;

  const schemaDescription = "Description";
  const metaTitle = title || schemaTitle;
  const metaDescription = description || schemaDescription;
  const facebookImgs = facebookImages || [
    {
      name: "facebook",
      url: `${canonicalRootURL}${facebookImage}`,
      width: 1200,
      height: 630,
    },
  ];
  const twitterImgs = twitterImages || [
    {
      name: "twitter",
      url: `${canonicalRootURL}${twitterImage}`,
      width: 600,
      height: 314,
    },
  ];

  const metaToHead = metaTagProps({
    author,
    contentType,
    description: metaDescription,
    facebookImages: facebookImgs,
    twitterImages: twitterImgs,
    published,
    tags,
    title: metaTitle,
    twitterHandle,
    updated,
    url: canonicalUrl,
    locale: config.locale,
  });

  // eslint-disable-next-line react/no-array-index-key
  const metaTags = metaToHead.map((metaProps, i) => (
    <meta key={i} {...metaProps} />
  ));

  const facebookPage = config.siteFacebookPage;
  const twitterPage = twitterPageURL(config.siteTwitterHandle);
  const instagramPage = config.siteInstagramPage;
  const sameOrganizationAs = [facebookPage, twitterPage, instagramPage].filter(
    (v) => v != null
  );

  // Schema for search engines (helps them to understand what this page is about)
  // http://schema.org
  // We are using JSON-LD format

  // Schema attribute can be either single schema object or an array of objects
  // This makes it possible to include several different items from the same page.
  // E.g. Product, Place, Video
  const schemaFromProps = Array.isArray(schema) ? schema : [schema];
  const schemaArrayJSONString = JSON.stringify([
    ...schemaFromProps,
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "@id": `${canonicalRootURL}#organization`,
      url: canonicalRootURL,
      name: siteTitle,
      sameAs: sameOrganizationAs,
      logo: `${canonicalRootURL}/static/webapp-icon-192x192.png`,
      address: config.address,
    },
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: canonicalRootURL,
      description: schemaDescription,
      name: schemaTitle,
      publisher: {
        "@id": `${canonicalRootURL}#organization`,
      },
    },
  ]);

  return (
    <div className={classes}>
      <Helmet
        htmlAttributes={{
          lang: config.locale,
        }}
      >
        <title>{title}</title>
        {referrerMeta}
        <link rel="canonical" href={canonicalUrl} />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="Content-Language" content={config.locale} />
        {metaTags}
        <script id="page-schema" type="application/ld+json">
          {schemaArrayJSONString.replace(/</g, "\\u003c")}
        </script>
      </Helmet>
      <div className={css.content}>{children}</div>
    </div>
  );
};

const { any, array, arrayOf, number, object, oneOfType, shape, string } =
  PropTypes;

Page.defaultProps = {
  className: null,
  rootClassName: null,
  children: null,
  author: null,
  contentType: "website",
  description: null,
  facebookImages: null,
  twitterImages: null,
  published: null,
  referrer: null,
  schema: null,
  tags: null,
  twitterHandle: null,
  updated: null,
};

Page.propTypes = {
  className: string,
  rootClassName: string,
  children: any,

  // Handle referrer policy
  referrer: string,

  // SEO related props
  author: string,
  contentType: string, // og:type
  description: string, // page description
  facebookImages: arrayOf(
    shape({
      width: number.isRequired,
      height: number.isRequired,
      url: string.isRequired,
    })
  ),
  twitterImages: arrayOf(
    shape({
      width: number.isRequired,
      height: number.isRequired,
      url: string.isRequired,
    })
  ),
  published: string, // article:published_time
  schema: oneOfType([object, array]), // http://schema.org
  tags: string, // article:tag
  title: string.isRequired, // page title
  twitterHandle: string, // twitter handle
  updated: string, // article:modified_time
};

export default Page;
