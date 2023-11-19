import BannerSeeAll from "../../Atoms/BannerSeeAll";
import LongCardRight from "../../Atoms/LongCardRight";

const RedmiSection = () => {
    return (
        <>
            <BannerSeeAll SeriesName="Seri Redmi" Motto="Hape Jawara" />
            <LongCardRight Title="Redmi Note" Specs="50 Triple Kamera | Layar AMOLED 120Hz" StartingPrice="2.099.000" PreviousPrice="6.599.000" PhonePicMobile="/public/smartphone/4mobile.webp" PhonePicDesktop="/public/smartphone/2desktop.webp"></LongCardRight>
            <LongCardRight Title="Redmi Note" Title2=" Pro" StartingPrice="2.099.000" PreviousPrice="6.599.000" PhonePicMobile="/public/smartphone/5mobile.webp" PhonePicDesktop="/public/smartphone/3desktop.webp"></LongCardRight>
            <LongCardRight Title="Redmi Note" Title2=" Pro" Title3="5G" classname="border-2 border-black rounded-lg px-2" StartingPrice="2.099.000" PreviousPrice="6.599.000" PhonePicMobile="/public/smartphone/6mobile.webp" PhonePicDesktop="/public/smartphone/4desktop.webp"></LongCardRight>
        </>
    );
};

export default RedmiSection;
