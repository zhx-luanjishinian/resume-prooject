import Loading from '../componets/Loading';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { routes } from './index';
import { renderRedirect, renderRoutes } from './renderRoutes';

const Guard = () => {
  //   console.log(11);
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
