/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/sass/pages/Search/entertainment.module.scss"
import { useGlobalProvider } from "../../components/Providers/GlobalProvider"
import Image from "next/image"
import { translate } from "../../translations"
import Link from "next/link"



const Entertainment = () => {

    const {lang,globalSearchResult,HOST_API_IMG} = useGlobalProvider()


    return(
        <div className={styles.Entertainment}>
            <div className={styles.container}>
                <div className={styles.titleEntertainment}>{translate.headerMenuEntertainment[lang]}</div>
                <div className={styles.entertainments}>

                {
                        globalSearchResult.data?.entertainment?.map(({id,name,name_am,name_ru,description,description_am,description_ru,thumbnail}) => {

                            return(
                                <Link key={id} href={`/entertainmentSinglePage/${id}`}><a>
                                    <div className={styles.background} style={{backgroundImage:`url(${HOST_API_IMG+thumbnail})`}}>
                                        <div className={styles.cardContent} style={{backgroundImage:`/img/entertainmentPage/secFilter/cardContent.svg`}}>
                                        <div className={styles.cardContentContainer}>  
                                            <div className={styles.title}>{lang == "en" ? name : lang == "ru" ? name_ru : name_am}</div>
                                            <div className={styles.description}>{lang == "en" ? description : lang == "ru" ? description_ru : description_am}</div>
                                            <div className={styles.arrowBlock}><img alt="arrow" src="/img/entertainmentPage/secFilter/Arrow.svg"/></div>
                                        </div> 
                                        </div>
                                </div>
                                </a>
                             </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default Entertainment