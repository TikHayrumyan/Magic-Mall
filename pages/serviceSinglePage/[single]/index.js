/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/serviceSinglePage/singlePage/singlePage.module.scss"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import SecMap from "../secMap/SecMap"
import SimilarShop from "../similarShop/similarShop"
import CardSubscribe from "../../homePage/CardSubscribe"
import { translate } from "../../../translations"

import Map from "../../../components/Map/Map"
import Select from "../../../components/Map/Select/Select"


const SinglePage = ({ data }) => {
    const [floorModal, SetFloorModal] = useState(false)
    const [changeFloor, SetChangeFloor] = useState(1)
    const setFloor = (num) => {
        SetChangeFloor(num == changeFloor ? num : num)
        SetFloorModal(false)
    }

    const parse = require("html-react-parser")
    const { HOST_API, HOST_API_IMG, lang } = useGlobalProvider()
    const router = useRouter()
    const { single } = router.query
    const [activeSinglePage, SetActiveSinglePage] = useState({
        data: {},
        loading: false
    })

    useEffect(() => {
        GetSingleData(single)
    }, [single])

    const GetSingleData = async (params) => {
        try {
            const response = await axios({
                url: HOST_API + `services/${params}`,
                method: "GET"
            })
            if (Object.keys(response.data).length && response.status == 200) {
                SetActiveSinglePage({
                    data: response.data,
                    loading: true
                })
            }
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <>
            {activeSinglePage.loading && <div className={styles.singleShop}>
                <div className={styles.container}>
                    <div className={styles.goBackBlock}>
                        <Link href="/servicePage">
                            <a>
                                <div className={styles.forHover}>
                                    <div className={styles.arrow}><Image alt="arrow" width={32} height={18} src="/img/serviceSinglePage/singlePage/Rarrow.svg" /></div>
                                    <div className={styles.goBack}>{translate.headerMenuServices[lang]}</div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.mainBlock}>
                        <div>
                            <div className={styles.logoBlock}>
                                <div className={styles.Logo}><img alt="logo" src="/img/serviceSinglePage/singlePage/Logo.svg" /></div>
                                <div className={styles.brandName}>{lang == "en" ? activeSinglePage.loading && activeSinglePage.data.service?.title : lang == "ru" ? activeSinglePage.loading && activeSinglePage.data.service?.title_ru : activeSinglePage.loading && activeSinglePage.data.service?.title_am}</div>
                            </div>
                            <div className={styles.imgsMobile}>
                                <div className={styles.imgsBlockMobile}>
                                    <div className={styles.patternMobile}><img alt="pattern" src="/img/serviceSinglePage/singlePage/pattern.svg" /></div>
                                    <div><img className={styles.brandLogoMobile} alt="brandLogo" src={HOST_API_IMG + activeSinglePage.data.service?.logo} /></div>
                                    <div ><img className={styles.globingMobile} alt="burger" src={HOST_API_IMG + activeSinglePage.data.service?.image} /></div>
                                </div>
                            </div>
                            <div className={styles.descripBlock}>
                                <div className={styles.description}>{lang == "en" ? activeSinglePage.loading && parse(activeSinglePage.data.service?.content) : lang == "ru" ? activeSinglePage.loading && parse(activeSinglePage.data.service?.content_ru) : activeSinglePage.loading && parse(activeSinglePage.data.service?.content_am)}</div>
                            </div>
                            <div className={styles.contactBlock}>
                                {activeSinglePage.data.service?.phone && <div className={styles.phoneIcon}><img alt="phoneIcon" src="/img/serviceSinglePage/singlePage/phoneIcon.svg" /></div>}
                                {activeSinglePage.data.service?.phone && <div><a className={styles.number} href={`tel:${activeSinglePage.data.service?.phone}`}>{activeSinglePage.data.service?.phone}</a></div>}
                                {activeSinglePage.data.service?.linkedin && <div className={styles.Linkedin}><Link href={activeSinglePage.data.service?.linkedin}><a target="_blank"><img alt="Linkdin" src="/img/icons/Linkdin.svg" /></a></Link></div>}
                                {activeSinglePage.data.service?.facebook && <div className={styles.Facebook}><Link href={activeSinglePage.data.service?.facebook}><a target="_blank"><img alt="Facebook" src="/img/icons/Facebook.svg" /></a></Link></div>}
                                {activeSinglePage.data.service?.instagram && <div className={styles.Instagram}><Link href={activeSinglePage.data.service?.instagram}><a target="_blank"><img alt="Instagram" src="/img/icons/Instagram.svg" /></a></Link></div>}
                            </div>
                        </div>
                        <div className={styles.imgs}>
                            <div className={styles.imgsBlock}>
                                <div className={styles.pattern}><img alt="pattern" src="/img/serviceSinglePage/singlePage/pattern.svg" /></div>
                                <div><img className={styles.brandLogo} alt="brandLogo" src={HOST_API_IMG + activeSinglePage.data.service?.logo} /></div>
                                <div ><img className={styles.globing} alt="burger" src={HOST_API_IMG + activeSinglePage.data.service?.image} /></div>
                            </div>
                        </div>
                        <div className={styles.mobileLine}></div>
                    </div>
                </div>
            </div>}

            <Select data={data} setFloor={setFloor} changeFloor={changeFloor} floorModal={floorModal} SetFloorModal={SetFloorModal} />
            <Map data={data} changeFloor={changeFloor} />

            {/* <SecMap /> */}
            <SimilarShop related={activeSinglePage.data.related} loading={activeSinglePage.loading} />
            <CardSubscribe />
        </>
    )
}

export async function getStaticPaths() {


    return {
        paths: [],
        fallback: "blocking"
    }
}




export async function getStaticProps() {
    const mapFetch = await fetch("https://apimall.weflex.am/api/map")
    const map = await mapFetch.json()



    return {
        props: {
            data: {
                data: map,
                loading: true
            }
        },
    }
}
export default SinglePage