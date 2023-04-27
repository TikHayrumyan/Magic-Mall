/* eslint-disable @next/next/no-img-element */
import React, { useEffect,useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});
import styles from "../../../../styles/sass/pages/HomePage/secbestBrands/sliderBestBrands/sliderBestBrands.module.scss"

import { useGlobalProvider } from "../../../../components/Providers/GlobalProvider";
import Link from "next/link"
const settings = {
    autoplayTimeout:4000,
    autoplay: true,
    smartSpeed: 3000,
    autoplayHoverPause: true,
   
  };
const SliderBestBrands = () => {


    const {bestBrandsSlider,GetBestBrandsSlider,HOST_API_IMG,lang} = useGlobalProvider()
    const [forLanguage,SetForLanguage] = useState(lang)
    useEffect(() => {
        GetBestBrandsSlider()
    },[GetBestBrandsSlider])
    useEffect(() => {
        // console.log(HOST_API_IMG+bestBrandsSlider.data[1].secondImage,"asas");
    },[bestBrandsSlider.loading])
    useEffect(() => {
        SetForLanguage(lang)
    },[lang])
         
    
    return(
        bestBrandsSlider.loading && <div className={styles.sliderBestBrands}>
            <OwlCarousel {...settings} className="owl-carousel owl-theme owl-bestBrands" items={1} margin={10} loop navText={ [`<img src='/img/homePage/sectionBestBrands/slider/navPrev.svg' alt='' />`,`<img src='/img/homePage/sectionBestBrands/slider/navNext.svg' alt='' />`]} nav dots>
            {
                bestBrandsSlider.loading && bestBrandsSlider.data.map(({id,firstImage,secondImage,thirthImage,title,title_am,title_ru,secondTitle,secondTitle_am,secondTitle_ru,thirthTitle,thirthTitle_am,thirthTitle_ru,link,link_am,link_ru,secondLink,secondLink_am,secondLink_ru,thirthLink,thirthLink_am,thirthLink_ru}) => {

                    return(
                        <div className={styles.itemsBlock} key={id}>
                            <div className={styles.itemOne} style={{backgroundImage:`url(${HOST_API_IMG+firstImage})`}}>
                               {link && <Link href={lang == "en" ? link : lang == "ru" ? link_ru : link_am}>
                                    <a>
                                        <div className={styles.nameBlock} style={{backgroundImage:`url(/img/homePage/sectionBestBrands/slider/nameBlock.svg)`}}>
                                            <div className={styles.nameBlockTitle}>{lang == "en" ? title : lang == "ru" ? title_ru : title_am}</div>
                                            <div className={styles.arrRight}><img alt="arrow" src="/img/homePage/sectionBestBrands/slider/arrRight.svg"/></div>
                                        </div>
                                    </a>
                                </Link>}
                            </div>
                            <div className={styles.items}>
                                <div className={styles.itemTwo} style={{backgroundImage:`url(${HOST_API_IMG+secondImage})`}}>
                                {link && <Link href={lang == "en" ? secondLink : lang == "ru" ? secondLink_ru : secondLink_am}><a>
                                    <div className={styles.NameBlock} style={{backgroundImage:`url(/img/homePage/sectionBestBrands/slider/miniNameBlock.svg)`}}>
                                    <div className={styles.nameBlockTitleTwo}>{lang == "en" ? secondTitle : lang == "ru" ? secondTitle_ru : secondTitle_am}</div>
                                        <div className={styles.arrRight}><img alt="arrow" src="/img/homePage/sectionBestBrands/slider/arrRight.svg"/></div>
                                    </div>
                                    </a>
                                </Link>}
                                </div>
                                <div className={styles.itemThree}  style={{backgroundImage:`url(${HOST_API_IMG+thirthImage})`}}>
                                {link && <Link href={lang == "en" ? thirthLink : lang == "ru" ? thirthLink_ru : thirthLink_am}><a>
                                    <div className={styles.NameBlock} style={{backgroundImage:`url(/img/homePage/sectionBestBrands/slider/miniNameBlock.svg)`}}>
                                    <div className={styles.nameBlockTitleThree}>{lang == "en" ? thirthTitle : lang == "ru" ? thirthTitle_ru : thirthTitle_am}</div>
                                        <div className={styles.arrRight}><img alt="arrow" src="/img/homePage/sectionBestBrands/slider/arrRight.svg"/></div>
                                    </div>
                                    </a>
                                </Link>}
                                </div>
                            </div>
                        </div>
                        
                    )
                })
            }
            
            </OwlCarousel>
        </div>
    )
}

export default SliderBestBrands