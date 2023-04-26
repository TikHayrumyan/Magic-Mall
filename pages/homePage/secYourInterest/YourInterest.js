import styles from "../../../styles/sass/pages/HomePage/secYourInterest/YourInterest.module.scss"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { useEffect } from "react"
import Link from "next/link"
import { translate } from "../../../translations"

const YourInterest =() =>{

    const {GetInterested,interestedData,HOST_API_IMG,lang} = useGlobalProvider()

    useEffect(() => {
        GetInterested()
    },[GetInterested])

    useEffect(() => {

    },[interestedData.loading])

    return(

        <div className={styles.yourInterest}>
            <div className={styles.container}>
                <div className={styles.question}>{translate.YourInterestTitle[lang]}</div>
            {interestedData.loading && <>
               
                <div className={styles.secondBlock}>
                <Link href={interestedData.data[2].link}>
                    <a>
                      <div className={styles.thirdPic} style={{backgroundImage:`url(${HOST_API_IMG+interestedData.data[2].image})`}}><span className={styles.title}>{lang == "en" ? interestedData.data[2].title : lang == "ru" ? interestedData.data[2].title_ru : interestedData.data[2].title_am}</span></div>
                    </a>
                </Link>  
                <Link href={interestedData.data[3].link}>
                    <a>
                    <div className={styles.fourPic} style={{backgroundImage:`url(${HOST_API_IMG+interestedData.data[3].image})`}}><span className={styles.title}>{lang == "en" ? interestedData.data[3].title : lang == "ru" ? interestedData.data[3].title_ru : interestedData.data[3].title_am}</span></div>
                    </a>
                </Link>  
                </div>
                <div className={styles.thirdBlock}>
                    <div className={styles.fiveAndSixBlock}>
                        <Link href={interestedData.data[4].link}>
                            <a>
                            <div className={styles.fivePic} style={{backgroundImage:`url(${HOST_API_IMG+interestedData.data[4].image})`}}><span className={styles.title}>{lang == "en" ? interestedData.data[4].title : lang == "ru" ? interestedData.data[4].title_ru : interestedData.data[4].title_am}</span></div>
                            </a>
                        </Link>
                        <Link href={interestedData.data[5].link}>
                            <a>
                            <div className={styles.sixPic} style={{backgroundImage:`url(${HOST_API_IMG+interestedData.data[5].image})`}}><span className={styles.title}>{lang == "en" ? interestedData.data[5].title : lang == "ru" ? interestedData.data[5].title_ru : interestedData.data[5].title_am}</span></div>
                            </a>
                        </Link>
                    </div>
                        <Link href={interestedData.data[6].link}>
                        <a>
                            <div className={styles.sevenPic} style={{backgroundImage:`url(${HOST_API_IMG+interestedData.data[6].image})`}}><span className={styles.title}>{lang == "en" ? interestedData.data[6].title : lang == "ru" ? interestedData.data[6].title_ru : interestedData.data[6].title_am}</span></div>
                        </a>
                        </Link>
                </div>
            </> }
            </div>
        </div>
       
    )
}


export default YourInterest