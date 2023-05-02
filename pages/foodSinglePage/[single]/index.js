/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/foodSinglePage/singleFood/singleFood.module.scss"
import Link from "next/link"

import Image from "next/image"
import SecMap from "../secMap/secMap"
import SimilarShop from "../similarShop/similarShop"
import CardSubscribe from "../../homePage/CardSubscribe"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"

import Map from "../../../components/Map/Map"
import Select from "../../../components/Map/Select/Select"

const SingleFood = ({ data }) => {
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
                url: HOST_API + `food/${params}`,
                method: "GET"
            })
            console.log(response, "datanaaa");
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
                        <Link href="/foodPage">
                            <a>
                                <div className={styles.forHover}>
                                    <div className={styles.arrow}><Image alt="arrow" width={32} height={18} src="/img/foodSinglePage/singleFood/Rarrow.svg" /></div>
                                    <div className={styles.goBack}>{translate.headerMenuFood[lang]}</div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.mainBlock}>
                        <div>
                            <div className={styles.logoBlock}>
                                <div className={styles.Logo}><img className={styles.Logo} alt="logo" src="/img/foodSinglePage/singleFood/Logo.svg" /></div>
                                <div className={styles.brandName}>{lang == "en" ? activeSinglePage.loading && activeSinglePage.data.food?.name : lang == "ru" ? activeSinglePage.loading && activeSinglePage.data.food?.name_ru : activeSinglePage.loading && activeSinglePage.data.food?.name_am}</div>
                            </div>
                            <div className={styles.imgsMobile}>
                                <div className={styles.imgsBlockMobile}>
                                    <div className={styles.patternMobile}><img alt="pattern" src="/img/foodSinglePage/singleFood/pattern.svg" /></div>
                                    <div ><img className={styles.brandLogoMobile} alt="brandLogo" src={HOST_API_IMG + activeSinglePage.data?.food?.logo} /></div>
                                    <div ><img className={styles.accessoriesMobile} alt="accessories" src={HOST_API_IMG + activeSinglePage.data?.food?.imgSmall} /></div>
                                    <div><img className={styles.burgerMobile} alt="burger" src={HOST_API_IMG + activeSinglePage.data?.food?.imgBig} /></div>
                                </div>
                            </div>
                            <div className={styles.descripBlock}>
                                <div className={styles.description}>{lang == "en" ? activeSinglePage.loading && parse(activeSinglePage.data?.food?.content) : lang == "ru" ? activeSinglePage.loading && parse(activeSinglePage.data.food?.content_ru) : activeSinglePage.loading && parse(activeSinglePage.data.food?.content_am)}</div>
                            </div>
                            <div className={styles.contactBlock}>
                                {activeSinglePage.data?.food?.phone && <div className={styles.phoneIcon}><img alt="phoneIcon" src="/img/foodSinglePage/singleFood/phoneIcon.svg" /></div>}
                                {activeSinglePage.data?.food?.phone && <div><a className={styles.numberPhone} href={`tel:${activeSinglePage.data?.food?.phone}`}>{activeSinglePage.data.food?.phone}</a></div>}
                                {activeSinglePage.data?.food?.linkedin && <div className={styles.Linkdin}><Link href={activeSinglePage.data?.food?.linkedin}><a target="_blank"><img alt="Linkdin" src="/img/icons/Linkdin.svg" /></a></Link></div>}
                                {activeSinglePage.data?.food?.facebook && <div className={styles.Facebook}><Link href={activeSinglePage.data?.food?.facebook}><a target="_blank"><img alt="Facebook" src="/img/icons/Facebook.svg" /></a></Link></div>}
                                {activeSinglePage.data?.food?.instagram && <div className={styles.Instagram}><Link href={activeSinglePage.data?.food?.instagram}><a target="_blank"><img alt="Instagram" src="/img/icons/Instagram.svg" /></a></Link></div>}
                            </div>
                        </div>
                        <div className={styles.imgs}>
                            <div className={styles.imgsBlock}>
                                <div className={styles.pattern}><img alt="pattern" src="/img/foodSinglePage/singleFood/pattern.svg" /></div>
                                <div ><img className={styles.brandLogo} alt="brandLogo" src={HOST_API_IMG + activeSinglePage.data?.food?.logo} /></div>
                                <div ><img className={styles.accessories} alt="accessories" src={HOST_API_IMG + activeSinglePage.data?.food?.imgSmall} /></div>
                                <div><img className={styles.burger} alt="burger" src={HOST_API_IMG + activeSinglePage.data?.food?.imgBig} /></div>
                            </div>
                        </div>
                        <div className={styles.mobileLine}></div>
                    </div>
                </div>

            </div>
            }
            {/* <SecMap /> */}

            <Select data={data} setFloor={setFloor} changeFloor={changeFloor} floorModal={floorModal} SetFloorModal={SetFloorModal} />
            <Map data={data} changeFloor={changeFloor} />

            <SimilarShop related={activeSinglePage.data?.related} loading={activeSinglePage.loading} />
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
    console.log('map: ', map);



    return {
        props: {
            data: {
                data: map,
                loading: true
            }
        },
    }
}


export default SingleFood