/* eslint-disable @next/next/no-img-element */
import { useGlobalProvider } from "../../components/Providers/GlobalProvider"
import styles from "../../styles/sass/pages/Search/shop.module.scss"
import { translate } from "../../translations"
import Link from "next/link"
import cutPattern from "../../public/img/shopPage/secFilter/cutPattern.svg"
import whitPhoneIcon from "../../public/img/icons/whitPhoneIcon.svg"
import Facebook from "../../public/img/icons/Facebook.svg"
import Instagram from "../../public/img/icons/Instagram.svg"
import iconBook from "../../public/img/shopPage/secFilter/iconBook.svg"

import salePattern from "../../public/img/shopPage/secFilter/salePattern.svg"
import salePatternMobile from "../../public/img/shopPage/secFilter/salePatternMobile.svg"


const Shop = () => {

    const { lang, globalSearchResult, HOST_API_IMG } = useGlobalProvider()


    return (
        <div className={styles.Shop}>
            <div className={styles.container}>
                <div className={styles.titleShop}>{translate.headerMenuShop[lang]}</div>
                <div className={styles.shops}>
                    {
                        globalSearchResult.data?.shop?.map(({ id, name, floor, logo, thumbnail, phone, instagram, facebook, sale, sale_am, sale_ru }) => {

                            return (
                                <Link key={id} href={`/shopSinglePage/${id}`}><a>
                                    <div className={styles.first} style={{ backgroundImage: `url(${HOST_API_IMG + thumbnail})` }}>
                                        <div className={styles.patternBlock}>
                                            {sale && <div className={styles.salePattern} style={{ backgroundImage: `url(${salePattern.src})` }}>
                                                <div className={styles.titleSale}>
                                                    <div className={styles.sale}>{translate.sale[lang]}</div>
                                                    <div className={styles.saleUntil}>{lang == "en" ? sale : lang == "ru" ? sale_ru : sale_am}</div>
                                                </div>
                                            </div>}
                                            {sale && <div className={styles.salePatternMobile} style={{ backgroundImage: `url(${salePatternMobile.src})` }}>
                                                <div className={styles.titleSaleMobile}>
                                                    <div className={styles.saleMobile}>{translate.sale[lang]}</div>
                                                    <div className={styles.saleUntilMobile}>{lang == "en" ? sale : lang == "ru" ? sale_ru : sale_am}</div>
                                                </div>
                                            </div>}
                                            <div className={styles.patternBackground} style={{ backgroundImage: `url(${cutPattern.src})` }}>
                                                <div className={styles.title}>
                                                    <span className={styles.number}>{floor}</span>
                                                    <span className={styles.floor}>{translate.MallMapPageFloor[lang]}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.hoverBlock}>
                                            <div>
                                                <img className={styles.logoBackground} alt="logo" src={HOST_API_IMG + logo} />
                                            </div>
                                            {phone && <div className={styles.phonBlock}>
                                                <div className={styles.phoneIcon}><img alt="phoneIcon" src={whitPhoneIcon} /></div>
                                                <div><a className={styles.number} href={`tel:${phone}`}>{phone}</a></div>
                                            </div>}
                                            <div className={styles.networkBlock}>
                                                {facebook && <div className={styles.facebook}><Link href={facebook}><a target="_blank"><img alt="facebook" src="/img/icons/Facebook.svg" /></a></Link></div>}
                                                {instagram && <div className={styles.instagram}><Link href={instagram}><a target="_blank"><img alt="instagram" src="/img/icons/Instagram.svg" /></a></Link></div>}

                                            </div>
                                        </div>
                                        <div className={styles.brandBook}>
                                            <div className={styles.brand}>{name}</div>
                                            <div className={styles.iconBook}><img alt="iconBook" src={iconBook} /></div>
                                        </div>
                                    </div>
                                </a>
                                </Link>
                            )

                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default Shop