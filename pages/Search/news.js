/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/sass/pages/Search/news.module.scss"
import { useGlobalProvider } from "../../components/Providers/GlobalProvider"
import Image from "next/image"
import { translate } from "../../translations"
import Link from "next/link"
import pattern from "../../public/img/newsPage/secNews/pattern.svg"
import calendar from "../../public/img/newsPage/secNews/calendar.svg"
import arrow from "../../public/img/newsPage/secNews/arrow.svg"

const News = () => {

    const {lang,globalSearchResult,HOST_API_IMG} = useGlobalProvider()

    console.log(globalSearchResult.data.food,"globalSearchResult.data.food");
        return(
            <div className={styles.News}>
                <div className={styles.container}>
                    <div className={styles.titleNews}>{translate.headerMenuNews[lang]}</div>
                    
                    {
                         globalSearchResult.data?.news?.map(({id,title,title_am,title_ru,description,description_am,description_ru,thumbnail,date},index) => {


                            return(
                                <Link  key={id} href={`/newsSinglePage/${id}`}>
                                <a>
                                <div className={styles.pagination} >
                                    <div className={index % 2 == 1 ? styles.PaginationContainer : styles.PaginationContainerReverse}>
                                        <div className={styles.descripBlock}>
                                            <div className={styles.pattern}><Image alt="pattern" src={pattern}/></div>
                                            <div className={styles.dateBlock}>
                                                <div className={styles.calendar}><Image alt="calendar" src={calendar}/></div>
                                                <div className={styles.date}>{date}</div>
                                            </div>
                                            <div className={styles.descripTitleBlock}>
                                                <div className={styles.descripTitle}>{lang == "en" ? title : lang == "ru" ? title_ru : title_am}</div>
                                            </div>
                                            <div className={styles.descriptionBlock}>
                                                <div className={styles.description}>{lang == "en" ? description : lang == "ru" ? description_ru : description_am}</div>
                                            </div>
                                            <div><img className={styles.imgMobile} alt="img" src={HOST_API_IMG+thumbnail} width={764} height={589}/></div>
                                            <div className={styles.btnBlock}>
                                                <button className={styles.button}>{translate.buttonSeeMore[lang]}</button>
                                                <div className={styles.arrow}><Image alt="arrow" src={arrow}/></div>
                                                <div className={styles.patternMobile}><Image alt="pattern" src={pattern}/></div>
                                            </div>
                                        </div>
                                        <div><img className={styles.img} alt="img" src={HOST_API_IMG+thumbnail} width={764} height={589}/></div>
                                    </div>
                                </div>
                                </a>
                                </Link>
                            )
                         })
                    }
                </div>
            </div>
        )
}


export default News