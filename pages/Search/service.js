import { useGlobalProvider } from "../../components/Providers/GlobalProvider"
import Image from "next/image"
import { translate } from "../../translations"
import Link from "next/link"
import styles from "../../styles/sass/pages/Search/service.module.scss"
import iconBook from "../../public/img/servicePage/secFilter/iconBook.svg"
import whitPhoneIcon from "../../public/img/icons/whitPhoneIcon.svg"
import Facebook from "../../public/img/icons/Facebook.svg"
import Instagram from "../../public/img/icons/Instagram.svg"
import cutPattern from "../../public/img/servicePage/secFilter/cutPattern.svg"

const Services = () => {
    
    const {lang,globalSearchResult,HOST_API_IMG} = useGlobalProvider()


    return(
        <div className={styles.services}>
            <div className={styles.container}>
                <div className={styles.titleServices}>{translate.headerMenuServices[lang]}</div>
                <div className={styles.service}>
                {
                     globalSearchResult.data?.services?.map(({id,floor,logo,phone,instagram,linkedin,facebook}) =>{


                        return(
                            <Link key={id} href={`/serviceSinglePage/${id}`}>
                            <a>
                            <div key={id} className={styles.first}>
                                <div className={styles.patternBlock}>
                                    <div className={styles.patternBackground}  style={{backgroundImage:`url(${cutPattern.src})`}}>
                                        <div className={styles.title}>
                                            <span className={styles.number}>{floor}</span>
                                            <span className={styles.floor}>{translate.MallMapPageFloor[lang]}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.bankLogoBlock}>
                                    <div className={styles.bankLogo}><img className={styles.logo} alt="bankLogo" src={HOST_API_IMG+logo}/></div>
                                </div>
                                
                                <div className={styles.hoverBlock}>
                                    
                                    {phone && <div className={styles.phonBlock}>
                                        <div className={styles.phoneIcon}><Image alt="phoneIcon" src={whitPhoneIcon}/></div>
                                        <div><a className={styles.number} href={`tel:${phone}`}>{phone}</a></div>
                                    </div>}
                                    <div className={styles.networkBlock}>
                                        {facebook && <div className={styles.facebook}><Link href={facebook}><a target="_blank"><Image alt="facebook" src={Facebook}/></a></Link></div>}
                                        {instagram && <div className={styles.instagram}><Link href={instagram}><a  target="_blank"><Image alt="instagram" src={Instagram}/></a></Link></div>}

                                    </div>
                                </div>
                                <div className={styles.brandBook}>
                                    <div className={styles.iconBook}><Image alt="iconBook" src={iconBook}/></div>
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



export default Services