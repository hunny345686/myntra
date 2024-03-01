import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/CartComponent/Cart";
import Home from "../pages/HomeComponent/Home";
import Product from "../pages/ProductsComponents/Product";
import SingIn from "../pages/SingIn";
import SingleProduct from "../pages/SingleProductComponent/SingleProduct";
import Wishlist from "../pages/Wishlist/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
        children: [
          {
            path: "*",
            element: <Product />,
          },
        ],
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/singin",
        element: <SingIn />,
      },
    ],
  },
]);
