/* eslint-disable @next/next/no-img-element */
// import MainSlider from "./MainSliderHomePage";
import { useGlobalProvider } from "../../components/Providers/GlobalProvider";
import { translate } from "../../translations";
import dynamic from "next/dynamic";
import Link from "next/link";

const settingsMain = {
    autoplayTimeout: 4000,
    autoplay: true,
    smartSpeed: 1500,
    center: true
};

const settingsBrand = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1270,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                dots: false,
                infinite: true,
                speed: 1000,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                dots: false,
                infinite: true,
                speed: 1000,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                speed: 1000,
                centerMode: true,
                centerPadding: "99px"
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                speed: 1000,
                centerMode: true,
                centerPadding: "79px"
            }
        }
    ]

};

import YourInterest from "./secYourInterest/YourInterest";
import Blog from "./secBlog/Blog";
import GiftCard from "./secGiftCard/GiftCard";
import News from "./secNews/news";
import CardSubscribe from "./secCardSubscribe/CardSubscribe";


import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
import stylesMainSliderHomePage from "../../styles/sass/pages/HomePage/mainSliderHomePage.module.scss"
import stylesBrandsSlide from "../../styles/sass/pages/HomePage/sectionBrandsSlide/BrandsSlide.module.scss"
import stylesBestBrands from "../../styles/sass/pages/HomePage/secbestBrands/bestBrands.module.scss"



import SliderBestBrands from "./SliderBestBrands"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = ({ mainSliderData, brandsSliderData }) => {
    const { HOST_API_IMG, lang } = useGlobalProvider()

    const [forLanguage, SetForLanguage] = useState(lang)
    useEffect(() => {
        SetForLanguage(lang)
    }, [lang])


    return (
        <div>
            {/* <MainSlider/> */}
            {mainSliderData.loading && <OwlCarousel {...settingsMain} className='owl-theme home-owl' items={1} loop margin={0} navText={[`<img src='/img/homePage/sectionMainSlider/nav-prev.svg' alt='' />`, `<img src='/img/homePage/sectionMainSlider/nav-next.svg' alt='' />`]} nav >
                {mainSliderData.loading && mainSliderData.data?.map(({ id, image, image_am, image_ru, title, title_am, title_ru, description, description_am, description_ru, link, link_am, link_ru }) => {

                    return (
                        <div key={id} className={stylesMainSliderHomePage.itemOne}><div className={stylesMainSliderHomePage.gradient}></div>
                            <img alt="" className={stylesMainSliderHomePage.backgroundImage} src={lang == "en" ? HOST_API_IMG + image : lang == "ru" ? HOST_API_IMG + image_ru : HOST_API_IMG + image_am} />
                            <div className={stylesMainSliderHomePage.blockData}>
                                <h2 className={stylesMainSliderHomePage.title}>{lang == "en" ? title : lang == "ru" ? title_ru : title_am}</h2>
                                <p className={stylesMainSliderHomePage.info}>{lang == "en" ? description : lang == "ru" ? description_ru : description_am}</p>
                                {link && link_ru && link_am && <Link href={lang == "en" ? link : lang == "ru" ? link_ru : link_am}>
                                    <button className={stylesMainSliderHomePage.button}>{translate.buttonSeeMore[lang]}</button>
                                </Link>}
                            </div>
                        </div>
                    )
                })
                }
            </OwlCarousel>}

            {/* <BrandsSlide /> */}
            <div className={stylesBrandsSlide.brandsSlide}>
                <div className={stylesBrandsSlide.sliderContainer}>
                    <Slider {...settingsBrand}>
                        {brandsSliderData.loading && brandsSliderData.data?.map(({ id, image, link }) => {
                            return (
                                <Link href={link} key={id}>
                                    <div className="itemOne">
                                        <img className={stylesBrandsSlide.brandImg} alt="brandImg" src={HOST_API_IMG + image} />
                                    </div>
                                </Link>

                            )
                        })}
                    </Slider>
                </div>
            </div>

            {/* <BestBrands /> */}
            <div className={stylesBestBrands.bestBrands}>
                <div className={stylesBestBrands.container}>
                    <div className={stylesBestBrands.descAndPatter}>
                        <div className={stylesBestBrands.pattern}><img alt="pattern" src="/img/homePage/sectionBestBrands/pattern.svg" /></div>
                        <div className={stylesBestBrands.descBlock}>
                            <div className={stylesBestBrands.descBlockTitle}>{translate.homeBestBrandsTitle[lang]}</div>
                            <p>{translate.homeBestBrandsDescription[lang]}</p>
                        </div>
                    </div>
                    <div className={stylesBestBrands.descAndPatterMobile}>
                        <div className={stylesBestBrands.patternAndTitleMobile}>
                            <div className={stylesBestBrands.patternMobile}><img alt="pattern" src="/img/homePage/sectionBestBrands/pattern.svg" /></div>
                            <div className={stylesBestBrands.mobileTitle}>{translate.homeBestBrandsTitle[lang]}</div>
                        </div>
                        <p className={stylesBestBrands.descBlockMobile}>{translate.homeBestBrandsDescription[lang]}</p>
                    </div>
                    <SliderBestBrands />
                </div>
            </div>

            <YourInterest />
            <Blog />
            <GiftCard />
            {/* <FirstOutletMall/> */}
            <News />
            <CardSubscribe />
        </div>
    )
}

export async function getStaticProps(ctx) {
    const sliderFetch = await fetch("https://apimall.weflex.am/api/slider")
    const slider = await sliderFetch.json();
    // console.log('slider: ', slider);

    const sliderLogoFetch = await fetch("https://apimall.weflex.am/api/slider/logo")
    const sliderLogo = await sliderLogoFetch.json();
    // console.log('sliderLogo: ', sliderLogo);

    return {
        props: {
            mainSliderData: {
                data: slider,
                loading: true
            },
            brandsSliderData: {
                data: sliderLogo,
                loading: true
            }
        }
    }
}


export default HomePage