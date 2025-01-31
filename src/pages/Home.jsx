import React from "react";
import XiaomiBanner from "../components/molecule/Home/XiaomiBanner";
import RedmiBanner from "../components/molecule/Home/RedmiBanner";
import LatestPhone from "../components/molecule/Home/LatestProducts/LatestPhone";

const Home = () => {
  return (
    <div className="flex flex-col max-w-full bg-[#f7f7f7] gap-[15px]">
      <div id="top-banner" className="w-full flex flex-col gap-[16px]">
        <XiaomiBanner />
        <RedmiBanner />
      </div>
      <div
        id="latestproduct"
        className="max-w-full w-full flex flex-col sm:flex-row sm:space-y-[15px] lg:space-y-[0px] md:space-x-[15px]"
      >
        <LatestPhone
          title="Redmi 10 2022"
          subtitle="Harga super Hemat"
          imgmedium="//i02.appmifile.com/67_operator_id/13/06/2023/8f2a3ef42c1fdc7f22980c0e69bb876e.jpg"
          imgphone="//i02.appmifile.com/67_operator_id/13/06/2023/8f2a3ef42c1fdc7f22980c0e69bb876e.jpg"
          to1="/redmi"
          to2="/redmi"
        />
        <LatestPhone
          title="Redmi Note 12"
          subtitle="50MP triple kamera | Layar AMOLED 120Hz"
          imgmedium="//i02.appmifile.com/351_operator_id/05/05/2023/19d9489a4da7932901d5535c6bd94c4f.jpg"
          imgphone="//i02.appmifile.com/351_operator_id/05/05/2023/19d9489a4da7932901d5535c6bd94c4f.jpg"
          to1="/redmi"
          to2="/redmi"
          key={1}
        />
      </div>
    </div>
  );
};

export default Home;
