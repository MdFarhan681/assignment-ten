import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/Products/AllProducts";
import AddProducts from "../Pages/Products/AddProducts";
import MyProducts from "../Pages/Products/MyProducts";
import Booking from "../Pages/Booking/Booking";
import ProductDetails from "../Pages/Products/ProductDetails";
import TradingProducts from "../Components/TradingProducts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Auth from "../Layouts/Auth/Auth";
import Forget from "../Pages/Forget/Forget";
import PrivateRouth from "../Components/PrivateRouth";

import Update from "../Components/Update";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () =>
          fetch("https://assignmenttenserver-pi.vercel.app/latestProducts"),
      },
      {
        path: "/allProducts",
        Component: AllProducts,
        loader: () =>
          fetch("https://assignmenttenserver-pi.vercel.app/products"),
      },
      {
        path: "/TradingProducts",
        Component: TradingProducts,
        loader: () =>
          fetch("https://assignmenttenserver-pi.vercel.app/products"),
      },
      {
        path: "/addProducts",
        element: (
          <PrivateRouth>
            <AddProducts></AddProducts>
          </PrivateRouth>
        ),
      },
      {
        path: "/myProduct",
        element: (
          <PrivateRouth>
            <MyProducts></MyProducts>
          </PrivateRouth>
        ),
      },
      {
        path: "/myBooking",
        element: (
          <PrivateRouth>
            <Booking></Booking>
          </PrivateRouth>
        ),
      },
      {
        path: "/ProductDetails/:id",
        element: (
          <PrivateRouth>
            <ProductDetails></ProductDetails>
          </PrivateRouth>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRouth>
            <Update></Update>
          </PrivateRouth>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignmenttenserver-pi.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/auth",
    Component: Auth,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/forget",
        Component: Forget,
      },
    ],
  },
]);

export default router;
