/* eslint-disable @next/next/no-img-element */
import style from "../styles/sass/core/footer.module.scss"

import FooterAboutMap from "./footerComponents/FooterAboutMap"

import Link from "next/link"
import { translate } from "../translations"
import { useGlobalProvider } from "./Providers/GlobalProvider"
import Image from "next/image"

const Footer = () => {

    const { lang } = useGlobalProvider()

    return (
        <div className={style.container}>

            <div className={style.logoTitle}>
                <div className={style.logoBlock}>
                    <Link href="/">
                            <Image className={style.logo} alt="Logo" src="/img/icons/footerLogo.svg" width={151.8} height={170.7}/>
                    </Link>
                </div>
                <div>
                    <div className={style.mapTitle}>{translate.footerSiteMap[lang]}</div>
                    <FooterAboutMap />
                </div>
            </div>
            <div className={style.footerLine}></div>
            <div className={style.developBlock}>
                <div className={style.multiOutletMall}>© 2022 Multi Magic Mall</div>
                <div className={style.developed}>
                    <Link href="https://weflex.am/" target="_blank">
                        Developed and designed by Weflex
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Footer