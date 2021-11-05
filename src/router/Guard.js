import Loading from 'components/Loading';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { routes } from 'router';
import { renderRedirect, renderRoutes } from './renderRoutes';

const Guard = () => {
  const auth = useSelector((state) => state.global.auth);
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {renderRoutes(routes, auth)}
        {renderRedirect(auth)}
      </Switch>
    </Suspense>
  );
};

export default Guard;
