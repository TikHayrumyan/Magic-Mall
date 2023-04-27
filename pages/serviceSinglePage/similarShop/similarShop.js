/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/serviceSinglePage/similarShop/similarShop.module.scss"
import Link from "next/link"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"


const SimilarShop = ({ related, loading }) => {

    const { HOST_API_IMG, lang } = useGlobalProvider()








    return (<>
        <div className={styles.SimilarShop}>
            {
                related && <div className={styles.container}>
                    <div className={styles.titleBlock}>
                        {related?.length ? <div className={styles.title}>{translate.ServicePageSimilarServices[lang]}</div> : null}
                    </div>
                    <div className={styles.similarBrands}>
                        {
                            related.map(({ id, floor, phone, logo, facebook, instagram }) => {
                                return <Link key={id} href={`/serviceSinglePage/${id}`}><a>
                                    <div className={styles.first}>
                                        <div className={styles.patternBlock}>
                                            <div className={styles.patternBackground} style={{ backgroundImage: `/img/serviceSinglePage/similarShop/cutPattern.svg` }}>
                                                <div className={styles.title}>
                                                    <span className={styles.number}>{floor}</span>
                                                    <span className={styles.floor}>հարկ</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.bankLogoBlock}>
                                            {/* <div className={styles.bankLogo}><img alt="bankLogo"  src={background}/></div> */}
                                            <img className={styles.bankLogo} alt="Logo" src={HOST_API_IMG + logo} />
                                        </div>

                                        <div className={styles.hoverBlock}>

                                            {phone && <div className={styles.phonBlock}>
                                                <div className={styles.phoneIcon}><img alt="phoneIcon" src="/img/icons/whitPhoneIcon.svg" /></div>
                                                <div><a className={styles.number} href={`tel:${phone}`}>{phone}</a></div>
                                            </div>}
                                            <div className={styles.networkBlock}>
                                                {facebook && <div className={styles.facebook}><Link href={facebook}><a target="_blank"><img alt="facebook" src="/img/icons/Facebook.svg" /></a></Link></div>}
                                                {instagram && <div className={styles.instagram}><Link href={instagram}><a target="_blank"><img alt="instagram" src="/img/icons/Instagram.svg" /></a></Link></div>}
                                            </div>
                                        </div>
                                        <div className={styles.brandBook}>
                                            <div className={styles.iconBook}><img alt="iconBook" src="/img/serviceSinglePage/similarShop/iconBook.svg" /></div>
                                        </div>
                                    </div>
                                </a>
                                </Link>
                            })
                        }

                    </div>
                </div>
            }
        </div>
    </>
    )
}


export default SimilarShop