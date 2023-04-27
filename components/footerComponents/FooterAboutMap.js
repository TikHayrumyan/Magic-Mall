/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/sass/pages/footerComponents/footerAbout.module.scss"
import Link from 'next/link'
import { translate } from "../../translations"
import { useGlobalProvider } from "../Providers/GlobalProvider"

const FooterAboutMap = () => {

    const { lang } = useGlobalProvider()

    return (
        <div className={styles.aboutMap}>
            <div className={styles.blocks}>
                <div className={styles.aboutUs}>
                    <Link href="/AboutUsPage">
                        {translate.FooterMenuAboutUs[lang]}
                    </Link>
                </div>
                <div className={styles.contact}>
                    <Link href="/contactPage">
                        {translate.FooterMenuContactUs[lang]}
                    </Link>
                </div>
                <div className={styles.career}>
                    <Link href="/careerPage">
                        {translate.FooterMenuCareer[lang]}</Link>
                </div>
                <div className={styles.direction}>
                    <Link href="/howToGetToMall">
                        {translate.FooterMenuHowToGetToMall[lang]}
                    </Link>
                </div>
            </div>
            <div className={styles.blocks}>
                <div className={styles.questions}>
                    <Link href="/FAQpage">
                        {translate.FooterMenuFAQ[lang]}
                    </Link>
                </div>
                <div className={styles.forReserve}>
                    <Link href="/forRentPage">
                        {translate.FooterMenuForRent[lang]}
                    </Link>
                </div>
                {/* <div className={styles.finance}><Link href="/reportPage">{translate.FooterMenuReport[lang]}</Link></div> */}
            </div>
            <div className={styles.iconsBlock}>
                <div className={styles.location}>
                    <>
                        <img alt="locationIcon" src="/img/icons/location.svg" width={20} height={20} />
                        <p className={styles.location_text}>
                            {translate.contactPageAddres[lang]}
                        </p>
                    </>
                </div>
                <div className={styles.phone}>
                    <img alt="phoneIcon" src="/img/icons/bluePhone.svg" width={20} height={20} />
                    <Link href="tel:+374 11 880 888">
                        +374 11 880 888
                    </Link>
                </div>
                <div className={styles.oclock}>
                    <img alt="Oclock" src="/img/icons/blueTime.svg" width={20} height={20} />
                    10։00 - 22։00
                </div>
            </div>
            <div>
                <div className={styles.netwokTitle}>{translate.FooterMenuSocialMedia[lang]}</div>
                <div className={styles.network}>
                    <div>
                        <Link target="_blank" href="https://www.facebook.com/multimagicmall">
                            <img alt="facebook" src="/img/icons/Facebook.svg" />
                        </Link>
                    </div>
                    <div>
                        <Link target="_blank" href="https://www.instagram.com/multimagic_mall/">
                            <img alt="instagram" src="/img/icons/Instagram.svg" />
                        </Link>
                    </div>
                    <div>
                        <Link target="_blank" href="https://www.linkedin.com/company/multi-outlet-mall/">
                            <img alt="Linkdin" src="/img/icons/Linkdin.svg" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterAboutMap