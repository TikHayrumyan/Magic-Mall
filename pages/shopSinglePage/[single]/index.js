/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/shopSinglePage/singleShop/singleShop.module.scss"
import Link from "next/link"
import RightArrow from "../../../public/img/shopSinglePage/singleShop/Rarrow.svg"
import Image from "next/image"
import phoneIcon from "../../../public/img/shopSinglePage/singleShop/phoneIcon.svg"
import Facebook from "../../../public/img/shopSinglePage/singleShop/Facebook.svg"
import logo from "../../../public/img/shopSinglePage/singleShop/Logo.svg"
import Instagram from "../../../public/img/shopSinglePage/singleShop/Instagram.svg"
import Linkdin from "../../../public/img/shopSinglePage/singleShop/Linkdin.svg"
import pattern from "../../../public/img/shopSinglePage/singleShop/pattern.svg"
import HeaderOffer from "../headerOffer/HeaderOffer"
import SecMap from "../secMap/SecMap"
import SpecialOffer from "../specialOffer/SpecialOffer"
import SimilarShop from "../similarShops/SimilarShops"
import CardSubscribe from "../../homePage/secCardSubscribe/CardSubscribe"
import {useRouter} from "next/router"
import { useEffect, useState } from "react"
import  axios from "axios"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"


const SingleShop = () => {
    const parse = require("html-react-parser")
    const {HOST_API,HOST_API_IMG,lang} = useGlobalProvider()
    const router = useRouter()
    const {single} = router.query
    const [activeSinglePage,SetActiveSinglePage] = useState({
        data:{},
        loading:false
    })
    useEffect(() => {
        GetSingleData(single)
    },[single])

    const GetSingleData = async(params) => {
        try {
            const response = await axios({
                url: HOST_API+`shops/${params}`,
                method:"GET"
            })
            console.log(response,"datanaaaSingle");
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
    return(
        <>
        {activeSinglePage.loading && <HeaderOffer specialOfferData={activeSinglePage.data.shop}/>}
        {activeSinglePage.loading && <div className={styles.singleShop}>
            <div className={styles.container}>
                <div className={styles.goBackBlock}>
                        <Link href="/shopPage">
                        <a>
                        <div className={styles.forHover}>
                            <div className={styles.arrow}><Image alt="arrow" width={32} height={18} src={RightArrow}/></div>
                            <div className={styles.goBack}>{translate.headerMenuShop[lang]}</div>
                        </div>
                        </a>
                        </Link>
                </div>
                <div className={styles.mainBlock}>
                    <div className={styles.forMobileContainer}>
                        <div className={styles.logoBlock}>
                            <div className={styles.Logo}><Image className={styles.Logo} alt="logo" src={logo}/></div>
                            <div className={styles.brandName}>{lang == "en" ? activeSinglePage.data.shop?.name : lang == "ru" ? activeSinglePage.data.shop?.name_ru : activeSinglePage.data.shop?.name_am}</div>
                        </div>
                        <div className={styles.imgsMobile}>
                            <div className={styles.imgsBlockMobile}>
                                <div className={styles.patternMobile}><Image alt="pattern" src={pattern}/></div>
                                <div><img className={styles.brandLogoMobile} alt="brandLogo" src={HOST_API_IMG + activeSinglePage.data.shop?.logo}/></div>
                                <div><img className={styles.accessoriesMobile} alt="accessories" src={HOST_API_IMG + activeSinglePage.data.shop?.imgSmall}/></div>
                                <div><img  className={styles.burgerMobile} alt="burger" src={HOST_API_IMG + activeSinglePage.data.shop?.imgBig}/></div>
                            </div>
                        </div>
                        <div className={styles.descripBlock}>
                            <div className={styles.description}>{lang == "en" ? parse(activeSinglePage.data.shop?.content) : lang == "ru" ? parse(activeSinglePage.data.shop?.content_ru) : parse(activeSinglePage.data?.shop.content_am)}</div>                        
                        </div>
                        <div className={styles.contactBlock}>
                        {activeSinglePage.data.shop?.phone && <div className={styles.phoneIcon}><Image alt="phoneIcon" src={phoneIcon}/></div>}
                        {activeSinglePage.data.shop?.phone && <div><a className={styles.number} href={`tel:${activeSinglePage.data.shop?.phone}`}>{activeSinglePage.data.shop?.phone}</a></div>}
                        {activeSinglePage.data.shop?.linkedin && <div className={styles.Linkdin}><Link href={activeSinglePage.data.shop?.linkedin}><a  target="_blank"><Image alt="Linkdin" src={Linkdin}/></a></Link></div>}
                        {activeSinglePage.data.shop?.facebook && <div className={styles.Facebook}><Link  href={activeSinglePage.data.shop?.facebook}><a target="_blank"><Image alt="Facebook" src={Facebook}/></a></Link></div>}
                        {activeSinglePage.data.shop?.instagram && <div className={styles.Instagram}><Link href={activeSinglePage.data.shop?.instagram}><a  target="_blank"><Image alt="Instagram" src={Instagram}/></a></Link></div>}
                        </div>
                    </div>
                    <div className={styles.imgs}>
                        <div className={styles.imgsBlock}>
                            <div className={styles.pattern}><Image alt="pattern" src={pattern}/></div>
                            <div><img className={styles.brandLogo} alt="brandLogo" src={HOST_API_IMG + activeSinglePage.data.shop?.logo}/></div>
                            <div><img className={styles.accessories} alt="accessories" src={HOST_API_IMG + activeSinglePage.data.shop?.imgSmall}/></div>
                            <div><img  className={styles.burger} alt="burger" src={HOST_API_IMG + activeSinglePage.data.shop?.imgBig}/></div>
                        </div>
                    </div>
                    <div className={styles.mobileLine}></div>
                </div>
            </div>
        </div>}
        <SecMap/>
        {activeSinglePage.loading && <SpecialOffer SpecialOffer={activeSinglePage.data?.specialOffers} loading={activeSinglePage.loading}/>}
        {activeSinglePage.loading && <SimilarShop related={activeSinglePage.data?.related} loading={activeSinglePage.loading}/>}
        <CardSubscribe/>
        </>
    )
}


export default SingleShop