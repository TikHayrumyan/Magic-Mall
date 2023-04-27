/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/GiftCardPage/secGiftCard/giftCard.module.scss"


import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { useEffect } from "react"
import { translate } from "../../../translations"



const GiftCard = () => {
    const parse = require("html-react-parser")
    const {GetGiftCardData,giftCardData,lang} = useGlobalProvider()

    useEffect(() => {
        GetGiftCardData()
    },[GetGiftCardData])

    useEffect(() => {

    },[giftCardData.loading])  
    
    return(
        <>
        {giftCardData.loading && <div className={styles.GiftCard}>
            <div className={styles.container}>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>{translate.GiftCardTitleLeft[lang]}<span className={styles.titleCard}>{translate.GiftCardTitleRight[lang]}</span></div>
                    <div className={styles.titleForGift}>{translate.GiftCardPagePerfectGift[lang]}</div>
                </div>
                <div className={styles.giftCardBlock}>
                    <div className={styles.descripBlock}>{lang == "en" ? parse(giftCardData.data.content.content) : lang == "ru" ? parse(giftCardData.data.content.content_ru) : parse(giftCardData.data.content.content_am)}</div>
                    <div className={styles.ImgBlock}>
                        <div className={styles.bag}><img alt="bag" src="/img/giftCardPage/secGiftCard/bag.png"/></div>
                        <div className={styles.card}><img alt="bag" src="/img/giftCardPage/secGiftCard/cardNew.png"/></div>
                    </div>
                </div>
                <div className={styles.buttonBlock}>
                    <button className={styles.btn}>{translate.buttonOrderOnline[lang]}</button>
                </div>
            </div>
            
        </div>}
        </>
    )
}


export default GiftCard