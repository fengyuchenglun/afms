/**
 *
 * App
 *
 */

import React, { ReactElement } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import appRoutes, { RouteConfig } from './routes';
import './App.scss';

function renderRouteConfigV3(routes: Array<RouteConfig>): ReactElement {
  // Resolve route config object in React Router v3.
  const children: Array<React.ReactNode> = []; // children component list

  const renderRoute = (item: RouteConfig): void => {
    if (item.component && item.routes) {
      const childRoutes = renderRouteConfigV3(item.routes);
      const ItemComponent = item.component as React.ComponentType;

      children.push(
        <Route
          key={item.path}
          exact={item.exact}
          render={(props): ReactElement => <ItemComponent {...props}>{childRoutes}</ItemComponent>}
          path={item.path}
        />,
      );
    } else if (item.component || item.redirect) {
      children.push(
        item.redirect ? (
          <Redirect key={item.path} to={item.redirect} {...item} />
        ) : (
          <Route key={item.path} exact {...item} />
        ),
      );
    } else if (item.routes) {
      item.routes.forEach(r => renderRoute(r));
    }
  };

  routes.forEach((item: RouteConfig) => renderRoute(item));

  // Use Switch so that only the first matched route is rendered.
  return <Switch>{children}</Switch>;
}

const App: React.FC = () => (
  <Router>
    {renderRouteConfigV3(appRoutes)}
  </Router>
);

App.propTypes = {
};

export default App;
