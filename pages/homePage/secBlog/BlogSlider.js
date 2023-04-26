/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});
import styles from "../../../styles/sass/pages/HomePage/secBlog/blogSlider.module.scss"

import calendarIcon from "../../../public/img/homePage/secBlog/calendarIcon.svg"
import arrRight from  "../../../public/img/homePage/secBlog/arrRight.svg"
import Image from "next/image";
import navPrev from "../../../public/img/homePage/sectionBestBrands/slider/navPrev.svg"
import navNext from "../../../public/img/homePage/sectionBestBrands/slider/navNext.svg"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider";
import Link from "next/link";
import { translate } from "../../../translations";
const settings = {
    autoplayTimeout:4000,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive : {
        0 : {
            items : 1,
            nav: false,
            dots: true
        },
        600 : {
            items : 1,  
            nav : false,
            dots: true
        },
        1000 : {
            items : 3
        }
    }
  };
const BlogSLider = () => {


    const {GetBlogSliderData,blogSliderData,HOST_API_IMG,lang} = useGlobalProvider()
    const [forLanguage,SetForLanguage] = useState(lang)

    useEffect(() => {
        GetBlogSliderData()
    },[])

    useEffect(() => {

    },[blogSliderData.loading])

    useEffect(() => {
        SetForLanguage(lang)
    },[lang])
// text ellipsis for few lines 
    function shorten(text, maxLength) {
        var ret = text;
        if (ret?.length > maxLength) {
            ret = ret.substr(0,maxLength) + "...";
        }
        return ret;
    }

    return(<>
        {blogSliderData.loading && <div  className={styles.blogSLider}>
            <div className={styles.container}>
                <OwlCarousel {...settings} className="owl-theme owl-blogSlider" nav dots={false} items={3} margin={10} loop navSpeed={1500} navText={ [`<img src='${navPrev.src}'>`,`<img src='${navNext.src}'>`]}>
                    
                    {
                        blogSliderData.data?.map(({id,title,thumbnail,date,type,title_am,title_ru}) => {
                           return <>

                          <Link key={id}  href={type == "blog" ? `/singleBlogPage/${id}` : `/newsSinglePage/${id}`} >
                                    <div className={styles.slide}>
                                        <img className={styles.img} alt="img" src={HOST_API_IMG+thumbnail} />
                                        <p className={styles.description}>{lang == "en" ? shorten(title,60) : lang == "ru" ? shorten(title_ru,65) : shorten(title_am,60)}</p>
                                        <div className={styles.dateBlock}>
                                            <div className={styles.calendarIcon}><Image alt="iconCalendar" src={calendarIcon}/></div>
                                            <span className={styles.date}>{date}</span>
                                        </div>
                                        <div className={styles.hoverBlock}>
                                            <button className={styles.button}>{translate.buttonRead[lang]}</button>
                                            <div className={styles.buttonIcon}><Image alt="arrRight" src={arrRight} width={40}/></div>
                                        </div>
                                    </div>
                            </Link>
                                    </>
                        })
                    }
                    
                </OwlCarousel>
            </div>
        </div>}
        </>
    )
}


export default BlogSLider