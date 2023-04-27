/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/HomePage/secCardSubscribe/cardSubscribe.module.scss"
// import svarovski from "../../../public/img/homePage/secCardSubscribe/svarovski.svg"


import { useEffect, useState } from "react"
import axios from "axios";
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"

const CardSubscribe = () =>{
    const {HOST_API,lang} = useGlobalProvider()
    const [email,SetEmail] = useState("")
    const [checked,SetChecked] = useState(false)
    const [errors,SetErrors] = useState({})
    const [success,SetSuccess] = useState(false)
    useEffect(() => {
        
    },[email])
    
    
    const SendEmail = async(e)=>{
        e.preventDefault()
        if(!checked){
            SetErrors({
                checked: "checked required"
            })
            SetSuccess(false)
            return
        }
        
        if(email == ""){
            SetErrors({
                email: "email use required"
            })
            SetSuccess(false)
            return
        }
        const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let  emailTest = emailReg.test(String( email ))
        if(!emailTest){
            SetErrors({
                email: "invalid email"
            })
            SetSuccess(false)
            return
        }
        const jsonObject = {
            email: email
        }
        try {
            const emailResponse = await axios({
                url: HOST_API+"subscribe",
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                  },
                  data:JSON.stringify(jsonObject)
                  
            })
            
            if(emailResponse.data == "success" && emailResponse.status == 200){
                SetErrors({})
                SetEmail("")
                SetSuccess(true)
            }else if(emailResponse.data.error){
                SetErrors({
                    ...emailResponse.data
                })
                
            }
        } catch (error) {
            console.log(error);
        }
    } 
    

    return(
        <div className={styles.cardSubscribe}>
            <div className={styles.container}>
                <div className={styles.cardBackground} style={{ backgroundImage: 'url(/img/homePage/secCardSubscribe/background.jpg)'}}>
                    {/* <div className={styles.title}><Image alt="name" src={svarovski}/></div> */}
                    {/* <div className={styles.info}>ԲԱՑՈՒՄԸ ՇՈՒՏՈՎ</div> */}
                </div>
                <div className={styles.cardMain}>
                    <div className={styles.subscribe}>{translate.CardSubscribeTitle[lang]}</div>
                    <div className={styles.description}>{translate.CardSubscribeDescription[lang]}</div>
                    <form className={styles.inputBlock} onSubmit={SendEmail}>
                        <input className={styles.input} 
                        value={email}
                        type="text" 
                        placeholder={translate.EmailAddress[lang]}
                        onChange={(e) => SetEmail(e.target.value)}
                        />
                        <button className={styles.button} >
                            <img alt="button" src="/img/homePage/secCardSubscribe/button.svg"/>
                        </button>
                    </form >
                    <div>
                        {errors.email ? <div className={styles.invalidEmail}>{translate.wrongEmail[lang]}</div> : null}
                        {success  ? <div className={styles.success}>{translate.successfullySubscribed[lang]}</div> : null }
                    </div>
                    <div className={styles.accessBlock}>
                        <input type="checkbox" className={errors.checked ? styles.notChecked : checked} onChange={(e) => SetChecked(e.target.checked)}/>
                        <div className={styles.agree}>{translate.CardSubscribeAgreeTermsLeft[lang]}<span>{translate.CardSubscribeAgreeTermsRight[lang]}</span></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
    }



export default CardSubscribe