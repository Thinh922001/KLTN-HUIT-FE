import { MainLayout } from './layout/main-layout';
import { NotFoundPage } from './pages/NotFoundPage';
import { LZMyHomePage } from './pages/MyHomePage/Loadable';
import { NoFooterLayout } from './layout/no-footer';
import { LZCardPage } from './pages/CardPage/Loadable';
import { RouteObject, useRoutes } from 'react-router-dom';
import React from 'react';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [{ index: true, element: <LZMyHomePage /> }],
  },
  {
    path: '/card',
    element: <NoFooterLayout />,
    children: [{ index: true, element: <LZCardPage /> }],
  },
  { path: '*', element: <NotFoundPage /> },
];

const AppRoutes: React.FC = () => {
  const element = useRoutes(routes);
  return element;
};

export default AppRoutes;
