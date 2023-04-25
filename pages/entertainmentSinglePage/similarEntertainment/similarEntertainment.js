import styles from "../../../styles/sass/pages/entertainmentSinglePage/similarEntertainment/similarEntertainment.module.scss"
import background from "../../../public/img/entertainmentSinglePage/secSimilar/imgR.svg"
import Arrow from "../../../public/img/entertainmentPage/secFilter/Arrow.svg"
import Image from "next/image"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import Link from "next/link"
import { translate } from "../../../translations"

const SimilarEntertainment = ({related,loading}) => {
    
    const {HOST_API_IMG,lang} = useGlobalProvider()
    function shorten(text, maxLength) {
        var ret = text;
        if (ret?.length > maxLength) {
            ret = ret.substr(0,maxLength) + "...";
        }
        return ret;
    }

    return(
        <>
        <div className={styles.SimilarEntertainment}>
        {related &&  <>  <div className={styles.container}>
                    <div className={styles.titleBlock}>
                        <div className={styles.title}>{translate.EntertainmentPageSimilarEntertainment[lang]}</div>
                    </div>
                    </div>
            <div className={styles.imgBlock}>
            {
                    related?.map(({id,thumbnail,name,name_am,name_ru,description,description_am,description_ru}) => {
                        return(
                            <Link key={id} href={`/entertainmentSinglePage/${id}`}><a>
                                <div className={styles.background} style={{backgroundImage:`url(${HOST_API_IMG+thumbnail})`}}>
                                    <div className={styles.cardContent}>
                                    <div className={styles.cardContentContainer}>  
                                        <div className={styles.title}>{lang == "en" ? name : lang == "ru" ? name_ru : name_am}</div>
                                        <div className={styles.description}>{lang == "en" ? shorten(description,80) : lang == "ru" ? shorten(description_ru,80) : shorten(description_am,80)}</div>
                                        <div className={styles.arrowBlock}><Image alt="arrow" src={Arrow}/></div>
                                    </div> 
                                    </div>
                                </div>
                        </a></Link>
                        )
                    })
                }
            </div>
            </>
        }
        </div>
        </>
    )
}


export default SimilarEntertainment