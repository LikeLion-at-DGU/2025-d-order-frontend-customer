import { createBrowserRouter } from 'react-router-dom';

// components
import DefaultLayout from '@components/layout/DefaultLayout';

import { ROUTE_CONSTANTS } from '@constants/RouteConstants';

// pages
import MainPage from '@pages/main/MainPage';
import LoginPage from '@pages/login/LoginPage';
import MenulistPage from '@pages/menulistpage/MenuListPage';
import ShoppingCartPage from '@pages/shoppingCart/ShoppingCartpage';

const router = createBrowserRouter([
  //{ path: '/', children: [{ path: '', element: <LoginPage /> }] },
  {
    path: ROUTE_CONSTANTS.HOME,
    element: <DefaultLayout />,
    children: [
      { path: ROUTE_CONSTANTS.LOGIN, element: <LoginPage /> },
      { path: ROUTE_CONSTANTS.MAIN, element: <MainPage /> },
      { path: ROUTE_CONSTANTS.SHOPPINGCART, element: <ShoppingCartPage /> },
      { path: ROUTE_CONSTANTS.MENULIST, element: <MenulistPage /> },
    ],
  },
]);

export default router;
