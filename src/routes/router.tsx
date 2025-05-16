import { createBrowserRouter } from "react-router-dom";

// components
import DefaultLayout from "@components/layout/DefaultLayout";

// pages
import MainPage from "@pages/main/MainPage";
import LoginPage from "@pages/login/LoginPage";
import ShoppingCartPage from "@pages/shoppingCart/ShoppingCartpage";

const router = createBrowserRouter([
  // { path: "/", children: [{ path: "", element: <LoginPage /> }] },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <LoginPage /> },
      { path: "/main", element: <MainPage /> },
      { path: "/ShoppingCart", element: <ShoppingCartPage /> },
    ],
  },
]);

export default router;
