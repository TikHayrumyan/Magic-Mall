import styles from "../../../styles/sass/pages/careerPage/secCv/secCv.module.scss"
import Image from "next/image"
import ApplicationForm from "../secCareer/ApplicationForm"
import SuccessAppForm from "../secCareer/SuccessAppForm"
import { useState } from "react"
import { translate } from "../../../translations"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"

const SecCv = props => {

    const [showPopUp,SetShowPopUp] = useState(false)
    const [successFormToggle,SetSuccessFormToggle] = useState(false)
    const [inputsData, setInputsData] = useState({});
    const {lang} = useGlobalProvider()
    
    const openPopUp = param => {
    
        SetShowPopUp(!showPopUp)
        setInputsData(param)
    }
    const togglePopUp = (param) => {
        if(param == "close"){
            SetShowPopUp(false)
            SetSuccessFormToggle(false)
        }else{
            SetShowPopUp(false)
            SetSuccessFormToggle(true)
            
        }
    }

    return(<div className={styles.forDarkShadow}>
        <div className={styles.SecCv}> 
            <div className={styles.container}>
                <div className={styles.pattern}><Image alt="pattern" src="/img/careerPage/secCv/pattern.svg"/></div>
                <div>
                    <div className={styles.descrip}>{translate.SecCVdescription[lang]}</div>
                    <button className={styles.apply} onClick={() => openPopUp({position: `${translate.applicationFormPosition[lang]}`})}>{translate.CareerPageApply[lang]}</button>
                </div>
                
            </div>
            <button className={styles.MobileApply} onClick={() => openPopUp({position: `${translate.applicationFormPosition[lang]}`})}>{translate.CareerPageApply[lang]}</button>
        </div>
        {showPopUp ? <ApplicationForm writing={"allow"} inputsData={inputsData} onclose={togglePopUp}/> : null}
            {successFormToggle ? <SuccessAppForm onClose={togglePopUp}/>  : null}
        </div>
    )
}


export default SecCv