import { MainLayout } from './layout/main-layout';
import { NotFoundPage } from './pages/NotFoundPage';
import { LZMyHomePage } from './pages/MyHomePage/Loadable';
import { NoFooterLayout } from './layout/no-footer';
import { LZCartPage } from './pages/CartPage/Loadable';
import { Navigate, Outlet, RouteObject, useRoutes } from 'react-router-dom';
import React from 'react';
import { LZDetailItem } from './pages/DetaiItem/Loadable';
import { LZLogin } from './pages/Login/Loadable';
import { LZRegister } from './pages/Register/Loadable';
import { LZCategory } from './pages/Category/Loadable';
import { isAuthenticated } from 'utils/url/local-storage';
import { LZOrderHistory } from './pages/OrderHistory/Loadable';
import { UserLayout } from './layout/user-layout';
import { LZOrderDetail } from './pages/OrderDetail/Loadable';

const PrivateRoute: React.FC = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <LZMyHomePage /> },
      {
        path: 'chi-tiet-san-pham/:id',
        element: <LZDetailItem />,
      },
      {
        path: 'login',
        element: <LZLogin />,
      },
      {
        path: 'register',
        element: <LZRegister />,
      },
      {
        path: 'danh-muc/:id',
        element: <LZCategory />,
      },
    ],
  },
  {
    path: '/cart',
    element: <NoFooterLayout />,
    children: [{ index: true, element: <LZCartPage /> }],
  },
  {
    path: '/user',
    element: <PrivateRoute />,
    children: [
      {
        path: '',
        element: <UserLayout />,
        children: [
          {
            path: 'lich-su-mua-hang',
            index: true,
            element: <LZOrderHistory />,
          },
          {
            path: 'chi-tiet-don-hang/:id',
            element: <LZOrderDetail />,
          },
        ],
      },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
];

const AppRoutes: React.FC = () => {
  const element = useRoutes(routes);
  return element;
};

export default AppRoutes;
