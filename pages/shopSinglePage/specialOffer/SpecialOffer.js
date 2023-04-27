/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/shopSinglePage/specialOffer/specialOffer.module.scss"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { useEffect } from "react"
import Link from "next/link"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { translate } from "../../../translations";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
const settings = {
    autoplayTimeout: 4000,
    autoplay: true,
    smartSpeed: 3000,
    dots: true,
    items: 1,
};

const SpecialOffer = ({ SpecialOffer, loading }) => {

    const { GetSpecialOffersData,
        specialOffersData,
        HOST_API_IMG, lang } = useGlobalProvider()


    useEffect(() => {
        GetSpecialOffersData()
    }, [GetSpecialOffersData])

    useEffect(() => {

    }, [specialOffersData.loading])


    return (<>
        {loading && SpecialOffer && <div className={styles.SpecialOffer}>
            <div className={styles.title}>{translate.headerMenuSpecialOffers[lang]}</div>
            <div className={styles.container}>

                {SpecialOffer?.map(({ id, image, image_am, image_ru, title, logo, link, link_am, link_ru, title_am, title_ru }) => {

                    return (
                        <Link key={id} href={lang == "en" ? link : lang == "ru" ? link_ru : link_am}>
                            <a>
                                <div className={styles.item}>
                                    <div className={styles.background} style={lang == "en" ? { backgroundImage: `url(${HOST_API_IMG + image})` } : lang == "ru" ? { backgroundImage: `url(${HOST_API_IMG + image_ru})` } : { backgroundImage: `url(${HOST_API_IMG + image_am})` }}>
                                        <div className={styles.logoBlock}>
                                            <div><img className={styles.logo} alt="logo" src={HOST_API_IMG + logo} /></div>
                                            <div className={styles.BrandName}>{lang == "en" ? title : lang == "am" ? title_am : title_ru}</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    )
                })}
            </div>
            <div className={styles.mobileContainer}>
                <OwlCarousel {...settings} className="owl-theme owl-specialOfferMobile" nav={false} dots loop margin={0}>
                    {
                        SpecialOffer?.map(({ id, image, image_am, image_ru, title, logo, link, link_am, link_ru, title_am, title_ru }) => {

                            return (
                                <Link key={id} href={lang == "en" ? link : lang == "ru" ? link_ru : link_am}>
                                    <a>
                                        <div className={styles.itemMobile}>
                                            <div className={styles.backgroundMobile} style={lang == "en" ? { backgroundImage: `url(${HOST_API_IMG + image})` } : lang == "ru" ? { backgroundImage: `url(${HOST_API_IMG + image_ru})` } : { backgroundImage: `url(${HOST_API_IMG + image_am})` }}>
                                                <div className={styles.logoBlockMobile}>
                                                    <div><img className={styles.logoMobile} alt="logo" src={HOST_API_IMG + logo} /></div>
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
        </div>}
    </>
    )
}




export default SpecialOffer