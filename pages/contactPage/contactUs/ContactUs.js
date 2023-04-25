import { useState } from "react"
import styles from "../../../styles/sass/pages/contactPage/contactUs/contactUs.module.scss"
import SuccessAppForm from "../../careerPage/secCareer/SuccessAppForm"
import axios from "axios"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"


const ContactUs = () => {
    
    const {HOST_API,lang} = useGlobalProvider()
    const [username,SetUsername] = useState("")
    const [number,SetNumber] = useState("")
    const [email,SetEmail] = useState("")
    const [message,SetMessage] = useState("")
    const [usernameError,SetUsernameError] = useState(false)
    const [numberError,SetNumberError] = useState(false)
    const [emailError,SetEmailError] = useState(false)
    const [successFormToggle,SetSuccessFormToggle] = useState(false)
    const [checked,SetChecked] = useState(false)
    const [styleCheck,SetStyleCheck] = useState(true)

    const send =async(param) => {
        const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let  emailTest = emailReg.test(String( email ))
        if (!username.length) return SetUsernameError(true)
        if (!number.length) return SetNumberError(true)
        if (!email.length) return SetEmailError(true)
        if (!emailTest) return SetEmailError(true)
        if(checked == false) {
            SetStyleCheck(false)
            return SetChecked(false)
        }else{
            SetChecked(true)
            SetStyleCheck(true)
        }

        const PremisesFormData = new FormData();
        PremisesFormData.append("name", username)
        PremisesFormData.append("message", message)
        PremisesFormData.append("phone", number)
        PremisesFormData.append("email", email)

        try {
            // make axios post request
            const response = await axios({
              method: "post",
              url: HOST_API+"contactUs",
              data:PremisesFormData,
              headers: { "Content-Type": "multipart/form-data" },
            });
            
           console.log(response,"ssssss");
                if(param == "close" && Object.keys(response.data).length == 0){
                    SetSuccessFormToggle(false)
                    SetUsername("")
                    SetNumber("")
                    SetEmail("")
                    SetMessage("")
                    SetUsernameError(false)
                    SetNumberError(false)
                    SetEmailError(false)
                    SetChecked(false)
                }else{
                    SetSuccessFormToggle(true)  
                }
         }catch(error) {
            console.log(error)
          }
    }
    return(
        <div className={styles.ContactUs}>
            <div className={styles.container}>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>{translate.ContactPageApplyToUs[lang]}</div>
                </div>
                <div className={styles.inputsBlock}>
                    <div className={styles.inputs}>
                        <div>
                            <input className={styles.userName} type="text" placeholder={translate.ContactPageNameSurname[lang]} value={username}
                            onChange={e => SetUsername(e.target.value)}/>
                            <span className={usernameError ? styles.warning : styles.success}>{translate.errorMessages[lang]}</span>
                        </div>
                        <div>
                            <input className={styles.number} type="number" placeholder={translate.ContactPageTel[lang]} value={number}
                            onChange={e => SetNumber(e.target.value)}/>
                            <span className={numberError ? styles.warning : styles.success}>{translate.errorMessages[lang]}</span>
                        </div>
                        <div>
                            <input className={styles.email} type="email" placeholder={translate.ContactPageEmail[lang]} value={email}
                            onChange={e => SetEmail(e.target.value)}/>
                            <span className={emailError ? styles.warning : styles.success}>{translate.errorMessages[lang]}</span>
                        </div>
                    </div>
                    <div className={styles.textAreas}>
                        <textarea className={styles.textArea} placeholder={translate.ContactPageMessage[lang]}
                         onChange={e => SetMessage(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.buttonAndChekbox}>
                    <div className={styles.checkBlock}>
                        <input type="checkbox" className={styleCheck == false ? styles.notChecked : styles.checked} value={checked} onChange={(e) => SetChecked(e.target.checked)}/>
                        <div className={styles.agree}>{translate.ContactPageAgreeToTermsLeft[lang]}<span className={styles.span}>{translate.ContactPageAgreeToTermsRight[lang]}</span></div>
                    </div>
                    <button className={styles.send} onClick={send}>{translate.ContactPageSendButton[lang]}</button>
                </div>
            </div>
            {successFormToggle ? <SuccessAppForm onClose={send}/> : null}
        </div>
    )
}



export default ContactUs