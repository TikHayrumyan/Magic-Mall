/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import styles from "../../../styles/sass/pages/newsSinglePage/otherNews/otherNews.module.scss"
import calendar from "../../../public/img/newsSinglePage/otherNews/calendar.svg"
import arrow from "../../../public/img/newsSinglePage/otherNews/arrow.svg"
import leftPattern from "../../../public/img/newsSinglePage/otherNews/leftPattern.svg"
import rightPattern from "../../../public/img/newsSinglePage/otherNews/rightPattern.svg"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Link from "next/link"
import { translate } from "../../../translations"
const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});
const settings = {
    autoplayTimeout:3000,
    autoplay: true,
    smartSpeed: 2000,
    dots: true,
    items: 1,
  };

const OtherNews = ({related,loading}) => {

    const {HOST_API_IMG,lang} = useGlobalProvider()


    return(<>
        {loading && related && <div className={styles.OtherNews}>
                <div className={styles.container}>
                    <div className={styles.titleBlock}>
                        <div className={styles.title}>{translate.otherNews[lang]}</div>
                    </div>
                    <div className={styles.fixedNewsBlock}>
                        <div className={styles.fixedNewsContainer}>
                            { 
                                related?.map(({id,title,title_am,title_ru,thumbnail,date}) => {

                                    return(<Link key={id} href={`/newsSinglePage/${id}`}><a>
                                    <div>
                                        <div className={styles.Block}>
                                            <div><img className={styles.shop} alt="background" src={HOST_API_IMG+thumbnail} /></div>
                                            <div className={styles.forPattern}>
                                                <div className={styles.bottomBlock}>
                                                    <div className={styles.descrip}>{lang == "en" ? title : lang == "ru" ? title_ru : title_am} </div>
                                                    <div className={styles.dateBlock}>
                                                        <div className={styles.calendar}><Image alt="calendar" src={calendar}/></div>
                                                        <div className={styles.date}>{date}</div>
                                                    </div>
                                                    <div className={styles.btnBlock}>
                                                        <button className={styles.button}>{translate.buttonSeeMore[lang]}</button>
                                                        <div className={styles.arrow}><Image alt="arrow" src={arrow}/></div>
                                                    </div>
                                                    <div className={styles.leftPattern}><Image alt="leftPattern" src={leftPattern}/></div>
                                                    <div className={styles.rightPattern}><Image alt="rightPattern" src={rightPattern}/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </a></Link>)
                                })
                            
                            }
                        </div>  
                    </div>
                    <div className={styles.mobileContainer}>
                <OwlCarousel {...settings} className="owl-theme owl-specialOfferMobileNewsSingle" nav={false} dots  loop margin={0}>
                    {
                         related?.map(({id,title,title_am,title_ru,thumbnail,date}) => {

                            return(<Link key={id} href={`/newsSinglePage/${id}`}><a>
                            <div>
                                <div className={styles.BlockMobile}>
                                    <div><img className={styles.shopMobile} alt="background" src={HOST_API_IMG+thumbnail} /></div>
                                    <div className={styles.forPatternMobile}>
                                        <div className={styles.bottomBlockMobile}>
                                            <div className={styles.descripMobile}>{lang == "en" ? title : lang == "ru" ? title_ru : title_am} </div>
                                            <div className={styles.dateBlockMobile}>
                                                <div className={styles.calendarMobile}><Image alt="calendar" src={calendar}/></div>
                                                <div className={styles.dateMobile}>{date}</div>
                                            </div>
                                            <div className={styles.btnBlockMobile}>
                                                <button className={styles.buttonMobile}>{translate.buttonSeeMore[lang]}</button>
                                                <div className={styles.arrowMobile}><Image alt="arrow" src={arrow}/></div>
                                            </div>
                                            <div className={styles.leftPatternMobile}><Image alt="leftPattern" src={leftPattern}/></div>
                                            <div className={styles.rightPatternMobile}><Image alt="rightPattern" src={rightPattern}/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </a>
                            </Link>)
                        })
                    }
                </OwlCarousel>
            </div>
                </div>
        </div>}
        </>)
}


export default OtherNews