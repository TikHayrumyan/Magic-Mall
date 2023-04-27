import styles from "../../styles/sass/pages/entertainmentPage/secMain/secMain.module.scss"
import Image from "next/image"
import {useGlobalProvider} from "../../components/Providers/GlobalProvider"
import { translate } from "../../translations"

const SecMain = () => {

    const {lang} = useGlobalProvider()

    return(
        <div className={styles.secMain}>
            <div className={styles.container}>
                <div className={styles.background} style={{backgroundImage:`/img/entertainmentPage/secMain/background.jpeg`}}><div className={styles.gradientt}></div>
                    <div className={styles.patternAndTitle}>
                        <div className={styles.pattern}><Image alt="pattern" src="/img/entertainmentPage/secMain/pattern.svg" width={170} height={170}/></div>
                        <div className={styles.title}>{translate.headerMenuEntertainment[lang]}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecMain