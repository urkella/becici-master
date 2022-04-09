/**
 * This component wraps React-Router's Link by providing name-based routing.
 *
 * The `name` prop should match a route in the flattened
 * routeConfiguration passed in context by the RoutesProvider
 * component. The `params` props is the route params for the route
 * path of the given route name.
 *
 * The `to` prop is an object with the same shape as Link requires,
 * but without `pathname` that will be generated from the given route
 * name.
 *
 * Some additional props can be passed for the <a> element like
 * `className` and `style`.
 *
 */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import routeConfiguration from "../../routeConfiguration";
import { pathByRouteName, findRouteByRouteName } from "../../util/routes";

export const NamedLink = (props) => {
  const { name, params, title } = props;
  const routes = routeConfiguration();

  const onOver = () => {
    const { component: Page } = findRouteByRouteName(name, routes);
    // Loadable Component has a "preload" function.
    if (Page.preload) {
      Page.preload();
    }
  };

  // Link props
  const { to, children } = props;
  const pathname = pathByRouteName(name, routes, params);

  // <a> element props
  const { className, style } = props;
  const aElemProps = {
    className,
    style,
    title,
  };

  return (
    <Link
      onMouseOver={onOver}
      onTouchStart={onOver}
      to={{ pathname, ...to }}
      {...aElemProps}
    >
      {children}
    </Link>
  );
};

const { object, string, shape, any } = PropTypes;

NamedLink.defaultProps = {
  params: {},
  to: {},
  children: null,
  className: "",
  style: {},
  title: null,
  match: {},
};

NamedLink.propTypes = {
  // name of the route in routeConfiguration
  name: string.isRequired,
  // params object for the named route
  params: object,
  // Link component props
  to: shape({ search: string, hash: string, state: object }),
  children: any,

  // generic props for the underlying <a> element
  className: string,
  style: object,
  title: string,

  // from withRouter
  match: object,
};

export default NamedLink;
