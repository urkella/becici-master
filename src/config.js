// If you want to change the language, remember to also change the
// locale data and the messages in the app.js file.
const localeFromLocaleStorage = localStorage.getItem("language");
const locale = localeFromLocaleStorage ? localeFromLocaleStorage : "en";

// Address information is used in SEO schema for Organization (http://schema.org/PostalAddress)
const addressCountry = "ME";
const addressRegion = "Montenegro";
const postalCode = "37260";
const streetAddress = "Becici";

// Canonical root url is needed in social media sharing and SEO optimization purposes.
const canonicalRootURL = process.env.REACT_APP_CANONICAL_ROOT_URL;

// Site title is needed in meta tags (bots and social media sharing reads those)
const siteTitle = "Apartments Tomić";

// Twitter handle is needed in meta tags (twitter:site). Start it with '@' character
const siteTwitterHandle = null;

// Instagram page is used in SEO schema (http://schema.org/Organization)
const siteInstagramPage = "https://www.instagram.com";

// Facebook page is used in SEO schema (http://schema.org/Organization)
const siteFacebookPage = "https://www.facebook.com/";

// Social logins & SSO

// Note: Facebook app id is also used for tracking:
// Facebook counts shares with app or page associated by this id
// Currently it is unset, but you can read more about fb:app_id from
// https://developers.facebook.com/docs/sharing/webmasters#basic
// You should create one to track social sharing in Facebook
const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;

// NOTE: only expose configuration that should be visible in the
// client side, don't add any server secrets in this file.
const config = {
  locale,
  canonicalRootURL,
  address: {
    addressCountry,
    addressRegion,
    postalCode,
    streetAddress,
  },
  siteTitle,
  siteFacebookPage,
  siteInstagramPage,
  siteTwitterHandle,
  facebookAppId,
};

export default config;
