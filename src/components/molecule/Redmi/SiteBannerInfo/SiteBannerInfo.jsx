import React from "react";
import "./SiteBannerInfo.css";

import BannerButton from "../../../atoms/BannerButton/BannerButton";
import BannerTitle from "../../../atoms/BannerTitle/BannerTitle";
import BannerSubtitle from "../../../atoms/BannerSubtitle/BannerSubtitle";
import BannerPrice from "../../../atoms/BannerPrice/BannerPrice";
// import BannerButton from "../../Elements/BannerButton/BannerButton";
// import BannerTitle from "../../Elements/BannerTitle/BannerTitle";
// import BannerSubtitle from "../../Elements/BannerSubtitle/BannerSubtitle";
// import BannerPrice from "../../Elements/BannerPrice/BannerPrice";

const SiteBannerInfo = (props) => {
  const { Title, SubtitleUp, SubtitleBottom, BPbefore, BPafter, urlBS, urlLM } =
    props;
  return (
    <div>
      <div className="site-banner__info">
        <BannerTitle Images={Title} />
        <BannerSubtitle UpperText={SubtitleUp} BottomText={SubtitleBottom} />
        <BannerPrice PriceBefore={BPbefore} PriceAfter={BPafter} />
        <BannerButton urlBeliSekarang={urlBS} urlLearnMore={urlLM} />
      </div>
    </div>
  );
};

export default SiteBannerInfo;
