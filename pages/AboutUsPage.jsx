import Link from "next/link"
import CardSubscribe from "./homePage/CardSubscribe"
import { useGlobalProvider } from "../components/Providers/GlobalProvider"
import styles from "../styles/sass/pages/aboutUsPage/firstOutletMall/firstOutletMall.module.scss"
import { translate } from "../translations"


const AboutUsPage = ({AboutUsData}) => {
    const parse = require("html-react-parser")
    const { lang } = useGlobalProvider()


    

    return (
        <div>
            {/* <FirstOutletMall/> */}
            {AboutUsData.loading && <div className={styles.firstOutletMall}>
                <div className={styles.container}>
                    <div className={styles.title}>{translate.about[lang]}</div>
                    <div className={styles.containerBlock}>
                        <div className={styles.content}>{parse(lang == "en" ? AboutUsData.data.content : lang == "am" ? AboutUsData.data.content_am : AboutUsData.data.content_ru)}</div>
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
            <CardSubscribe />
        </div>
    )
}

export async function getStaticProps(ctx) {

    const aboutUsFetch = await fetch("https://apimall.weflex.am/api/aboutUs")
    const aboutUs = await aboutUsFetch.json()
    console.log('aboutUs: ', aboutUs);

    return {
        props: {
            AboutUsData: {
                data: aboutUs,
                loading: true
            }
        }
    }
}



export default AboutUsPage