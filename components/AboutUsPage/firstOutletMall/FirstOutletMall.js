import styles from "../../../styles/sass/pages/aboutUsPage/firstOutletMall/firstOutletMall.module.scss"
import { useGlobalProvider } from "../../Providers/GlobalProvider"
import { useEffect } from "react"
import { translate } from "../../../translations"
import Link from "next/link"




const FirstOutletMall = () =>{
    const parse = require("html-react-parser")
    const {GetAboutUsPageData,AboutUsData,lang} = useGlobalProvider()
    useEffect(() => {
        GetAboutUsPageData()
    },[GetAboutUsPageData])

    useEffect(() => {

    },[AboutUsData.loading])
    

    return (
        <>
        {AboutUsData.loading && <div className={styles.firstOutletMall}>
            <div className={styles.container}>
                <div className={styles.title}>{translate.about[lang]}</div>
                <div className={styles.containerBlock}>
                    <div className={styles.content}>{parse(lang == "en" ? AboutUsData.data.content : lang == "am" ?  AboutUsData.data.content_am : AboutUsData.data.content_ru)}</div>
                    <div className={styles.buttonsBlock}>
                        <Link href="/careerPage">
                        <button className={styles.joinWithUs}>{translate.AboutUsButtonJoinOurTeam[lang]}</button>
                        </Link>
                        <Link href="/forRentPage">
                        <button className={styles.workWithUs}>{translate.AboutUsButtonCooperationWithUs[lang]}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>}
        </>
    )
}


export default FirstOutletMall