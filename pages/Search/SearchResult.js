import { useEffect } from "react"
import { useGlobalProvider } from "../../components/Providers/GlobalProvider"
import styles from "../../styles/sass/pages/Search/searchResult.module.scss"
import Blog from "./blog"
import Entertainment from "./entertainment"
import Foods from "./foods"
import News from "./news"
import Services from "./service"
import Shop from "./shop"
import CardSubscribe from "../homePage/CardSubscribe"
import { translate } from "../../translations"


const SearchResult = () => {

    const {lang,GlobalSearchData,globalSearchResult} = useGlobalProvider()

    useEffect(() => {
    },[globalSearchResult.loading])


    return(
        <div className={styles.SearchResult}>
            <div className={styles.container}>
                {
                    globalSearchResult.loading && Object.keys(globalSearchResult.data).length == 0 ? 
                        <>
                        <div className={styles.searchResult}>
                            <div className={styles.titleResult}>
                                <div className={styles.title}>{translate.SearchResult[lang]} - <span className={styles.result}>{globalSearchResult.searchWord}</span></div>
                            </div>
                            <div className={styles.notResult}>
                            <p>{translate.SearchNotResult[lang]}</p>
                            </div>
                        </div>
                        <div className={styles.forCardSubscribeNotResult}>
                            <CardSubscribe/>
                         </div>
                         </>
                    :
                    <div>
                    <div className={styles.titleResult}>
                        <div className={styles.title}>{translate.SearchResult[lang]} - <span className={styles.result}>{globalSearchResult.searchWord}</span></div>
                    </div>
                        {
                        globalSearchResult.loading && Object.keys(globalSearchResult.data).length ? 
                        <div>
                        <div className={styles.forCardSubscribe}>
                            {globalSearchResult.data.shop.length ? <Shop/> : null}
                            {globalSearchResult.data.food.length ? <Foods/> : null}
                            {globalSearchResult.data.services.length ? <Services/> : null}
                            {globalSearchResult.data.entertainment.length ? <Entertainment/> : null}
                            {globalSearchResult.data.news.length ? <News/> : null}
                            {globalSearchResult.data.blog.length ? <Blog/> : null}
                        </div>
                        
                            <CardSubscribe/>
                     
                        </div>
                        : 
                        null
                        }
                    </div>
                }
                
            </div>
        </div>
    )
}


export default SearchResult