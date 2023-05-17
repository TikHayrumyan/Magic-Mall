/* eslint-disable @next/next/no-img-element */
import CardSubscribe from "./homePage/CardSubscribe"
import stylesSecGiftCard from "../styles/sass/pages/GiftCardPage/secGiftCard/giftCard.module.scss"
import stylesSecQuestion from "../styles/sass/pages/GiftCardPage/secQuestion/secQuestion.module.scss"
import { translate } from "../translations"
import { useGlobalProvider } from "../components/Providers/GlobalProvider"
import { useState } from "react"
import Image from "next/image"




const GiftCardPage = ({ giftCardData }) => {
    const parse = require("html-react-parser")
    const { lang } = useGlobalProvider()
    const [answered, SetAnswered] = useState(-1)
    const toggleAnswerKey = num => SetAnswered(num == answered ? -1 : num)


    return (
        <div>
            {/* <GiftCard/> */}
            {giftCardData?.loading && <div className={stylesSecGiftCard.GiftCard}>
                <div className={stylesSecGiftCard.container}>
                    <div className={stylesSecGiftCard.titleBlock}>
                        <div className={stylesSecGiftCard.title}>{translate.GiftCardTitleLeft[lang]}<span className={stylesSecGiftCard.titleCard}>{translate.GiftCardTitleRight[lang]}</span></div>
                        <div className={stylesSecGiftCard.titleForGift}>{translate.GiftCardPagePerfectGift[lang]}</div>
                    </div>
                    <div className={stylesSecGiftCard.giftCardBlock}>
                        <div className={stylesSecGiftCard.descripBlock}>{lang == "en" ? parse(giftCardData.data.content.content) : lang == "ru" ? parse(giftCardData.data.content.content_ru) : parse(giftCardData.data.content.content_am)}</div>
                        <div className={stylesSecGiftCard.ImgBlock}>
                            <div className={stylesSecGiftCard.bag}>
                                <Image alt="bag" width={650} height={488} className={stylesSecGiftCard.img} src="/img/giftCardPage/secGiftCard/bag.png" />
                            </div>
                            <div className={stylesSecGiftCard.card}>
                                <Image alt="bag" width={356} height={247} src="/img/giftCardPage/secGiftCard/cardNew.png" />
                            </div>
                        </div>
                    </div>
                    <div className={stylesSecGiftCard.buttonBlock}>
                        <button className={stylesSecGiftCard.btn}>{translate.buttonOrderOnline[lang]}</button>
                    </div>
                </div>
            </div>}


            {/* <SecQuestion /> */}
            {giftCardData.loading && <div className={stylesSecQuestion.SecQuestion}>
                <div className={stylesSecQuestion.Logo}>
                    <Image width={226} height={455} alt="multiLogo" src="/img/giftCardPage/secQuestion/multiLogo.svg" />
                </div>
                <div className={stylesSecQuestion.container}>
                    <div className={stylesSecQuestion.questionsBlock}>
                        {
                            giftCardData.data.faq.map(({ question, question_am, question_ru, answer, answer_am, answer_ru }, index) => {
                                return <div className={stylesSecQuestion.mapBlock} key={index}>
                                    <div className={stylesSecQuestion.imgPatternBlock}>
                                        <div className={stylesSecQuestion.pattern}>
                                            <span className={answered !== index ? stylesSecQuestion.plus : stylesSecQuestion.minus} onClick={() => toggleAnswerKey(index)}>{answered !== index ? "+" : "-"}</span>
                                            <img className={stylesSecQuestion.pattern} alt="pattern" src="/img/giftCardPage/secQuestion/pattern.svg" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className={stylesSecQuestion.ask} onClick={() => toggleAnswerKey(index)}>{lang == "en" ? question : lang == "ru" ? question_ru : question_am}</div>
                                        <div className={answered == index ? stylesSecQuestion.descrip : stylesSecQuestion.descripNone}>{lang == "en" ? answer : lang == "ru" ? answer_ru : answer_am}</div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>}
            <CardSubscribe />
        </div>
    )
}

export async function getStaticProps(ctx) {
    const giftCardFetch = await fetch("http://apimall.weflex.am/api/giftCard")
    const giftCard = await giftCardFetch.json()

    return {
        props: {
            giftCardData: {
                data: giftCard,
                loading: true
            }
        }
    }
}


export default GiftCardPage