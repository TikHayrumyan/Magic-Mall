/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import styles from "../../styles/sass/pages/careerPage/SecCareer/career.module.scss"

import ApplicationForm from "./secCareer/ApplicationForm"
import SuccessAppForm from "./secCareer/SuccessAppForm"
import { useGlobalProvider } from "../../components/Providers/GlobalProvider"
import { translate } from "../../translations"

const Career = () => {
    const parse = require("html-react-parser")
    const {careerData,GetCareerPageData,lang} = useGlobalProvider()
    const [togglePlus,SetTogglePlus] = useState(-1)
    const [showPopUp,SetShowPopUp] = useState(false)
    const [successFormToggle,SetSuccessFormToggle] = useState(false)
    const [inputsData, setInputsData] = useState({});
    
    const toggleShowPlus = num => SetTogglePlus(num == togglePlus ? -1 : num)
    const togglePopUp = param => {
        SetShowPopUp(!showPopUp)
        setInputsData(param)
    }
    
    const closePopup = (param) => {
        if(param == "close"){
            SetShowPopUp(false)
            SetSuccessFormToggle(false)
        }else{
            SetShowPopUp(false)
            SetSuccessFormToggle(true)
        }
    }

    useEffect(() => {
        GetCareerPageData()
    },[GetCareerPageData])

    useEffect(() => {

    },[careerData.loading])


        return(<>
        {careerData.loading == true ? <div className={styles.Career}>
            <div className={styles.backgroundPattern}><img alt="backgroundPattern" src="/img/careerPage/backgroundPattern.svg"/></div>
            <div className={styles.titleContainer}>
                    <div className={styles.titleBlock}>
                        <div className={styles.title}>{translate.CareerPageTitle[lang]}</div>
                    </div>
            </div>
            <div className={styles.careerMain}>
                <div className={styles.container}>
                    {
                        careerData.data.length && careerData.data.map(({id,title,title_am,title_ru,content,content_am,content_ru}) => {
                            return(
                                <>
                                    <div className={styles.storage} key={id}>
                                        <div onClick={() => toggleShowPlus(id)}>
                                            <span className={togglePlus !== id ? styles.plus : styles.plusNone}>+</span>
                                            <span className={togglePlus !== id ? styles.minusNone : styles.minus}>-</span>
                                        </div>
                                        <h3 onClick={() => toggleShowPlus(id)} className={styles.storageWorker}>{lang == "en" ? title : lang == "ru" ? title_ru : title_am}</h3>               
                                    </div>
                                    <div className={togglePlus !== id ? styles.descriptionBlockNone : styles.descriptionBlock}>
                                        <div className={styles.descriptionContainer}>
                                                {lang == "en" ? parse(content) : lang == "ru" ? parse(content_ru) : parse(content_am)}
                                            <button className={styles.buttonApply} onClick={() => togglePopUp({position: (lang == "en" ? title : lang == "ru" ? title_ru : title_am)})}>{translate.buttonApplyPosition[lang]}</button>
                                        </div>
                                    </div>
                                </>
                            )
                        }) 
                    }
                </div>
            </div>
            {
                showPopUp ?  <ApplicationForm inputsData={inputsData} writing={"disallow"} onclose={closePopup} /> : null               
            }
            {successFormToggle ? <SuccessAppForm onClose={closePopup}/>  : null}
        </div>  : <div className={styles.notPosition}>{translate.CareerNotPosition[lang]} </div> }
        </>
    )
}


export default Career