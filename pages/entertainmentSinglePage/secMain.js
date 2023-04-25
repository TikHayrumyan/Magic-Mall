import styles from "../../styles/sass/pages/entertainmentSinglePage/secMain/secMain.module.scss"
import pattern from "../../public/img/entertainmentSinglePage/secMain/pattern.svg"
import Image from "next/image"
import Link from 'next/link'
import phoneIcon from "../../public/img/entertainmentSinglePage/secMain/phoneIcon.svg"
import facebook from "../../public/img/icons/Facebook.svg"
import instagram from "../../public/img/icons/Instagram.svg"
import Linkdin from  "../../public/img/entertainmentSinglePage/secMain/Linkdin.svg"
import { useGlobalProvider } from "../../components/Providers/GlobalProvider"

const SecMain = ({data}) => {
    const {HOST_API_IMG,lang} = useGlobalProvider()
    const parse = require("html-react-parser")

    return(
        <>
        {data && <div className={styles.secMain}>
            <div className={styles.container}>
                <div className={styles.background} style={{backgroundImage:`url(${HOST_API_IMG+data.coverPhoto})`}}><div className={styles.gradientt}></div>
                    <div className={styles.patternAndTitle}>
                        <div><Image alt="pattern" src={pattern} width={170} height={170}/></div>
                        <div className={styles.title}>{lang == "en" ? data.name : lang == "ru" ? data.name_ru : data.name_am}</div>
                    </div>
                    {/* <div className={styles.infoCard}>
                        <div className={styles.backgroundCard}>
                            <div className={styles.infoBlock}>
                                <div className={styles.contactWithUs}>{lang == "en" ? parse(data.content) : lang == "ru" ? parse(data.content_ru) : parse(data.content_am)}</div>
                                <div className={styles.contactBlock}>
                                    <div className={styles.numberBlock}>
                                        <div className={styles.phoneIcon}><Image alt="phoneIcon" src={phoneIcon}/> </div>
                                        {data.phone && <div className={styles.number}><a className={styles.number}href={`tel:${data.phone}`}>{data.phone}</a></div>}
                                    </div>
                                    <div className={styles.networkBlock}>
                                        { data.linkedin && <div className={styles.Linkdin}><Link href={data.linkedin}><a  target="_blank"><Image alt="Linkdin" src={Linkdin}/></a></Link></div>}
                                        {data.facebook && <div className={styles.Facebook}><Link href={data.facebook}><a target="_blank"><Image alt="Facebook" src={facebook}/></a></Link></div>}
                                        {data.instagram &&  <div className={styles.Instagram}><Link href={data.instagram}><a  target="_blank"><Image alt="Instagram" src={instagram}/></a></Link></div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>}
        </>
    )
}

export default SecMain