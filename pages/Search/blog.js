/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/sass/pages/Search/blog.module.scss"
import { useGlobalProvider } from "../../components/Providers/GlobalProvider"
import Image from "next/image"
import { translate } from "../../translations"
import Link from "next/link"
import calendarIcon from "../../public/img/blogPage/secBlog/calendarIcon.svg"
import arrow from "../../public/img/blogPage/secBlog/arrow.svg"
import pattern from "../../public/img/blogPage/secBlog/pattern.svg"

const Blog = () => {

    const {lang,globalSearchResult,HOST_API_IMG} = useGlobalProvider()

    return(
        <div className={styles.blog}>
            <div className={styles.container}>
                <div className={styles.titleBlog}>{translate.headerMenuBlog[lang]}</div>

                {
                    globalSearchResult.data?.blog?.map(({id,thumbnail,title,title_am,title_ru,description,description_am,description_ru,date}) => {

                        return(
                            <Link  href={`/singleBlogPage/${id}`} key={id}>
                                <a>
                                    <div className={styles.summerTrend}>
                                        <div ><img className={styles.img} alt="img" src={HOST_API_IMG+thumbnail} width={749} height={481}/></div>
                                        <div className={styles.aboutTrends}>
                                            <div className={styles.title}>{lang == "en" ? title : lang == "ru" ? title_ru : title_am}</div>
                                            <div className={styles.dateBLock}>
                                                <div><img alt="calendarIcon" src={calendarIcon}/></div>
                                                <div className={styles.date}>{date}</div>
                                            </div>
                                            <div className={styles.descrip}>{lang == "en" ? description : lang == "ru" ? description_ru : description_am}</div>
                                            <div className={styles.btnBlock}> 
                                                <button className={styles.button}>{translate.buttonRead[lang]}</button>
                                                <div className={styles.arrow}><img alt="arrow" src={arrow}/></div>
                                            </div>
                                            <div className={styles.pattern}><img className="pattern" src={pattern} alt="pattern"/></div>
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


export default Blog