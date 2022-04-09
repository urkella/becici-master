import React from "react";
import routeConfiguration from "./routeConfiguration";
import { ScrollToTop } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
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
  );
};

export default App;
