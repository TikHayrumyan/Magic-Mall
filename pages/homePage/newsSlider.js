/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});
import styles from "../../styles/sass/pages/HomePage/secNews/newsSlider.module.scss"
import { useGlobalProvider } from "../../components/Providers/GlobalProvider";
import Link from "next/link";

const settings = {
    autoplayTimeout:4000,
    autoplay: true,
    smartSpeed: 3000,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive: {
        0 : {
            items : 1,
            nav: false,
            dots: true,
        },
        600 : {
            items : 1,  
            nav : false,
            dots: true,

        },
        1000 : {
            items : 2
        }
    }
  };



const NewsSlider = () =>{

    const {GetSpecialOffersSliderData,
        specialOffersSliderData,
        HOST_API_IMG,lang
        } = useGlobalProvider()

    useEffect(() => {
        GetSpecialOffersSliderData()
    },[GetSpecialOffersSliderData])
    useEffect(() => {
        
    },[specialOffersSliderData.loading])

    

        return(
            <>
            {specialOffersSliderData.loading && <div className={styles.newsSlider}>
                <div className={styles.container}>
                <OwlCarousel {...settings} className=".owl-carousel owl-theme owl-newsSlider" nav dots={false} items={2} margin={4} loop navText={ [`<img src='/img/homePage/sectionBestBrands/slider/navPrev.svg' alt='' />`,`<img src='/img/homePage/sectionBestBrands/slider/navNext.svg' alt='' />`]}>
                    {
                        specialOffersSliderData.data.map(({id,image,image_am,image_ru,logo,title,title_am,title_ru,link,link_am,link_ru}) => {
                           return <Link  key={id} href={lang == "en" ? link : lang == "ru" ? link_ru : link_am}>
                                <div className={styles.item}>
                                    <div className={styles.background} style={{backgroundImage:`url(${lang == "en" ? HOST_API_IMG+image : lang == "ru" ? HOST_API_IMG+image_ru : HOST_API_IMG+image_am})`}}>
                                        <div className={styles.logoBlock}>
                                            <div><img className={styles.logo} alt="logo" src={HOST_API_IMG+logo}/></div>
                                            <div className={styles.BrandName}>{lang == "en" ? title : lang == "ru" ? title_ru : title_am}</div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                        })
                    }
                </OwlCarousel>
                </div>
        </div>}
        </>)
}



export default NewsSlider