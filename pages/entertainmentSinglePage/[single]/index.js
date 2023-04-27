import styles from "../../../styles/sass/pages/entertainmentSinglePage/secEntertainment/secEntertainment.module.scss"
import Link from "next/link"
import Image from "next/image"
import RightArrow from "../../../public/img/entertainmentSinglePage/secEntertainment/Rarrow.svg"
import phoneIcon from "../../../public/img/entertainmentSinglePage/secMain/phoneIcon.svg"
import facebook from "../../../public/img/icons/Facebook.svg"
import instagram from "../../../public/img/icons/Instagram.svg"
import Linkdin from  "../../../public/img/entertainmentSinglePage/secMain/Linkdin.svg"
import {useRouter} from "next/router"
import { useEffect, useState } from "react"
import  axios from "axios"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import SecMain from "../secMain"
import SecMap from "../secMap/secMap"
import SimilarEntertainment from "../similarEntertainment/similarEntertainment"
import CardSubscribe from "../../homePage/secCardSubscribe/CardSubscribe"
import parse from "html-react-parser"
import mobilePattern from "../../../public/img/entertainmentSinglePage/secEntertainment/mobilePattern.svg"
import { translate } from "../../../translations"

const SecEntertainment = () =>{
    const parse = require("html-react-parser")
    const {HOST_API,HOST_API_IMG,lang} = useGlobalProvider()
    const router = useRouter()
    const {single} = router.query
    const [activeSinglePage,SetActiveSinglePage] = useState({
        data:{},
        loading:false
    })

    useEffect(() => {
        const GetSingleData = async(params) => {
            try {
                const response = await axios({
                    url: HOST_API+`entertianment/${params}`,
                    method:"GET"
                })
                console.log(response,"datanaaa");
                if(Object.keys(response.data).length && response.status == 200){
                    SetActiveSinglePage({
                        data:response.data,
                        loading:true
                    })
                }
            } catch (error) {
                console.log(error);
            }
        
        }
        GetSingleData(single)
    },[HOST_API, single])



    return(
        <>
        <SecMain data={activeSinglePage.data.entertainment}/>
        {activeSinglePage.loading && <div className={styles.SecEntertainment}>
            <div className={styles.container}>
                <div className={styles.goBackBlock}>
                        <Link href="/entertainmentPage">
                        <a>
                        <div className={styles.forHover}>
                            <div className={styles.arrow}><Image alt="arrow" width={32} height={18} src={RightArrow}/></div>
                            <div className={styles.goBack}>{translate.headerMenuEntertainment[lang]}</div>
                        </div>
                        </a>
                        </Link>
                </div>
                <div className={styles.MobileSecMain} style={{backgroundImage:`url(${HOST_API_IMG+activeSinglePage.data.entertainment?.thumbnail})`}}><div className={styles.gradientt}></div>
                    <div className={styles.MobileTitleAndPattern}>
                        <div className={styles.mobilePattern}><Image alt="mobilePattern" src={mobilePattern}/></div>
                        <div className={styles.mobileTitle}>{lang == "en" ? activeSinglePage.data.entertainment?.name : lang == "ru" ? activeSinglePage.data.entertainment?.name_ru : activeSinglePage.data.entertainment?.name_am}</div>
                    </div>
                    {/* <img className={styles.MobileBackground} alt="background" src={HOST_API_IMG+activeSinglePage.data.entertainment?.thumbnail}/> */}
                </div>
                <div className={styles.infoBlock}>
                    <div className={styles.description}>
                    {lang == "en" ? activeSinglePage.loading && parse(activeSinglePage.data.entertainment?.content) : lang == "ru" ? activeSinglePage.loading && parse(activeSinglePage.data.entertainment?.content_ru) : activeSinglePage.loading && parse(activeSinglePage.data.entertainment?.content_am)}
                    </div>
                </div>
                <div className={styles.contactBlock}>
                    <div className={styles.numberBlock}>
                        {activeSinglePage.data?.entertainment.phone && <div className={styles.phoneIcon}><Image alt="phoneIcon" src={phoneIcon}/> </div>}
                        {activeSinglePage.data?.entertainment.phone && <div className={styles.number}><a className={styles.number}href={`tel:${activeSinglePage.data.entertainment.phone}`}>{activeSinglePage.data.entertainment.phone}</a></div>}
                    </div>
                    <div className={styles.networkBlock}>
                        {activeSinglePage.data.entertainment.linkedin && <div className={styles.Linkdin}><Link href={activeSinglePage.data.entertainment.linkedin}><a  target="_blank"><Image alt="Linkdin" src="/img/icons/Linkdin.svg"/></a></Link></div>}
                        {activeSinglePage.data?.entertainment.facebook && <div className={styles.Facebook}><Link href={activeSinglePage.data.entertainment.facebook}><a target="_blank"><Image alt="Facebook" src="/img/icons/Facebook.svg"/></a></Link></div>}
                        {activeSinglePage.data?.entertainment.instagram &&  <div className={styles.Instagram}><Link href={activeSinglePage.data.entertainment.instagram}><a  target="_blank"><Image alt="Instagram" src="/img/icons/Instagram.svg"/></a></Link></div>}
                    </div>
                </div>
            </div>
        </div>}
        <SecMap/>
        <SimilarEntertainment  related={activeSinglePage.data.related} loading={activeSinglePage.loading}/>
        <CardSubscribe/>
        </>

    )
}

export default SecEntertainment