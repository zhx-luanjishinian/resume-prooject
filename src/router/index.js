// import React from 'react';
import { ComponentType, LazyExoticComponent, ReactNode } from 'react';

const routes = [
  {
    path: '/make',
    component: lazy(async () => import('../pages/make')),
    identify: [IDENTIFY.AD, IDENTIFY.CONTENT, IDENTIFY.EC],
    meta: {
      title: '概览',
    },
  },
];
const navs = routes.filter((route) => route.meta);
const literalRoutes = (lroutes) => {
  const result = [];
  lroutes.forEach((route) => {
    result.push(route.path);
    if (route.routes) {
      result.push(...literalRoutes(route.routes));
    }
  });
  return result;
};
const allRouterPaths = literalRoutes(routes);
function getSubPaths(rts) {
  if (rts.length < 1) {
    return [];
  }
  const result = [];
  rts.forEach((r) => {
    if (r.routes) {
      result.push(r.path, ...getSubPaths(r.routes));
    }
  });
  return result;
}
// 导出所有父级的path,用于默认展开全部menu
const menuOpenKeys = getSubPaths(routes);

export { menuOpenKeys, allRouterPaths, navs, routes };
