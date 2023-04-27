/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/sass/pages/FAQpage/secMain/secMain.module.scss"
import { translate } from "../../translations"
import {useGlobalProvider} from "../../components/Providers/GlobalProvider"

const SecMain = () =>{

    const {lang} = useGlobalProvider()

    return(
        <div className={styles.secMain}>
        <div className={styles.container}>
            <div className={styles.background} style={{backgroundImage:`/img/FAQpage/secMain/background.jpeg`}}><div className={styles.gradientt}></div>
                <div className={styles.patternAndTitle}>
                    <img className={styles.pattern} alt="pattern" src="/img/FAQpage/secMain/pattern.svg"/>
                    <div className={styles.title}>{translate.FooterMenuFAQ[lang]}</div>
                </div>
            </div>
        </div>
    </div>
    )
}



export default SecMain