import React from "react";
import MainSlider from "./MainSliderHomePage";
import BrandsSlide from "./sectionBrandsSlide/BrandsSlide";
import BestBrands from "./secBestBrands/BestBrands";
import YourInterest from "./secYourInterest/YourInterest";
import Blog from "./secBlog/Blog";
import GiftCard from "./secGiftCard/GiftCard";
import FirstOutletMall from "./secFirstOutletMall/FirstOutletMall";
import News from "./secNews/news";
import CardSubscribe from "./secCardSubscribe/CardSubscribe";

const HomePage = () => {
    

    return(<div>
        <MainSlider/>  
        <BrandsSlide/> 
        <BestBrands/> 
        <YourInterest/>
        <Blog/>  
        <GiftCard/>
        {/* <FirstOutletMall/> */}
        <News/>
        <CardSubscribe/>
     </div>
    )
}


export default HomePage