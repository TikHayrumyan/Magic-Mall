/* eslint-disable @next/next/no-img-element */
// import MainSlider from "./MainSliderHomePage";
import { useGlobalProvider } from "../components/Providers/GlobalProvider";
import { translate } from "../translations";
import dynamic from "next/dynamic";
import Link from "next/link";
import BlogSLider from './homePage/BlogSlider'
import NewsSlider from "./homePage/newsSlider"
import CardSubscribe from "./homePage/CardSubscribe";
import SliderBestBrands from "./homePage/SliderBestBrands"

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





import React, { useEffect, useState } from "react";


import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
import stylesMainSliderHomePage from "../styles/sass/pages/HomePage/mainSliderHomePage.module.scss"
import stylesBrandsSlide from "../styles/sass/pages/HomePage/sectionBrandsSlide/BrandsSlide.module.scss"
import stylesBestBrands from "../styles/sass/pages/HomePage/secbestBrands/bestBrands.module.scss"
import stylesYourInterest from "../styles/sass/pages/HomePage/secYourInterest/yourInterest.module.scss"
import stylesBlog from '../styles/sass/pages/HomePage/secBlog/blog.module.scss'
import stylesGiftCard from "../styles/sass/pages/HomePage/secGiftCard/giftCard.module.scss"
import stylesNews from "../styles/sass/pages/HomePage/secNews/news.module.scss"





import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const HomePage = ({ mainSliderData, brandsSliderData, interestedData, giftCardHomePageData }) => {
  const { HOST_API_IMG, lang } = useGlobalProvider()

  const [forLanguage, SetForLanguage] = useState(lang)
  useEffect(() => {
    SetForLanguage(lang)
  }, [lang])

  function shorten(text, maxLength) {
    var ret = text;
    if (ret?.length > maxLength) {
      ret = ret.substr(0, maxLength);
    }
    return ret;
  }
  const parse = require("html-react-parser")


  return (
    <div>
      {/* <MainSlider/> */}
      {mainSliderData?.loading && <OwlCarousel {...settingsMain} className='owl-theme home-owl' items={1} loop margin={0} navText={[`<img src='/img/homePage/sectionMainSlider/nav-prev.svg' alt='' />`, `<img src='/img/homePage/sectionMainSlider/nav-next.svg' alt='' />`]} nav >
        {mainSliderData?.loading && mainSliderData?.data?.map(({ id, image, image_am, image_ru, title, title_am, title_ru, description, description_am, description_ru, link, link_am, link_ru }) => {

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
            {brandsSliderData?.loading && brandsSliderData.data?.map(({ id, image, link }) => {
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

      {/* <YourInterest /> */}
      <div className={stylesYourInterest.yourInterest}>
        <div className={stylesYourInterest.container}>
          <div className={stylesYourInterest.question}>{translate.YourInterestTitle[lang]}</div>
          {interestedData?.loading &&
            <>
              <div className={stylesYourInterest.secondBlock}>
                <Link href={interestedData.data[2].link}>
                  <div className={stylesYourInterest.thirdPic} style={{ backgroundImage: `url(${HOST_API_IMG + interestedData.data[2].image})` }}>
                    <span className={stylesYourInterest.title}>{lang == "en" ? interestedData.data[2].title : lang == "ru" ? interestedData.data[2].title_ru : interestedData.data[2].title_am}
                    </span>
                  </div>
                </Link>
                <Link href={interestedData.data[3].link}>
                  <div className={stylesYourInterest.fourPic} style={{ backgroundImage: `url(${HOST_API_IMG + interestedData.data[3].image})` }}>
                    <span className={stylesYourInterest.title}>{lang == "en" ? interestedData.data[3].title : lang == "ru" ? interestedData.data[3].title_ru : interestedData.data[3].title_am}
                    </span>
                  </div>
                </Link>
              </div>
              <div className={stylesYourInterest.thirdBlock}>
                <div className={stylesYourInterest.fiveAndSixBlock}>
                  <Link href={interestedData.data[4].link}>
                    <div className={stylesYourInterest.fivePic} style={{ backgroundImage: `url(${HOST_API_IMG + interestedData.data[4].image})` }}>
                      <span className={stylesYourInterest.title}>{lang == "en" ? interestedData.data[4].title : lang == "ru" ? interestedData.data[4].title_ru : interestedData.data[4].title_am}
                      </span>
                    </div>
                  </Link>
                  <Link href={interestedData.data[5].link}>
                    <div className={stylesYourInterest.sixPic} style={{ backgroundImage: `url(${HOST_API_IMG + interestedData.data[5].image})` }}>
                      <span className={stylesYourInterest.title}>{lang == "en" ? interestedData.data[5].title : lang == "ru" ? interestedData.data[5].title_ru : interestedData.data[5].title_am}
                      </span>
                    </div>
                  </Link>
                </div>
                <Link href={interestedData.data[6].link}>

                  <div className={stylesYourInterest.sevenPic} style={{ backgroundImage: `url(${HOST_API_IMG + interestedData.data[6].image})` }}><span className={stylesYourInterest.title}>{lang == "en" ? interestedData.data[6].title : lang == "ru" ? interestedData.data[6].title_ru : interestedData.data[6].title_am}</span></div>

                </Link>
              </div>
            </>
          }
        </div>
      </div>

      {/* <Blog /> */}
      <div className={stylesBlog.blog}>
        <div className={stylesBlog.container}>
          <div className={stylesBlog.titleBlock}>
            <div className={stylesBlog.patternTitle}><img alt='pattern' src="/img/homePage/secBlog/firstPattern.svg" /></div>
            <div className={stylesBlog.title}>{translate.BlogAndNews[lang]}</div>
            <div className={stylesBlog.backPattern}><img alt='pattern' src="/img/homePage/secBlog/secondPattern.png" height={900} /></div>
          </div>
          <BlogSLider />
        </div>
      </div>

      {/* <GiftCard /> */}
      {giftCardHomePageData?.loading && <div className={stylesGiftCard.giftCard}>
        <div className={stylesGiftCard.container}>
          <Link href="/giftCardPage">
            <div className={stylesGiftCard.hoverBlockMobile}>
              <div className={stylesGiftCard.mobileButton}>{translate.buttonSeeMore[lang]}</div>
              <div className={stylesGiftCard.buttonIconMobile}><img alt="arrRight" src="/img/homePage/secBlog/arrRight.svg" /></div>
            </div>
          </Link>
          <div className={stylesGiftCard.pattern}><Image alt="pattern" src="/img/homePage/secBlog/secondPattern.png" width={941} height={750} /></div>
          <div className={stylesGiftCard.giftCardImg}><Image alt="giftCard" src="/img/homePage/secGiftCard/giftCardImgNew.png" width={641} height={748} /></div>
          <div className={stylesGiftCard.aboutBlock}>
            <div className={stylesGiftCard.titleBlock}>
              <h2 className={stylesGiftCard.title}>{translate.headerMenuGiftCard[lang]}</h2>
              <div className={stylesGiftCard.secondPattern}><img alt="pattern" src="/img/homePage/secBlog/firstPattern.svg" /></div>
            </div>
            {<div className={stylesGiftCard.descrip}>{parse(lang == "en" ? shorten(giftCardHomePageData.data.content, 425) : lang == "am" ? shorten(giftCardHomePageData.data.content_am, 390) : shorten(giftCardHomePageData.data.content_ru, 390))}</div>}
            <Link href="/giftCardPage">

              <div className={stylesGiftCard.hoverBlock}>
                <button className={stylesGiftCard.button}>{translate.buttonSeeMore[lang]}</button>
                <div className={stylesGiftCard.buttonIcon}><img alt="arrRight" src="/img/homePage/secBlog/arrRight.svg" /></div>
              </div>
            </Link>
          </div>
        </div>
      </div>}
      {/* <FirstOutletMall/> */}
      {/* <News /> */}
      <div className={stylesNews.news}>
        <div className={stylesNews.container}>
          <div className={stylesNews.titleBlock}>
            <div className={stylesNews.pattern}><img alt="pattern" src="/img/homePage/secBlog/firstPattern.svg" /></div>
            <div className={stylesNews.title}>{translate.headerMenuSpecialOffers[lang]}</div>
          </div>
          <NewsSlider />
        </div>
      </div>

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
  const interestedFetch = await fetch("https://apimall.weflex.am/api/interested")
  const interested = await interestedFetch.json();
  // console.log('interested: ', interested);
  const homeGiftCardFetch = await fetch("https://apimall.weflex.am/api/home/giftCard")
  const homeGiftCard = await homeGiftCardFetch.json();
  // console.log('homeGiftCard: ', homeGiftCard);

  return {
    props: {
      mainSliderData: {
        data: slider,
        loading: true
      },
      brandsSliderData: {
        data: sliderLogo,
        loading: true
      },
      interestedData: {
        data: interested,
        loading: true
      },
      giftCardHomePageData: {
        data: homeGiftCard,
        loading: true
      },
    }
  }
}


export default HomePage