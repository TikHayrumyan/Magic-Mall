import styles from "../../styles/sass/pages/singleBlogPage/secMain/secMain.module.scss"
import pattern from "../../public/img/singleBlogPage/secMain/pattern.svg"
import Image from "next/image"
import { useGlobalProvider } from "../../components/Providers/GlobalProvider"
import { translate } from "../../translations"


const SecMain = ({data}) =>{

    const {HOST_API_IMG,lang} = useGlobalProvider()
    


    return(<>
        {data && <div className={styles.secMain}>
        <div className={styles.container}>
            <div className={styles.background} style={{backgroundImage:`url(${HOST_API_IMG+data.coverPhoto})`}}><div className={styles.gradientt}></div>
                <div className={styles.patternAndTitle}>
                    <div className={styles.pattern}><Image alt="pattern" src={pattern} width={170} height={170}/></div>
                    <div className={styles.title}>{translate.headerMenuBlog[lang]}</div>
                </div>
            </div>
        </div>
    </div>}
    </>
    )
}



export default SecMain

