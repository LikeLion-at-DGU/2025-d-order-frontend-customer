import { createBrowserRouter } from "react-router-dom";

// components
import DefaultLayout from "@components/layout/DefaultLayout";

// pages
import MainPage from "@pages/main/MainPage";
import LoginPage from "@pages/login/LoginPage";
import OrderListPage from "@pages/orderList/OrderListPage";
import MenulistPage from "@pages/menulistpage/MenuListPage";
import ShoppingCartPage from "@pages/shoppingCart/ShoppingCartpage";

const router = createBrowserRouter([
  //{ path: '/', children: [{ path: '', element: <LoginPage /> }] },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <LoginPage /> },
      { path: "/main", element: <MainPage /> },
      { path: "/orderList", element: <OrderListPage />},
      { path: "/ShoppingCart", element: <ShoppingCartPage /> },
      { path: "/menulist", element: <MenulistPage /> },
    ],
  },
]);

export default router;
