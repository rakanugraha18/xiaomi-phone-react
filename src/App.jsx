import React from "react";
import { DynamicThemeProvider } from "./context/DynamicThemeContext";
import { CartProvider } from "./context/CartProvider";
import Header from "./components/organism/Header/Header";
import Footer from "./components/organism/Footer";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
  return (
    <>
      <DynamicThemeProvider>
        <CartProvider>
          <Header />
          <main>
            <RouterProvider router={router} />
          </main>
          <Footer />
        </CartProvider>
      </DynamicThemeProvider>
    </>
  );
}

export default App;
