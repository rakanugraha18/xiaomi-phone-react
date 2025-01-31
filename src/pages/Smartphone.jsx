import RedmiSection from "../components/molecule/Smartphone/RedmiSection";
import XiaomiSection from "../components/molecule/Smartphone/XiaomiSection";
import PocoSection from "../components/organism/Products/PocoSection";
import TittleProduct from "../components/atoms/HeadTitle/TitleProduct";
import CustomButton from "../components/atoms/WithCVA/CustomButton";

const SmartPhone = () => {
  return (
    <>
      <XiaomiSection />
      <RedmiSection />
      <section className="bg-[#F7F7F7] h-60 flex flex-col items-center justify-center z-0 md:gap-2 md:p-5">
        <TittleProduct
          SeriesName="Seri Poco"
          Motto="Extreme performance, extreme price"
        />
        <div className="flex justify-center items-center py-4">
          <CustomButton
            to="/Poco"
            text="Lihat semua tipe"
            order="text_first"
            icon=">"
            intent="accent_nobg"
            hover="bg_soft"
            media="mediumDark"
          />
        </div>
      </section>
      <PocoSection key={1} />
    </>
  );
};

export default SmartPhone;
