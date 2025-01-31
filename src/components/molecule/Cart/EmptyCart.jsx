import React from "react";
import CustomButton from "../../atoms/WithCVA/CustomButton";
const EmptyCart = () => {
  return (
    <div id="cart-empty" className="w-full max-w-full bg-[#f3f4f6]">
      <section className="w-full h-full flex flex-col p-20 items-center">
        <img
          className="cart-empty-section__image"
          alt="Keranjang Anda kosong."
          src="//i01.appmifile.com/webfile/globalimg/i18n_frontend/cart/cart-empty.svg"
        />
        <p className="text-[#b0b0b0] text-[20px] leading-[24px] mt-[26px]">
          Keranjang Anda kosong.
        </p>

        <div className="hidden lg:block py-4">
          <CustomButton
            to="/store"
            text="Belanja sekarang"
            intent="accent_bg"
            icon=">"
            order="textFirst"
          />
        </div>

        <div className="block lg:hidden py-4">
          <CustomButton
            to="/store"
            text="Belanja sekarang"
            intent="accent_nobg"
            icon=">"
            order="textFirst"
          />
        </div>
      </section>
    </div>
  );
};

export default EmptyCart;
