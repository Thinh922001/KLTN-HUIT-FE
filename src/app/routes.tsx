import { MainLayout } from './layout/main-layout';
import { NotFoundPage } from './pages/NotFoundPage';
import { LZMyHomePage } from './pages/MyHomePage/Loadable';
import { NoFooterLayout } from './layout/no-footer';
import { LZCartPage } from './pages/CartPage/Loadable';
import { RouteObject, useRoutes } from 'react-router-dom';
import React from 'react';
import { LZDetailItem } from './pages/DetaiItem/Loadable';
import { LZLogin } from './pages/Login/Loadable';
import { LZRegister } from './pages/Register/Loadable';
import { LZCategory } from './pages/Category/Loadable';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <LZMyHomePage /> },
      {
        path: '/chi-tiet-san-pham/:id',
        element: <LZDetailItem />,
      },
      {
        path: '/login',
        element: <LZLogin />,
      },
      {
        path: '/Register',
        element: <LZRegister />,
      },
      {
        path: '/danh-muc/:id',
        element: <LZCategory />,
      },
    ],
  },
  {
    path: '/cart',
    element: <NoFooterLayout />,
    children: [{ index: true, element: <LZCartPage /> }],
  },
  { path: '*', element: <NotFoundPage /> },
];

const AppRoutes: React.FC = () => {
  const element = useRoutes(routes);
  return element;
};

export default AppRoutes;
