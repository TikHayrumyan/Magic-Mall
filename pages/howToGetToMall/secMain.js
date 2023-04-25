import styles from "../../styles/sass/pages/howToGetToMall/secMain/secMain.module.scss"
import background from "../../public/img/howToGetToMall/secMain/background.jpg"
import pattern from "../../public/img/howToGetToMall/secMain/pattern.svg"
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
                    <div className={styles.pattern}><Image alt="pattern" src={pattern} width={170} height={170}/></div>
                    <div className={styles.title}>{translate.mainHeaderHowToGetToMall[lang]}</div>
                </div>
            </div>
        </div>
    </div>
    )
}



export default SecMain

