/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import styles from "../../../styles/sass/pages/HomePage/secGiftCard/giftCard.module.scss"
import Link from "next/link"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { useEffect } from "react"
import { translate } from "../../../translations"

const GiftCard = () => {

    function shorten(text, maxLength) {
        var ret = text;
        if (ret?.length > maxLength) {
            ret = ret.substr(0,maxLength);
        }
        return ret;
    }
    const parse = require("html-react-parser")
    const { giftCardHomePageData,
        GetHomePageGiftCardData,lang} = useGlobalProvider()

    useEffect(() => {
        GetHomePageGiftCardData()
    },[GetHomePageGiftCardData])
    useEffect(() => {
        
    },[giftCardHomePageData.loading])

    return(<>
        {giftCardHomePageData.loading && <div className={styles.giftCard}>
            <div className={styles.container}>
            <Link href="/giftCardPage">
                <div className={styles.hoverBlockMobile}>
                    <div className={styles.mobileButton}>{translate.buttonSeeMore[lang]}</div>
                    <div className={styles.buttonIconMobile}><img alt="arrRight" src="/img/homePage/secBlog/arrRight.svg"/></div>
                </div>
            </Link>
                <div className={styles.pattern}><Image alt="pattern" src="/img/homePage/secBlog/secondPattern.png" width={941} height={750}/></div>
                <div className={styles.giftCardImg}><Image alt="giftCard" src="/img/homePage/secGiftCard/giftCardImgNew.png" width={641} height={748}/></div>
                <div className={styles.aboutBlock}>
                    <div className={styles.titleBlock}>
                        <h2 className={styles.title}>{translate.headerMenuGiftCard[lang]}</h2>
                        <div className={styles.secondPattern}><img alt="pattern" src="/img/homePage/secBlog/firstPattern.svg"/></div>
                    </div>
                    {<div className={styles.descrip}>{parse(lang == "en" ? shorten(giftCardHomePageData.data.content,425) : lang == "am" ? shorten(giftCardHomePageData.data.content_am,390) : shorten(giftCardHomePageData.data.content_ru,390))}</div>}
                    <Link href="/giftCardPage">
                        
                        <div className={styles.hoverBlock}>
                            <button className={styles.button}>{translate.buttonSeeMore[lang]}</button>
                            <div className={styles.buttonIcon}><img alt="arrRight" src="/img/homePage/secBlog/arrRight.svg"/></div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>}
        </>
    )
}



export default GiftCard