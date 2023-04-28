/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import styles from "../../styles/sass/pages/HomePage/secFirstOutletMall/firstOutletMall.module.scss"
import {useGlobalProvider} from "../../components/Providers/GlobalProvider"
import { useEffect } from "react"
import { translate } from "../../translations"

const FirstOutletMall = () => {

    const {GetFirstOutletMallData,
        firstMallData,HOST_API_IMG,lang
    } = useGlobalProvider()

    useEffect(() => {
        GetFirstOutletMallData()
    },[])
    useEffect(() => {
        
    },[firstMallData.loading])
    
    return(<>
        {firstMallData.loading && <div className={styles.firstOutletMall}>
            <div className={styles.container}>
                <div className={styles.titleBlock}>
                    <div className={styles.pattern}><img alt="pattern" src="/img/homePage/secBlog/firstPattern.svg"/></div>
                    <div className={styles.titleDescripBlock}>
                        <div className={styles.title}>{lang == "en" ? firstMallData.data.title : lang == "am" ? firstMallData.data.title_am : firstMallData.data.title_ru}</div>
                        <div className={styles.descrip}>
                                {lang == "en" ? firstMallData.data.description : lang == "am" ? firstMallData.data.description_am : firstMallData.data.description_ru}
                        </div>
                    </div>
                </div>
                <div className={styles.descriptionMobile}> {lang == "en" ? firstMallData.data.description : lang == "am" ? firstMallData.data.description_am : firstMallData.data.description_ru}</div>

                <div className={styles.descriptionContainer}>
                        <div>
                            <img alt="outlet-mall" className={styles.FirstOutletMallImage} src={HOST_API_IMG+firstMallData.data?.image}/>
                        </div>
                </div>
                {/* <div className={styles.hoverBlock}>
                        <button className={styles.button}>{translate.buttonSeeMore[lang]}</button>
                        <div className={styles.buttonIcon}><img alt="arrRight" src={arrRight}/></div>
                </div> */}
            </div>
    </div>}
    </>)
}


export default FirstOutletMall