/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/sass/pages/FAQpage/secMain/secMain.module.scss"
import background from "../../public/img/FAQpage/secMain/background.jpeg"
import pattern from "../../public/img/FAQpage/secMain/pattern.svg"
import Image from "next/image"
import { translate } from "../../translations"
import {useGlobalProvider} from "../../components/Providers/GlobalProvider"

const SecMain = () =>{

    const {lang} = useGlobalProvider()

    return(
        <div className={styles.secMain}>
        <div className={styles.container}>
            <div className={styles.background} style={{backgroundImage:`url(${background.src})`}}><div className={styles.gradientt}></div>
                <div className={styles.patternAndTitle}>
                    <img className={styles.pattern} alt="pattern" src={pattern.src}/>
                    <div className={styles.title}>{translate.FooterMenuFAQ[lang]}</div>
                </div>
            </div>
        </div>
    </div>
    )
}



export default SecMain