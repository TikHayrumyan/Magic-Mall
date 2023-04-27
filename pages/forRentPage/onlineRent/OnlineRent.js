/* eslint-disable @next/next/no-img-element */

import styles from "../../../styles/sass/pages/forRentPage/onlineRent/onlineRent.module.scss"

import { useRef,useState} from "react"
import SuccessAppForm from "../../careerPage/secCareer/SuccessAppForm"
import axios from "axios"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"
import Link from "next/link"



const OnlineRent = () => {
    const [file,SetFile] = useState(null)
    const [successFormToggle,SetSuccessFormToggle] = useState(false)
    const {HOST_API,lang} = useGlobalProvider()
    const File = useRef(null)
    const addFIle = () => {
        File.current.click()
    }
    const deleteFile = () => {
        SetFile(null)
    }
    const send =async () => {
        if(file){
            
            const PremisesFile = new FormData();
            PremisesFile.append("file", file)
            try {
                const response = await axios({
                  method: "post",
                  url: HOST_API+"rent/file",
                  data:PremisesFile,
                  headers: { "Content-Type": "multipart/form-data" },
                });
                
               console.log(response,"ssssss");
               if(Object.keys(response.data).length == 0){
                SetFile(null)
                SetSuccessFormToggle(true)
                 
               }
                } catch(error) {
                console.log(error)
              }
  
        }else{
            SetSuccessFormToggle(false)
        }
    }
    return(
        <div className={styles.OnlineRent}>
            <div className={styles.container}>
                <div className={styles.descrip}>{translate.RentPageRentOnline[lang]}</div>
                <div className={styles.title}>{translate.RentPageDownloadApplicationForm[lang]}</div>
                <div className={styles.pdfBlock}>
                  <Link href="http://test.weflex.am/hayt.docx"><a target="_blank">
                    <div><img alt="pdf" type="file" src="/img/forRentPage/onlineRent/pdf.svg"/></div>
                    <div className={styles.applicationPaper}>{translate.RentPageApplicationForm[lang]}</div>
                    </a>
                    </Link>
                </div>
                <div className={styles.AttachApplicationBlock}>
                    <div onClick={addFIle} className={styles.AttachApplication}>
                        <div><img alt="attach" src="/img/forRentPage/onlineRent/attach.svg"/></div>
                        <span className={styles.attach}>{translate.RentPageAttachForm[lang]}</span>
                    </div>
                    <input style={{display:"none"}} type="file" ref={File} onChange={(e) => SetFile(e.target.files[0])}/>
                        <div className={styles.fileName}>{file != null ? file.name : null}{file != null ? <div className={styles.close} onClick={deleteFile}><img alt="close" src="/img/forRentPage/onlineRent/close.svg"/></div> : null}</div>
                </div>
                <button className={styles.button} onClick={send}>{translate.RentPageSendForm[lang]}</button>
            </div>
            {successFormToggle ? <SuccessAppForm onClose={send}/> : null}
        </div>
    )
}


export default OnlineRent