import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export function isAuth(userAuth, identify) {
  if (!identify || identify.length === 0) {
    return true;
  }
  let is = false;
  for (let i = 0; i < identify.length; i++) {
    const id = identify[i];
    if (userAuth[id]) {
      is = true;
      break;
    }
  }
  return is;
}

export function renderRoutes(routes, auth, noMatchPath) {
  //   console.log(111);
  return routes ? (
    <Switch>
      {routes.map((route, i) => {
        if (!isAuth(auth, route.identify)) {
          return null;
        }
        if (route.redirect) {
          return <Redirect exact key={route.path || i} from={route.path} to={route.redirect} />;
        }
        if (route.routes) {
          return (
            <Route
              strict
              path={route.path}
              key={route.path}
              render={() => {
                if (route.routes) {
                  return renderRoutes(route.routes, auth, route.noMatchPath);
                }
              }}
            />
          );
        }
        return <Route exact key={route.path} path={route.path} component={route.component} />;
      })}
      {renderRedirect(auth)}
      <Redirect to={noMatchPath ?? '/'} />
    </Switch>
  ) : null;
}
function isEmptyObj(obj) {
  for (const key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) return false;
  }
  return true;
}
export const renderRedirect = (auth) => {
  let to = '';
  if (isEmptyObj(auth)) {
    to = `/?redirectUrl=${encodeURIComponent(window.location.pathname)}`;
  } else if (auth.ip) {
    to = '/403';
  } else if (auth.settling) {
    to = '/settle';
  }
  return to ? <Redirect to={to} /> : null;
};
