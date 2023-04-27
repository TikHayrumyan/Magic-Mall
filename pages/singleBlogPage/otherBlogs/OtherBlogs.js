/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/singleBlogPage/otherBlogs/otherBlogs.module.scss"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import Link from "next/link"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { translate } from "../../../translations"
const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});
const settings = {
    autoplayTimeout:3000,
    autoplay: true,
    smartSpeed: 2000,
    dots: true,
    items: 1,
  };


const OtherBlogs = ({related,loading}) => {

    const {HOST_API_IMG,lang} = useGlobalProvider()

    
    function shorten(text, maxLength) {
        var ret = text;
        if (ret?.length > maxLength) {
            ret = ret.substr(0,maxLength) + "...";
        }
        return ret;
    }



    return(
        <>
        <div className={styles.OtherBlogs}>
        {
         related?.length ? <div className={styles.container}>
                <div className={styles.title}>{translate.otherBlogs[lang]}</div>
                <div className={styles.blogContainer}>
                {
                    related.map(({id,thumbnail,title,title_am,title_ru,date}) => {

                        return(
                            <Link key={id}  href={`/singleBlogPage/${id}`}><a>
                            <div className={styles.blogs}>
                                <div><img className={styles.img} alt="blogImg" src={HOST_API_IMG+thumbnail}/></div>
                                <div className={styles.description}>{lang == "en" ? shorten(title,79) : lang == "ru" ? shorten(title_ru,79) : shorten(title_am,79)}</div>
                                <div className={styles.dateBlock}>
                                    <div><img alt="calendarIcon" src="/img/singleBlogPage/otherBlogs/calendarIcon.svg"/></div>
                                    <div className={styles.date}>{date}</div>
                                </div>
                                <div className={styles.btnBlock}>
                                        <button className={styles.button}>{translate.buttonRead[lang]}</button>
                                        <div className={styles.arrow}><img alt="arrow" src="/img/singleBlogPage/otherBlogs/arrow.svg"/></div>
                                </div>
                            </div>  
                            </a></Link>
                        )
                    })
                }
                </div>
                <div className={styles.mobileContainer}>
                <OwlCarousel {...settings} className="owl-theme owl-specialOfferMobileBlogSingle" nav={false} dots  loop margin={10}>

                    {
                         related?.map(({id,title,thumbnail,date}) => {

                            return(
                                <Link key={id}  href={`/singleBlogPage/${id}`}><a>
                                <div className={styles.blogsMobile}>
                                    <div><img className={styles.imgMobile} alt="blogImg" src={HOST_API_IMG+thumbnail}/></div>
                                    <div className={styles.descriptionMobile}>{title}</div>
                                    <div className={styles.dateBlockMobile}>
                                        <div><img alt="calendarIcon" src="/img/singleBlogPage/otherBlogs/calendarIcon.svg"/></div>
                                        <div className={styles.dateMobile}>{date}</div>
                                    </div>
                                    <div className={styles.btnBlockMobile}>
                                            <button className={styles.buttonMobile}>{translate.buttonRead[lang]}</button>
                                            <div className={styles.arrowMobile}><img alt="arrow" src="/img/singleBlogPage/otherBlogs/arrow.svg"/></div>
                                    </div>
                                </div>  
                                </a></Link>
                            )
                        })
                    }
                </OwlCarousel>
            </div>
            </div> : null
        }
        </div>
        </>
    )
}



export default OtherBlogs