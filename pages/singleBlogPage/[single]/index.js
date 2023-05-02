/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/singleBlogPage/secBlog/secBlog.module.scss"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import axios from "axios"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { useRouter } from "next/router"
import OtherBlogs from "../otherBlogs/OtherBlogs"
import SecMain from "../secMain"
import CardSubscribe from "../../homePage/CardSubscribe"
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "next-share"
import { translate } from "../../../translations"

const SecBlog = () => {
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
                url: HOST_API + `blog/${params}`,
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

    function replaceForNewLine(txt) {

        let b = txt.split('\n').map(i => {
            return <p key={i}>{i}</p>
        });

        return b


    }


    return (<>
        <SecMain data={activeSinglePage.data.blog} />

        {activeSinglePage.loading && <div className={styles.singleBlogs}>
            <div className={styles.SecBlogFirst}>
                <div className={styles.container}>
                    <div className={styles.goBackBlock}>
                        <Link href="/blogPage">
                            <a>
                                <div className={styles.forHover}>
                                    <div className={styles.arrow}><Image alt="arrow" width={32} height={18} src="/img/singleBlogPage/secBlog/Rarrow.svg" /></div>
                                    <div className={styles.goBack}>{translate.buttonBack[lang]}</div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.title}>{lang == "en" ? activeSinglePage.loading && activeSinglePage.data.blog?.title : lang == "ru" ? activeSinglePage.loading && activeSinglePage.data.blog?.title_ru : activeSinglePage.loading && activeSinglePage.data.blog?.title_am}</div>
                    <div className={styles.dateBlock}>
                        <div><img alt="calendarIcon" src="/img/singleBlogPage/secBlog/calendarIcon.svg" /></div>
                        <div className={styles.date}>{activeSinglePage.data.blog?.date}</div>
                    </div>

                </div>
                <div className={styles.contents}>
                    <div className={styles.leftContent}>
                        {lang == "en" ? activeSinglePage.loading && replaceForNewLine(activeSinglePage.data.blog?.content) : lang == "ru" ? activeSinglePage.loading && replaceForNewLine(activeSinglePage.data.blog?.content_ru) : activeSinglePage.loading && replaceForNewLine(activeSinglePage.data.blog?.content_am)}
                    </div>
                    <div className={styles.RightContent}>
                        <img src={HOST_API_IMG + activeSinglePage.data.blog?.image1} alt="BlogImg" />
                    </div>
                </div>
            </div>
            {/* <div className={styles.content}>{lang == "en" ? activeSinglePage.loading && parse(activeSinglePage.data.blog?.content) : lang == "ru" ? activeSinglePage.loading && parse(activeSinglePage.data.blog?.content_ru) : activeSinglePage.loading && parse(activeSinglePage.data.blog?.content_am)}</div> */}
            <div className={styles.secPics}>
                <div className={styles.LeftPicsContainer}>
                    <div className={styles.LeftPicsContainerFirst}>
                        <img src={HOST_API_IMG + activeSinglePage.data.blog?.image2} alt="leftVerticalPic" />
                    </div>
                    <div className={styles.LeftPicsContainerSecond}>
                        <img src={HOST_API_IMG + activeSinglePage.data.blog?.image3} alt="rightTopPic" />
                        <img src={HOST_API_IMG + activeSinglePage.data.blog?.image4} alt="rightBottomPic" />
                    </div>
                </div>
                <div className={styles.RightPicsContainer}>
                    <img src={HOST_API_IMG + activeSinglePage.data.blog?.image5} alt="RightPicsVectors" />
                </div>
            </div>
            {/* Trend Colors */}
            <div className={styles.containerTrendColors}>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>{lang == "en" ? activeSinglePage.loading && activeSinglePage.data.blog?.secondTitle : lang == "ru" ? activeSinglePage.loading && activeSinglePage.data.blog?.secondTitle_ru : activeSinglePage.loading && activeSinglePage.data.blog?.secondTitle_am}</div>
                    <div className={styles.description}>{lang == "en" ? activeSinglePage.loading && replaceForNewLine(activeSinglePage.data.blog?.secondContent) : lang == "ru" ? activeSinglePage.loading && replaceForNewLine(activeSinglePage.data.blog?.secondContent_ru) : activeSinglePage.loading && replaceForNewLine(activeSinglePage.data.blog?.secondContent_am)}</div>
                </div>
                <div className={styles.collageBlock}>
                    <div className={styles.collagePics}>
                        {/* <Image alt="collage" src={collage} width={601} height={601}/> */}
                        <div className={styles.TopCollageBlock}>
                            <img src={HOST_API_IMG + activeSinglePage.data.blog?.image6} alt="leftCollage" />
                            <img src={HOST_API_IMG + activeSinglePage.data.blog?.image7} alt="topRightCollage" />

                        </div>
                        <div className={styles.bottomCollageBlock}>
                            <img src={HOST_API_IMG + activeSinglePage.data.blog?.image8} alt="bottomCollage" />
                        </div>

                    </div>
                    <div className={styles.descrip}>{lang == "en" ? activeSinglePage.loading && replaceForNewLine(activeSinglePage.data.blog?.thirdContent) : lang == "ru" ? activeSinglePage.loading && replaceForNewLine(activeSinglePage.data.blog?.thirdContent_ru) : activeSinglePage.loading && replaceForNewLine(activeSinglePage.data.blog?.thirdContent_am)}</div>
                </div>
            </div>
            <div className={styles.SecBlogSecond}>
                <div className={styles.line}></div>
                <div></div>
                <div className={styles.shareBlock}>
                    <div className={styles.share}>{translate.ShareWithFriends[lang]}</div>
                    <div className={styles.Facebook}>
                        <FacebookShareButton url={"https://www.test.weflex.am" + router.asPath}>
                            <FacebookIcon size={33} round />
                        </FacebookShareButton>
                    </div>
                    <div>
                        <TwitterShareButton url={"https://www.test.weflex.am" + router.asPath}>
                            <TwitterIcon size={33} round />
                        </TwitterShareButton>
                    </div>
                    <div>
                        <LinkedinShareButton url={"https://www.test.weflex.am/" + router.asPath}>
                            <LinkedinIcon size={33} round />
                        </LinkedinShareButton>
                    </div>
                </div>
            </div>
        </div>
        }

        <OtherBlogs related={activeSinglePage.data.related} loading={activeSinglePage.loading} />
        <CardSubscribe />
    </>
    )
}


export default SecBlog