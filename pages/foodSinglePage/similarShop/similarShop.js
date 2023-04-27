/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/foodSinglePage/similarShop/similarShop.module.scss"
import cutPattern from "../../../public/img/shopSinglePage/similarShops/cutPattern.svg"
import iconBook from "../../../public/img/shopSinglePage/similarShops/iconBook.svg"
import whitPhoneIcon from "../../../public/img/icons/whitPhoneIcon.svg"
import Facebook from "../../../public/img/icons/Facebook.svg"
import Instagram from "../../../public/img/icons/Instagram.svg"
import Link from "next/link"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"

const SimilarShop = ({related,loading}) =>{

    
    const {HOST_API_IMG,lang} = useGlobalProvider()
    

    return(
        <div className={styles.SimilarShop}>
               {  related && <div className={styles.container}>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>{translate.FoodPageSimilarFoods[lang]}</div>
                </div>
                <div className={styles.similarBrands}>
                {
                      loading && related.map(({id,thumbnail,floor,name,name_am,name_ru,phone,logo,facebook,instagram}) => {
                            return <Link key={id} href={`/foodSinglePage/${id}`}><a>
                                    <div className={styles.first} style={{backgroundImage:`url(${HOST_API_IMG+thumbnail})`}}>
                                        <div className={styles.patternBlock}>
                                            <div className={styles.patternBackground}  style={{backgroundImage:`url(${cutPattern.src})`}}>
                                                <div className={styles.title}>
                                                    <span className={styles.number}>{floor}</span>
                                                    <span className={styles.floor}>{translate.MallMapPageFloor[lang]}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.hoverBlock}>
                                            <div >
                                                <img className={styles.logoBackground} alt="Logo" src={HOST_API_IMG+logo}/>
                                            </div>
                                            {phone && <div className={styles.phonBlock}>
                                                <div className={styles.phoneIcon}><img alt="phoneIcon" src={whitPhoneIcon}/></div>
                                                <div><a className={styles.number} href={`tel:${phone}`}>{phone}</a></div>
                                            </div>}
                                          {facebook && instagram && <div className={styles.networkBlock}>
                                                <div className={styles.facebook}><Link href={facebook}><a target="_blank"><img alt="facebook" src="/img/icons/Facebook.svg"/></a></Link></div>
                                                    <div className={styles.instagram}><Link href={instagram}><a  target="_blank"><img alt="instagram" src="/img/icons/Instagram.svg"/></a></Link></div>
                                            </div>}
                                        </div>
                                        <div className={styles.brandBook}>
                                                <div className={styles.brand}>{lang == "en" ? name : lang == "ru" ? name_ru : name_am}</div>
                                                <div className={styles.iconBook}><img alt="iconBook" src={iconBook}/></div>
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