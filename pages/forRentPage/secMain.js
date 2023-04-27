/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/sass/pages/forRentPage/secMain/secMain.module.scss"
import { translate } from "../../translations"
import { useGlobalProvider } from "../../components/Providers/GlobalProvider"


const SecMain = () =>{

    const {lang} = useGlobalProvider()

    return(
        <div className={styles.secMain}>
        <div className={styles.container}>
            <div className={styles.background} style={{backgroundImage:`url(/img/forRentPage/secMain/background.jpg)`}}><div className={styles.gradientt}></div>
                <div className={styles.patternAndTitle}>
                    <div className={styles.pattern}><img alt="pattern" src="/img/forRentPage/secMain/pattern.svg"/></div>
                    <div className={styles.title}>{translate.FooterMenuForRent[lang]}</div>
                </div>
            </div>
        </div>
    </div>
    )
}



export default SecMain

