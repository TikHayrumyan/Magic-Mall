import styles from "../../styles/sass/pages/FooterComponents/footerAbout.module.scss"
import Image from "next/Image"
import location from "../../public/img/icons/location.svg"
import phone from "../../public/img/icons/bluePhone.svg"
import oclock from "../../public/img/icons/blueTime.svg"
import facebook from "../../public/img/icons/Facebook.svg"
import instagram from "../../public/img/icons/Instagram.svg"
import linkdin from "../../public/img/icons/Linkdin.svg"
import Link from 'next/link'
import { translate } from "../../translations"
import { useGlobalProvider } from "../Providers/GlobalProvider"

const FooterAboutMap = () => {

    const {lang} = useGlobalProvider()

    return(
        <div className={styles.aboutMap}>
                <div className={styles.blocks}>
                    <div className={styles.aboutUs}><Link href="/AboutUsPage"><a>{translate.FooterMenuAboutUs[lang]}</a></Link></div>
                    <div className={styles.contact}><Link href="/contactPage"><a>{translate.FooterMenuContactUs[lang]}</a></Link></div>
                    <div className={styles.career}><Link href="/careerPage"><a>{translate.FooterMenuCareer[lang]}</a></Link></div>
                    <div className={styles.direction}><Link href="/howToGetToMall"><a>{translate.FooterMenuHowToGetToMall[lang]}</a></Link></div>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.questions}><Link href="/FAQpage"><a>{translate.FooterMenuFAQ[lang]}</a></Link></div>
                    <div className={styles.forReserve}><Link href="/forRentPage"><a>{translate.FooterMenuForRent[lang]}</a></Link></div>
                    {/* <div className={styles.finance}><Link href="/reportPage"><a>{translate.FooterMenuReport[lang]}</a></Link></div> */}
                </div>
                <div className={styles.iconsBlock}>
                    <div className={styles.location}><Image alt="locationIcon" src={location} width={20} height={20}/><p className={styles.location_text}>{translate.contactPageAddres[lang]}</p></div>
                    <div className={styles.phone}><Image alt="phoneIcon" src={phone} width={20} height={20}/><a href="tel:+374 11 880 888">+374 11 880 888</a></div>
                    <div className={styles.oclock}><Image alt="Oclock" src={oclock} width={20} height={20}/>10։00 - 22։00</div>
                </div>
                <div>
                    <div className={styles.netwokTitle}>{translate.FooterMenuSocialMedia[lang]}</div>
                    <div className={styles.network}>
                        <div><Link href="https://www.facebook.com/multimagicmall"><a target="_blank"><Image alt="facebook" src={facebook}/></a></Link></div>
                        <div><Link href="https://www.instagram.com/multimagic_mall/"><a  target="_blank"><Image alt="instagram" src={instagram}/></a></Link></div>
                        <div><Link href="https://www.linkedin.com/company/multi-outlet-mall/"><a  target="_blank"><Image alt="Linkdin" src={linkdin}/></a></Link></div>
                    </div>
                </div>
        </div>
    )
}

export default FooterAboutMap