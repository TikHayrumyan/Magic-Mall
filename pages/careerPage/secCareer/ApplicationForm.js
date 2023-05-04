import Image from "next/image"
import styles from "../../../styles/sass/pages/careerPage/SecCareer/applicationForm.module.scss"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"

const ApplicationForm = props => {
    const inputFile = useRef(null)
    const addFIle = () => {
        inputFile.current.click()
    }
    const MyRef = useRef(null)
    const executeScroll = () => MyRef.current.scrollIntoView()
    useEffect(() => {
        executeScroll()
    },[])
    const {HOST_API,lang} = useGlobalProvider()
    const [position, setPosition] = useState("");
    const [positionError,SetPositionError] = useState(false)
    const [username,SetUsername] = useState("")
    const [usernameError,SetUsernameError] = useState(false)
    const [email,SetEmail] = useState("")
    const [emailError,SetEmailError] = useState(false)
    const [number,SetNumber] = useState("")
    const [numberError,SetNumberError] = useState(false)
    const [file,SetFile] = useState(null)
    const [fileError,SetFileError] = useState(false)
    const [comment,SetComment] = useState("")
    const [checked,SetChecked] = useState(false)
    const [styleCheck,SetStyleCheck] = useState(true)


    const send =async() => {
        const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let  emailTest = emailReg.test(String( email ))
        if (!position.length) return SetPositionError(true)
        if (!username.length) return SetUsernameError(true)
        if (!email.length) return SetEmailError(true)
        if (!emailTest) return SetEmailError(true)
        if (!number.length) return SetNumberError(true)
        if (file == null) return SetFileError(true)
        if(checked == false) {
            SetStyleCheck(false)
            return SetChecked(false)
        }else{
            SetChecked(true)
            SetStyleCheck(true)
        }
        props.onclose("send")
        
        const PremisesFormData = new FormData();
        PremisesFormData.append("file", file)
        PremisesFormData.append("job", position)
        PremisesFormData.append("name", username)
        PremisesFormData.append("comment", comment)
        PremisesFormData.append("phone", number)
        PremisesFormData.append("email", email)
        try {
            // make axios post request
            const response = await axios({
              method: "post",
              url: HOST_API+"career/cv",
              data:PremisesFormData,
              headers: { "Content-Type": "multipart/form-data" },
            });
            
           if(Object.keys(response.data).length == 0){
            SetUsername("")
            setPosition("")
            SetComment("")
            SetNumber("")
            SetEmail("")
         }
           
            } catch(error) {
            console.log(error)
          }
    }
    useEffect (() => {
        if(props?.writing !== "allow"){
            setPosition(props.inputsData?.position)
            
        }
    },[props.inputsData?.position, props?.writing])
   
    
    return(
    <div className={styles.backgroundShadow} >
        <div className={styles.darkShadow}  id='dark_layer' onClick={(e) => {
        e.target.id == "dark_layer" ? props.onclose("close") : false}}/>
        <div className={styles.ApplicationForm} ref={MyRef}>
            <div className={styles.container}>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>{translate.Application[lang]}</div> 
                </div>
                <div className={styles.inputs}>
                    <div>
                        <input className={styles.work}  disabled={props.writing === "disallow" && true}
                                onChange={e => setPosition(e.target.value)}
                                value={props.writing && props.writing === "disallow" ? props.inputsData?.position : position}
                                placeholder={props.inputsData ? props.inputsData.position : ''}/>
                        <span className={positionError ? styles.warning : styles.success}>{translate.errorMessages[lang]}</span>
                    </div>
                    <div>
                        <input className={styles.name} placeholder={translate.ContactPageNameSurname[lang]} onChange={e => SetUsername(e.target.value)}
                        value={username}/>
                        <span className={usernameError ? styles.warning : styles.success}>{translate.errorMessages[lang]}</span>
                    </div>
                </div>
                <div className={styles.inputs}>
                    <div>
                        <input className={styles.work} type="email" placeholder={translate.ContactPageEmail[lang]}
                        value={email}
                        onChange={e => SetEmail(e.target.value)}
                        
                        />
                        <span className={emailError ? styles.warning : styles.success}>{translate.errorMessages[lang]}</span>
                    </div>
                    <div>
                        <input className={styles.name} type="number" placeholder={translate.applicationFormPhoneNumber[lang]}
                        onChange={e => SetNumber(e.target.value)}
                        />
                        <span className={numberError ? styles.warning : styles.success}>{translate.errorMessages[lang]}</span>
                    </div>
                </div>
                <textarea className={styles.textarea} placeholder={translate.applicationFormComment[lang]}  onChange={e => SetComment(e.target.value)}/>
                <div className={styles.saveCvBLock}>
                    <div onClick={addFIle} className={styles.saveIcon}><Image alt="paperclip" src="/img/entertainmentPage/ApplicationForm/paperclip.svg" width={23} height={23}/></div>
                    <div 
                      className={!fileError ? styles.saveCv : styles.saveCvError} 
                      onClick={addFIle}>{translate.attachResume[lang]} 
                      <input 
                         style={{display: "none"}} 
                         ref={inputFile} 
                         type="file" 
                         onChange={(e) => SetFile(e.target.files[0])}/>
                    </div>
                    <div>{file !== null ? file.name : null}</div>
                </div>
                <div className={styles.checkBlock}>
                    <input type="checkbox" className={styleCheck == false ? styles.notChecked : styles.checked} value={checked} onChange={(e) => SetChecked(e.target.checked)}/>
                    <div className={styles.agree}>{translate.RentPageAgreeTermsLeft[lang]} <span className={styles.span}>{translate.RentPageAgreeTermsRight[lang]}</span></div>
                </div>
                <button className={styles.send} onClick={send}>{translate.ContactPageSendButton[lang]}</button>
            </div>
            <div className={styles.close} onClick={()=> props.onclose("close")}>&times;</div>
            
        </div>
    </div>
    )
}


export default ApplicationForm