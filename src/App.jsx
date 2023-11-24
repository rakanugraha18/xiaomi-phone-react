import React from "react";
import { DynamicThemeProvider } from "./context/DynamicThemeContext";
import { CartProvider } from "./context/CartProvider";
import Header from "./components/organism/Header/Header";
import Footer from "./components/organism/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Store from "./pages/Store.jsx";
import Cart from "./pages/Cart.jsx";
import Account from "./pages/Account.jsx";
import Error from "./pages/Error.jsx";
import SmartPhone from "./pages/Smartphone.jsx";
import About from "./pages/About.jsx";
import Agreement from "./pages/Agreement.jsx";
import Leadership from "./pages/Leadership.jsx";
import Privacy from "./pages/Privacy.jsx";
import Poco from "./pages/Poco.jsx";
import XiaomiPro from "./pages/XiaomiPro.jsx";
import Checkout from "./pages/Checkout.jsx";
import DetailPoco from "./pages/ProductDetails/Poco/index.jsx";
import RedmiList from "./pages/Redmi.jsx";
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
              <Route path="/About" element={<About />} />
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
