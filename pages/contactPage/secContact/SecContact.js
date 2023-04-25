import Image from "next/image"
import styles from "../../../styles/sass/pages/contactPage/secContact/secContact.module.scss"
import location from "../../../public/img/contactPage/secContact/location.svg"
import message from "../../../public/img/contactPage/secContact/message.svg"
import Oclock from "../../../public/img/contactPage/secContact/Oclock.svg"
import phoneIcon from "../../../public/img/contactPage/secContact/phoneIcon.svg"
import Facebook from "../../../public/img/contactPage/secContact/Facebook.svg"
import Instagram from "../../../public/img/contactPage/secContact/Instagram.svg"
import Linkdin from "../../../public/img/contactPage/secContact/Linkdin.svg"
import Link from "next/link"
import GoogleMap from "./googleMap/Map"
import { translate } from "../../../translations"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"


const SecContact = () => {

    const {lang} = useGlobalProvider()

    return(
        <div className={styles.SecContact}>
            <div className={styles.container}>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>{translate.FooterMenuContactUs[lang]}</div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.contactContainer}>
                        <div className={styles.infoBlock}>
                            <div className={styles.locationBlock}>
                                <div className={styles.locationIcon}><Image alt="location" src={location}/></div>
                                <div className={styles.location}>{translate.contactPageAddres[lang]}</div>
                            </div>
                            <div className={styles.phoneBlock}>
                                <div className={styles.phoneIcon}><Image alt="phoneIcon" src={phoneIcon}/></div>
                                <div className={styles.number}><a href="tel:+374 11 880 888">+374 11 880 888</a></div>
                            </div>
                            <div className={styles.mailBlock}>
                                <div className={styles.messageIcon}><Image alt="message" src={message}/></div>
                                <div className={styles.mail}><a href="mailto:info@magicmall.am">info@magicmall.am</a></div>
                            </div>
                            <div className={styles.clockBlock}>
                                <div className={styles.clockIcon}><Image alt="clock" src={Oclock}/></div>
                                <div className={styles.clock}>10։00 - 22։00</div>
                            </div>
                            <div className={styles.network}>
                                <div className={styles.facebookIcon}><Link href="https://www.facebook.com/multimagicmall"><a target="_blank"><Image alt="facebook" src={Facebook}/></a></Link></div>
                                <div className={styles.instagram}><Link href="https://www.instagram.com/multimagic_mall/"><a  target="_blank"><Image alt="instagram" src={Instagram}/></a></Link></div>
                                <div className={styles.linkedinIcon}><Link href="https://www.linkedin.com/company/multi-outlet-mall/"><a  target="_blank"><Image alt="Linkdin" src={Linkdin}/></a></Link></div>
                            </div>
                        </div>
                        <div className={styles.mapBlock}>
                            <GoogleMap/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecContact