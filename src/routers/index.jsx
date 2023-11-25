import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home.jsx";
import Store from "../pages/store.jsx";
import Cart from "../pages/cart.jsx";
import Account from "../pages/account.jsx";
import Error from "../pages/error.jsx";
import SmartPhone from "../pages/smartphone.jsx";
import About from "../pages/about.jsx";
import Agreement from "../pages/agreement.jsx";
import Leadership from "../pages/leadership.jsx";
import Privacy from "../pages/privacy.jsx";
import Poco from "../pages/poco.jsx";
import XiaomiPro from "../pages/xiaomiPro.jsx";
import Checkout from "../pages/checkout.jsx";
import DetailPoco from "../pages/ProductDetails/Poco/index.jsx";
import RedmiList from "../pages/redmi.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/store", element: <Store /> },
  { path: "/cart", element: <Cart /> },
  { path: "/account", element: <Account /> },
  { path: "/smartphone", element: <SmartPhone /> },
  { path: "/about", element: <About /> },
  { path: "/agreement", element: <Agreement /> },
  { path: "/leadership", element: <Leadership /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/poco", element: <Poco /> },
  { path: "/redmi", element: <RedmiList /> },
  { path: "/xiaomi", element: <XiaomiPro /> },
  { path: "*", element: <Error /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/detail/:id", element: <DetailPoco /> },
]);
