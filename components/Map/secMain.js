import styles from "../../styles/sass/pages/map/secMain/secMain.module.scss"
import Image from "next/image"
import { translate } from "../../translations"
import { useGlobalProvider } from "../Providers/GlobalProvider"

const SecMain = () => {

    const {lang} = useGlobalProvider()

    return(
        <div className={styles.secMain}>
            <div className={styles.container}>
                <div className={styles.background} style={{backgroundImage:`url(/img/map/secMain/background.jpeg)`}}><div className={styles.gradientt}></div>
                    <div className={styles.patternAndTitle}>
                        <div className={styles.pattern}><Image alt="pattern" src="/img/map/secMain/pattern.svg" width={170} height={170}/></div>
                        <div className={styles.title}>{translate.headerMenuMallMap[lang]}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecMain