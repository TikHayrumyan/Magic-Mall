/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/blogPage/secBlog/secBlog.module.scss"
import Link from "next/link"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"




const SecBlog = () =>{

    function shorten(text, maxLength) {
        var ret = text;
        if (ret?.length > maxLength) {
            ret = ret.substr(0,maxLength) + "...";
        }
        return ret;
    }

    const parse = require("html-react-parser")
    const {blogPageData,HOST_API_IMG,lang} = useGlobalProvider()
    const {id,content,thumbnail,title,title_am,title_ru,date,description,description_am,description_ru} = blogPageData.loading && blogPageData.data[0]
    

    return(
        <div className={styles.SecBlog}>
            <div className={styles.container}>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>{translate.headerMenuBlog[lang]}</div>
                    <div className={styles.description}>{translate.BlogPageDescription[lang]}</div>
                </div>
                {blogPageData.loading && <Link  href={`/singleBlogPage/${id}`} key={id}>
                    
                        <div className={styles.summerTrend}>
                            <div ><img className={styles.img} alt="img" src={HOST_API_IMG+thumbnail} width={749} height={481}/></div>
                            <div className={styles.aboutTrends}>
                                <div className={styles.title}>{lang == "en" ? shorten(title,80) : lang == "ru" ? shorten(title_ru,65) : shorten(title_am,66)}</div>
                                <div className={styles.dateBLock}>
                                    <div><img alt="calendarIcon" src="/img/blogPage/secBlog/calendarIcon.svg"/></div>
                                    <div className={styles.date}>{date}</div>
                                </div>
                                <div className={styles.descrip}>{lang == "en" ? shorten(description,165) : lang == "ru" ? shorten(description_ru,140) : shorten(description_am,137)}</div>
                                <div className={styles.btnBlock}> 
                                    <button className={styles.button}>{translate.buttonRead[lang]}</button>
                                    <div className={styles.arrow}><img alt="arrow" src="/img/blogPage/secBlog/arrow.svg"/></div>
                                </div>
                                <div className={styles.pattern}><img alt="pattern" className="pattern" src="/img/blogPage/secBlog/pattern.svg"/></div>
                            </div>
                        </div>
                
                </Link>}
            </div>
        </div>
    )
}

export default SecBlog