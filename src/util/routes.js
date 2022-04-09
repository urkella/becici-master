import find from "lodash/find";
import { compile } from "path-to-regexp";

const findRouteByName = (nameToFind, routes) =>
  find(routes, (route) => route.name === nameToFind);

/**
 * E.g. ```const toListingPath = toPathByRouteName('ListingPage', routes);```
 * Then we can generate listing paths with given params (```toListingPath({ id: uuidX })```)
 */
const toPathByRouteName = (nameToFind, routes) => {
  const route = findRouteByName(nameToFind, routes);
  if (!route) {
    throw new Error(`Path "${nameToFind}" was not found.`);
  }
  return compile(route.path);
};

/**
 * Shorthand for single path call. (```pathByRouteName('ListingPage', routes, { id: uuidX });```)
 */
export const pathByRouteName = (nameToFind, routes, params = {}) => {
  const hasEmptySlug =
    params && params.hasOwnProperty("slug") && params.slug === "";
  const pathParams = hasEmptySlug ? { ...params, slug: "no-slug" } : params;
  return toPathByRouteName(nameToFind, routes)(pathParams);
};

/**
 * Find component related to route name
 * E.g. `const PageComponent = findComponentByRouteName('CheckoutPage', routes);`
 * Then we can call static methods of given component:
 * `dispatch(PageComponent.setInitialValues({ listing, bookingDates }));`
 *
 * @param {String} nameToFind - Route name
 * @param {Array<{ route }>} routes - Route configuration as flat array.
 *
 * @return {Route} - Route that matches the given route name.
 */
export const findRouteByRouteName = (nameToFind, routes) => {
  const route = findRouteByName(nameToFind, routes);
  if (!route) {
    throw new Error(`Component "${nameToFind}" was not found.`);
  }
  return route;
};
