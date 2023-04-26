/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/NewsPage/discounts/discounts.module.scss"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import Link from "next/link"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});
const settings = {
    autoplayTimeout:4000,
    autoplay: true,
    smartSpeed: 3000,
    dots: true,
    items: 1,
  };



const Discounts = ({specialOffers}) => {
    
    const {HOST_API_IMG,lang} = useGlobalProvider()
    

    return(
        <div className={styles.discounts}>
            <div className={styles.container}>
                    <div className={styles.discountsBlock}>
                    {specialOffers?.map(({id,image,title,logo,link,link_am,link_ru,title_am,title_ru}) => {

                        return(
                            <Link key={id} href={lang == "en" ? link : lang == "ru" ? link_ru : link_am}>
                                <a>
                                <div  className={styles.item}>
                                    <div className={styles.background} style={{backgroundImage:`url(${HOST_API_IMG+image})`}}>
                                            <div className={styles.logoBlock}>
                                                <div><img className={styles.logo} alt="logo" src={HOST_API_IMG+logo}/></div>
                                                <div className={styles.BrandName}>{lang == "en" ? title : lang == "am" ? title_am : title_ru}</div>
                                            </div>
                                        </div>
                                </div>
                            </a>
                            </Link>
                        )
                    })}
                    </div>
            </div>
            <div className={styles.mobileContainer}>
                <OwlCarousel {...settings} className="owl-theme owl-specialOfferMobileNews" nav={false} dots  loop margin={0}>
                    {
                        specialOffers?.map(({id,image,title,logo,link,link_am,link_ru,title_am,title_ru}) => {

                        return(
                            <Link key={id} href={lang == "en" ? link : lang == "ru" ? link_ru : link_am}>
                                <a>
                                <div className={styles.itemMobile}>
                                    <div className={styles.backgroundMobile} style={{backgroundImage:`url(${HOST_API_IMG+image})`}}>
                                            <div className={styles.logoBlockMobile}>
                                                <div><img className={styles.logoMobile} alt="logo" src={HOST_API_IMG+logo}/></div>
                                                <div className={styles.BrandNameMobile}>{lang == "en" ? title : lang == "am" ? title_am : title_ru}</div>
                                            </div>
                                        </div>
                                </div>
                                </a>
                            </Link>
                        )
                        })  
                    }
                </OwlCarousel>
            </div>
        </div>)
    }



export default Discounts