import style from "../styles/sass/core/footer.module.scss"
import logo from "../public/img/icons/footerLogo.svg"
import Image from "next/Image"
import FooterAboutMap from "./FooterComponents/footerAboutMap"
import Link from "next/link"
import { translate } from "../translations"
import { useGlobalProvider } from "./Providers/GlobalProvider"

const Footer = () => {

    const {lang} = useGlobalProvider()

    return(
        <div className={style.container}>
            
            <div className={style.logoTitle}>
                <div className={style.logoBlock}>
                        <Link href="/">
                            <a>
                               <Image className={style.logo} alt="Logo" src={logo}/>
                            </a>
                        </Link>
                    </div>
                <div>
                <div className={style.mapTitle}>{translate.footerSiteMap[lang]}</div>
                <FooterAboutMap/>
                </div>   
            </div>
            <div className={style.footerLine}></div>
            <div className={style.developBlock}>
                <div className={style.multiOutletMall}>© 2022 Multi Magic Mall</div>
                <div  className={style.developed}><Link href="https://weflex.am/">
                    <a target="_blank">Developed and designed by Weflex</a>
                    </Link></div>
            </div>
        </div>
    )
}


export default Footer