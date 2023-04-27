/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/shopSinglePage/similarShops/similarShops.module.scss"
import Link from "next/link"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"


const SimilarShop = ({related,loading}) =>{
   

    const {HOST_API_IMG,lang} = useGlobalProvider()



    return(
         <div className={styles.SimilarShop}>
           { related && <div className={styles.container}>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>{translate.ShopPageSimilarShops[lang]}</div>
                </div>
                <div className={styles.similarBrands}>
                {
                        related?.map(({id,thumbnail,floor,name,name_am,name_ru,phone,logo,facebook,instagram,sale,sale_am,sale_ru}) => {
                            return <Link key={id} href={`/shopSinglePage/${id}`}><a>
                                        <div className={styles.first} style={{backgroundImage:`url(${HOST_API_IMG+thumbnail})`}}>
                                        <div className={styles.patternBlock}>
                                        {sale && <div className={styles.salePattern} style={{backgroundImage: `/img/shopPage/secFilter/salePattern.svg`}}>
                                                <div className={styles.titleSale}>
                                                    <div className={styles.sale}>{translate.sale[lang]}</div>
                                                    <div className={styles.saleUntil}>{lang == "en" ? sale : lang == "ru" ? sale_ru : sale_am}</div>
                                                </div>
                                            </div>}
                                        {sale && <div className={styles.salePatternMobile} style={{backgroundImage: `/img/shopPage/secFilter/salePatternMobile.svg`}}>
                                            <div className={styles.titleSaleMobile}>
                                                <div className={styles.saleMobile}>{translate.sale[lang]}</div>
                                                <div className={styles.saleUntilMobile}>{lang == "en" ? sale : lang == "ru" ? sale_ru : sale_am}</div>
                                            </div>
                                        </div>}   
                                            <div className={styles.patternBackground}  style={{backgroundImage:`/img/shopSinglePage/similarShops/cutPattern.svg`}}>
                                                <div className={styles.title}>
                                                    <span className={styles.number}>{floor}</span>
                                                    <span className={styles.floor}>{translate.MallMapPageFloor[lang]}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.hoverBlock}>
                                            <div>
                                                <img className={styles.logoBackground} alt="Logo" src={HOST_API_IMG+logo}/>
                                            </div>
                                            {phone && <div className={styles.phonBlock}>
                                                <div className={styles.phoneIcon}><img alt="phoneIcon" src="/img/icons/whitPhoneIcon.svg"/></div>
                                                 <div><a className={styles.number} href={`tel:${phone}`}>{phone}</a></div>
                                            </div>}
                                            <div className={styles.networkBlock}>
                                                {facebook && <div className={styles.facebook}><Link href={facebook}><a target="_blank"><img alt="facebook" src="/img/icons/Facebook.svg"/></a></Link></div>}
                                                {instagram && <div className={styles.instagram}><Link href={instagram}><a  target="_blank"><img alt="instagram" src="/img/icons/Instagram.svg"/></a></Link></div>}

                                            </div>
                                        </div>
                                        <div className={styles.brandBook}>
                                                <div className={styles.brand}>{lang == "en" ? name : lang == "ru" ? name_ru : name_am}</div>
                                                <div className={styles.iconBook}><img alt="iconBook" src="/img/shopSinglePage/similarShops/iconBook.svg"/></div>
                                        </div>
                                    </div>
                                    </a></Link>
                        })
                    }
                    
                </div>
            </div>}
        </div>
    )
}


export default SimilarShop