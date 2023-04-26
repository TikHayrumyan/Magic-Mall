/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useReducer, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});
import styles from "../../styles/sass/pages/HomePage/mainSliderHomePage.module.scss"
import navPrev from "../../public/img/homePage/sectionMainSlider/nav-prev.svg"
import navNext from "../../public/img/homePage/sectionMainSlider/nav-next.svg"
import { useGlobalProvider } from "../../components/Providers/GlobalProvider";
import Link from "next/link";
import { translate } from "../../translations";
import { useRouter } from "next/router";
const settings = {
    autoplayTimeout:4000,
    autoplay: true,
    smartSpeed: 1500,
    center:true
  };
  
const MainSlider = () => {
    const {GetMainSlider,mainSliderData,HOST_API_IMG,lang} = useGlobalProvider()
    const [forLanguage,SetForLanguage] = useState(lang)
   
    useEffect(() => {
        GetMainSlider()
    },[GetMainSlider])
    
    useEffect(() => {
        
    },[mainSliderData.loading])
    useEffect(() => {
        SetForLanguage(lang)
    },[lang])
         
    return(mainSliderData.loading && <OwlCarousel {...settings} className='owl-theme home-owl' items={1} loop  margin={0} navText={ [`<img src='${navPrev.src}'>`,`<img src='${navNext.src}'>`]} nav >
        {
            mainSliderData.loading && mainSliderData.data?.map(({id,image,image_am,image_ru,title,title_am,title_ru,description,description_am,description_ru,link,link_am,link_ru}) => {
                
                return(
                    <div key={id}  className={styles.itemOne}><div className={styles.gradient}></div>
                        <img alt="" className={styles.backgroundImage} src={lang == "en" ? HOST_API_IMG+image : lang == "ru" ? HOST_API_IMG+image_ru : HOST_API_IMG+image_am}/>
                        <div className={styles.blockData}>
                            <h2 className={styles.title}>{lang == "en" ? title : lang == "ru" ? title_ru : title_am}</h2>
                            <p className={styles.info}>{lang == "en" ? description : lang == "ru" ? description_ru : description_am}</p>
                           {link && link_ru && link_am && <Link href={lang == "en" ? link : lang == "ru" ? link_ru : link_am}>
                            <button className={styles.button}>{translate.buttonSeeMore[lang]}</button>
                            </Link>}
                        </div>
                    </div>
                )
            })
        }
        
           </OwlCarousel>
    )
    
}

export default MainSlider