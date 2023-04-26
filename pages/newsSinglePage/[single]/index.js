import Image from "next/image"
import styles from "../../../styles/sass/pages/newsSinglePage/singlePage/singlePage.module.scss"
import RightArrow from "../../../public/img/newsSinglePage/singlePage/Rarrow.svg"
import calendarIcon from "../../../public/img/newsSinglePage/singlePage/calendarIcon.svg"
import Facebook from "../../../public/img/newsSinglePage/singlePage/Facebook.svg"
import Instagram from "../../../public/img/newsSinglePage/singlePage/Instagram.svg"
import Linkdin from "../../../public/img/newsSinglePage/singlePage/Linkdin.svg"
import Link from "next/link"
import OtherNews from "../otherNews/OtherNews"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { useState,useEffect } from "react"
import {useRouter} from "next/router"
import  axios from "axios"
import CardSubscribe from "../../homePage/secCardSubscribe/CardSubscribe"
import SecMain from "../SecMain"
import { FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon} from "next-share"
import { translate } from "../../../translations"


const SinglePage = () => {
    const parse = require("html-react-parser")
    const {HOST_API,HOST_API_IMG,lang} = useGlobalProvider()
    const router = useRouter()
    console.log(router.asPath,"router");
    const {single} = router.query
    const [activeSinglePage,SetActiveSinglePage] = useState({
        data:{},
        loading:false
    })
    useEffect(() => {
        const GetSingleData = async(params)=>{
            try {
                const response = await axios({
                    url: HOST_API+`news/${params}`,
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
        <SecMain/>
        {activeSinglePage.loading && <div className={styles.SinglePage}>
            <div className={styles.container}>
                <div className={styles.singlePageBlock}>
                    <div className={styles.GoBackBlock}>
                        <Link href="/newsPage">
                        <a>
                        <div className={styles.forHover}>
                            <div className={styles.arrow}><Image alt="arrow" src={RightArrow}/></div>
                            <div className={styles.goBack}>{translate.buttonBack[lang]}</div>
                        </div>
                        </a>
                        </Link>
                    </div>
                    <div className={styles.title}>{lang == "en" ? activeSinglePage.data?.news.title : lang == "ru" ? activeSinglePage.data?.news.title_ru : activeSinglePage.data?.news.title_am}</div>
                    <div className={styles.dateBlock}>
                        <div><Image alt="calendarIcon" src={calendarIcon}/></div>
                        <div className={styles.date}>{activeSinglePage.data?.news.date}</div>
                    </div>
                    <div className={styles.descrip}>{lang == "en" ? parse(activeSinglePage.data.news.content) : lang == "ru" ? parse(activeSinglePage.data.news.content_ru) : parse(activeSinglePage.data.news.content_am)}</div>
                    <div className={styles.bottomline}></div>
                    <div className={styles.shareBlock}>
                        <div className={styles.share}>{translate.ShareWithFriends[lang]}</div>
                        <div className={styles.Facebook}>
                            <FacebookShareButton url={"http://www.test.weflex.am"+router.asPath}>
                            <FacebookIcon size={33} round/>
                            </FacebookShareButton>
                        </div>
                        <div>
                            <TwitterShareButton url={"http://www.test.weflex.am"+router.asPath}>
                            <TwitterIcon size={33} round/>
                            </TwitterShareButton>
                        </div>
                        <div>
                            <LinkedinShareButton url={"http://www.test.weflex.am/"+router.asPath}>
                                <LinkedinIcon size={33} round/>
                            </LinkedinShareButton>
                        </div>
                    </div>
                    <OtherNews related={activeSinglePage.data?.related} loading={activeSinglePage.loading}/>
                </div>
            </div>
        </div>}
        <CardSubscribe/>
        </>
    )
}


export default SinglePage