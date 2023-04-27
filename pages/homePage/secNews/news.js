/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/HomePage/secNews/news.module.scss"
import NewsSlider from "./newsSlider"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"



const News = () =>{

    const {lang} = useGlobalProvider()

    return(<div className={styles.news}>
                <div className={styles.container}>
                    <div className={styles.titleBlock}>
                        <div className={styles.pattern}><img alt="pattern" src="/img/homePage/secBlog/firstPattern.svg" /></div>
                        <div className={styles.title}>{translate.headerMenuSpecialOffers[lang]}</div>
                    </div>
                    <NewsSlider/>
                </div>
            </div>)
}


export default News