import React from "react";
import { DynamicThemeProvider } from "./context/DynamicThemeContext";
import { CartProvider } from "./context/CartProvider";
import Header from "./components/organism/Header/Header";
import Footer from "./components/organism/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Store from "./pages/store.jsx";
import Cart from "./pages/cart.jsx";
import Account from "./pages/account.jsx";
import Error from "./pages/error.jsx";
import SmartPhone from "./pages/smartphone.jsx";
import About from "./pages/about.jsx";
import Agreement from "./pages/agreement.jsx";
import Leadership from "./pages/leadership.jsx";
import Privacy from "./pages/privacy.jsx";
import Poco from "./pages/poco.jsx";
import XiaomiPro from "./pages/xiaomiPro.jsx";
import Checkout from "./pages/checkout.jsx";
import DetailPoco from "./pages/ProductDetails/Poco/index.jsx";
import RedmiList from "./pages/redmi.jsx";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./routers";

function App() {
  return (
    <>
      <DynamicThemeProvider>
        <CartProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/account" element={<Account />} />
              <Route path="/smartphone" element={<SmartPhone />} />
              <Route path="/about" element={<About />} />
              <Route path="/Agreement" element={<Agreement />} />
              <Route path="/Leadership" element={<Leadership />} />
              <Route path="/Privacy" element={<Privacy />} />
              <Route path="/Poco" element={<Poco />} />
              <Route path="/redmi" element={<RedmiList />} />
              <Route path="/xiaomi" element={<XiaomiPro />} />
              <Route path="/*" element={<Error />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/detail/:id" element={<DetailPoco />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </DynamicThemeProvider>

      {/* <DynamicThemeProvider>
        
          <Header />
          <main>
            <RouterProvider router={router} />
          </main>
          <Footer />
        </CartProvider>
      </DynamicThemeProvider> */}
    </>
  );
}

export default App;
