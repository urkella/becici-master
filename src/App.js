import React from "react";
import routeConfiguration from "./routeConfiguration";
import difference from "lodash/difference";
import { ScrollToTop } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { IntlProvider } from "react-intl";
import config from "./config";

import englishMessages from "./translations/en.json";
import russianMessages from "./translations/ru.json";
import serbianMessages from "./translations/sr.json";

const messagesInLocale = {
  en: englishMessages,
  ru: russianMessages,
  sr: serbianMessages,
};

const addMissingTranslations = (
  sourceLangTranslations,
  targetLangTranslations
) => {
  const sourceKeys = Object.keys(sourceLangTranslations);
  const targetKeys = Object.keys(targetLangTranslations);
  const missingKeys = difference(sourceKeys, targetKeys);

  const addMissingTranslation = (translations, missingKey) => ({
    ...translations,
    [missingKey]: sourceLangTranslations[missingKey],
  });

  return missingKeys.reduce(addMissingTranslation, targetLangTranslations);
};

const messages = addMissingTranslations(
  messagesInLocale.en,
  messagesInLocale[config.locale]
);

const App = () => {
  return (
    <IntlProvider
      locale={config.locale}
      messages={messages}
      textComponent="span"
    >
      <HelmetProvider>
        <Router>
          <ScrollToTop>
            <Routes>
              {routeConfiguration().map((route) => {
                return (
                  <Route
                    key={route.name}
                    path={route.path}
                    element={route.component}
                  />
                );
              })}
            </Routes>
          </ScrollToTop>
        </Router>
      </HelmetProvider>
    </IntlProvider>
  );
};

export default App;
