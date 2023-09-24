import React from "react";
import Home from "../src/pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  // ScrollRestoration
} from "react-router-dom";
import { productData } from "./api/Api";
import Product from "./components/Product";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
