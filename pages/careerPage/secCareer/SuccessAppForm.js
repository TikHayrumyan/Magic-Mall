import styles from "../../../styles/sass/pages/careerPage/SecCareer/SuccessAppForm.module.scss"
import success from "../../../public/img/careerPage/successForm/success.svg"
import Image from "next/image"
import { translate } from "../../../translations"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"

const SuccessAppForm = props => {

    const {lang} = useGlobalProvider()

    return(<div className={styles.darkBackground} >
        <div className={styles.dark} id="darkLayer" onClick={(e) => {
        e.target.id == "darkLayer" ? props.onClose("close") : null
    }}></div>
            <div className={styles.SuccessAppForm}>
                <div className={styles.close} onClick={() =>props.onClose("close")}>&times;</div>
                <div className={styles.container}>
                    <div className={styles.successImg}><Image alt="success" src={success}/></div>
                    <div className={styles.thanks}>{translate.thanks[lang]}</div>
                    <div className={styles.MessageSend}>{translate.MessageHasBeenSent[lang]}</div>
                    <button className={styles.button} onClick={() =>props.onClose("close")}>{translate.buttonContinue[lang]}</button>
                </div>
            </div>
    </div>)
}



export default SuccessAppForm