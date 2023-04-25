import { useState ,useRef, useEffect} from "react"
import styles from "../../../styles/sass/pages/forRentPage/PremisesRent/premisesRent.module.scss"
import SuccessAppForm from "../../careerPage/secCareer/SuccessAppForm"
import axios from "axios"
import {useGlobalProvider} from "../../../components/Providers/GlobalProvider"
import {translate} from "../../../translations"

const PremisesRent = () => {
    let today = new Date()

    const [username,SetUsername] = useState("")
    const [company,SetCompany] = useState("")
    const [position,SetPosition] = useState("")
    const [workType,SetWorkType] = useState("")
    const [workInfo,SetWorkInfo] = useState("")
    const [contactNumber,SetContactNumber] = useState("")
    const [mail,SetMail] = useState("")
    const [applicant,SetApplicant] = useState("")
    const [zero,SetZero] = useState("")
    const [until,SetUntil] = useState("")
    const [textArea,SetTextArea] = useState("")
    const [otherNumber,SetOtherNumber] = useState("")
    const [date,SetDate] = useState(today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate())
    const [checked,SetChecked] = useState(false)
    const [boxChecked,SetBoxChecked] = useState(false)
    const [SecBoxChecked,SetSecBoxChecked] = useState(false)
    const [successFormToggle,SetSuccessFormToggle] = useState(false)
    const executeScroll = () => MyRef.current.scrollIntoView()
    const MyRef = useRef(null)
    const [errors,SetErrors] = useState({})
    
    const {HOST_API,lang} = useGlobalProvider()

    const send =async(params) => {
        console.log(params,"params");
        const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let  emailTest = emailReg.test(String( mail ))
        if(params == "close"){
            SetSuccessFormToggle(false)
            SetUsername("")
            SetCompany("")
            SetPosition("")
            SetWorkType("")
            SetWorkInfo("")
            SetMail("")
            SetContactNumber("")
            SetApplicant("")
            SetZero("")
            SetUntil("")
            SetTextArea("")
            SetOtherNumber("")
            SetDate(today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate())
            SetChecked(false)
            return
        }
        var AllErrors = {}
        if(!username.length){
            executeScroll()
            AllErrors.username = translate.errorMessages[lang]
            SetErrors({
                ...AllErrors,
            })
        }else{
            delete AllErrors.username
            SetErrors({
                ...AllErrors
            })
        }
        if(!company.length){
            executeScroll()
            AllErrors.company = translate.errorMessages[lang]
            SetErrors({
                ...AllErrors,
                
            })

        }else{
            delete AllErrors.company
            SetErrors({
                ...AllErrors
            })
        }
        if(!position.length){
            executeScroll()
            AllErrors.position = translate.errorMessages[lang]
            SetErrors({
                ...AllErrors,
                
            })
        }else{
            delete AllErrors.position
            SetErrors({
                ...AllErrors
            })
        }
        if(!workType.length){
            executeScroll()
            AllErrors.workType = translate.errorMessages[lang]
            SetErrors({
                ...AllErrors,
            })
        }else{
            delete AllErrors.workType
            SetErrors({
                ...AllErrors
            })
        }
        if(!workInfo.length){
            executeScroll()
            AllErrors.workInfo = translate.errorMessages[lang]
            SetErrors({
                ...AllErrors,
            })
        }else{
            delete AllErrors.workInfo
            SetErrors({
                ...AllErrors
            })
        }
        if(!contactNumber.length){
            AllErrors.contactNumber = translate.errorMessages[lang]
            SetErrors({
                ...AllErrors,
            })
        }else{
            delete AllErrors.contactNumber
            SetErrors({
                ...AllErrors
            })
        }
        if(!mail.length || !emailTest){
            AllErrors.mail = translate.errorMessages[lang]
            
            SetErrors({
                ...AllErrors,
            })
        }else{
            delete AllErrors.mail
            SetErrors({
                ...AllErrors
            })
        }
        if(!applicant.length){
            AllErrors.applicant = translate.errorMessages[lang]
            SetErrors({
                ...AllErrors,
            })
        }else{
            delete AllErrors.applicant
            SetErrors({
                ...AllErrors
            })
        }
        if(!checked){
            AllErrors.checked = false
            SetErrors({
                ...AllErrors,
            })
        }else{
            delete AllErrors.checked
            SetErrors({
                ...AllErrors,
            })
            SetChecked(true)
        }

        if(Object.keys(AllErrors).length == 0 && params.onClose != "close"){
            const PremisesFormData = new FormData();
            PremisesFormData.append("name", username)
            PremisesFormData.append("director", position)
            PremisesFormData.append("company", company)
            PremisesFormData.append("industry", workType)
            PremisesFormData.append("companyTel", workInfo)
            PremisesFormData.append("rentForm", zero)
            PremisesFormData.append("rentForm", until)
            PremisesFormData.append("area",boxChecked)
            PremisesFormData.append("island",SecBoxChecked)
            PremisesFormData.append("notes",textArea)
            PremisesFormData.append("phone",contactNumber)
            PremisesFormData.append("addPhone",otherNumber)
            PremisesFormData.append("email",mail)
            PremisesFormData.append("applicant",applicant)
            PremisesFormData.append("date",date)
            try {
              // make axios post request
              const response = await axios({
                method: "post",
                url: HOST_API+"rent",
                data:PremisesFormData,
                headers: {"Content-Type": "multipart/form-data"},
              });
              
             console.log(response,"ssssss");
             if(Object.keys(response.data).length == 0){
                SetSuccessFormToggle(true)
                SetUsername("")
                SetCompany("")
                SetPosition("")
                SetWorkType("")
                SetWorkInfo("")
                SetMail("")
                SetContactNumber("")
                SetApplicant("")
             }
              } catch(error) {
              console.log(error)
            }

            
        }
        else{
            SetSuccessFormToggle(false)  
        }
    }
    
     
    
   

    return(
        <div className={styles.PremisesRent}>
            <div className={styles.titleBlock}>
                <div className={styles.title}>{translate.RentPageRentalArea[lang]}</div>
            </div>
            <div className={styles.container} ref={MyRef}>
                <div className={styles.description}>{translate.RentPageCommercialPremises[lang]}</div>
                <div className={styles.companyInfo}>{translate.RentPageCompanyInformaion[lang]}</div>
                <div className={styles.inputs} >
                    <div className={styles.userNameBlock}>
                        <input type="text" placeholder={`${translate.RentPageInputName[lang]}`} value={username}
                            onChange={e => SetUsername(e.target.value)}/>
                        {errors.username && <span className={styles.warning}>{errors.username}</span>}
                    </div>
                    <div className={styles.companyName}>
                        <input type="text" placeholder={`${translate.RentPageInputOrganizationName[lang]}`}  value={company}
                            onChange={e => SetCompany(e.target.value)}/>
                        {errors.company && <span className={styles.warning}>{errors.company}</span>}
                    </div>
                    <div>
                        <input type="text" placeholder={`${translate.RentPageInputPosition[lang]}`} value={position}
                            onChange={e => SetPosition(e.target.value)}/>
                        {errors.position && <span className={styles.warning}>{errors.position}</span>}
                    </div>
                    <div>
                    <input type="text" placeholder={`${translate.RentPageInputTypeActivity[lang]}`} value={workType}
                            onChange={e => SetWorkType(e.target.value)}/>
                    {errors.workType && <span className={styles.warning}>{errors.workType}</span>}
                    </div>
                    <div>
                    <input type="text" placeholder={`${translate.RentPageInputAddresAndNumber[lang]}`} value={workInfo}
                            onChange={e => SetWorkInfo(e.target.value)}/>
                    {errors.workInfo && <span className={styles.warning}>{errors.workInfo}</span>}
                    </div>
                </div>
                <div className={styles.wantToRent}>{translate.RentPageWantRent[lang]}</div>
                <div className={styles.inputsFromTo}>
                    <input type="number" placeholder="0" value={zero} onChange={e => SetZero(e.target.value)}/>
                    <input type="nuumber" placeholder={`${translate.RentPageTill[lang]}`} value={until} onChange={e => SetUntil(e.target.value)}/>
                </div>
                <div className={styles.chekboxBLock}>
                    <div><input type="checkbox" value={boxChecked} onChange={(e) => SetBoxChecked(e.target.checked)}/>{translate.RentPageCheckboxArea[lang]}</div>
                    <div><input type="checkbox" value={SecBoxChecked} onChange={(e) => SetSecBoxChecked(e.target.checked)}/>{translate.RentPageCheckboxIslands[lang]}</div>
                </div>
                <textarea className={styles.textarea} placeholder={`${translate.RentPageAdditionalInformation[lang]}`} value={textArea} onChange={e => SetTextArea(e.target.value)}/>
                <div className={styles.contactInfoTitle}>{translate.RentPageContactInformation[lang]}</div>
                <div className={styles.contactInputs}>
                        <div className={styles.contactNumber}>
                            <input type="text" placeholder={`${translate.RentPageContactNumber[lang]}`} value={contactNumber}
                            onChange={e => SetContactNumber(e.target.value)}/>
                            {errors.contactNumber && <span className={styles.warning}>{errors.contactNumber}</span>}
                        </div>
                        <div className={styles.elseNumber}>
                            <input type="text" placeholder={`${translate.RentPageAdditionalNumber[lang]}`} value={otherNumber} onChange={e => SetOtherNumber(e.target.value)}/>
                        </div>
                        <div>
                            <input type="email" placeholder={`${translate.RentPageEmail[lang]}`} value={mail}
                            onChange={e => SetMail(e.target.value)}/>
                            {errors.mail && <span className={styles.warning}>{errors.mail}</span>}
                        </div>
                        <div>
                            <input type="text" placeholder={`${translate.RentPageApplicant[lang]}`} value={applicant}
                            onChange={e => SetApplicant(e.target.value)}/>
                            {errors.applicant && <span className={styles.warning}>{errors.applicant}</span>}
                        </div>
                        <div>
                            <input type="text" placeholder={date.toString()} disabled />
                        </div>
                    </div>
                    <div className={styles.checkBlock}>
                    <input type="checkbox" className={errors.checked == false ? styles.notChecked : styles.checked} value={checked} onChange={(e) => SetChecked(e.target.checked)}/>
                    <div className={styles.agree}>{translate.RentPageAgreeTermsLeft[lang]}<span>{translate.RentPageAgreeTermsRight[lang]}</span></div>
                </div>
                <div className={styles.btnBlock}>
                    <button className={styles.button} onClick={send}>{translate.RentPageRentButton[lang]}</button>
                </div>
            </div>
            {successFormToggle ? <SuccessAppForm onClose={send} SetSuccessFormToggle={SetSuccessFormToggle}/> : null}

        </div>
    )
}

export default PremisesRent