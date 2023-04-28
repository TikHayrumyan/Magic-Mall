/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/GiftCardPage/secQuestion/secQuestion.module.scss"
import { useEffect, useState } from "react"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"


const SecQuestion = () => {
    const { lang } = useGlobalProvider()
    const [giftCardData, SetGiftCardData] = useState({ data: {}, loading: false })
    const [answered, setAnswered] = useState(-1)


    const toggleAnswerKey = num => setAnswered(num == answered ? -1 : num)

    // useEffect(() => {
    //     fetch('http://apimall.weflex.am/api/giftCard')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             SetGiftCardData({
    //                 data: data,
    //                 loading: true
    //             })
    //         })
    // }, [])





    // const GetGiftCardData = async () => {
    //     try {
    //         const response = await axios({
    //             url: "https://apimall.weflex.am/api/giftCard",
    //             method: "GET"
    //         })
    //         // console.log(response, "giftCard");
    //         if (response.data && response.status == 200) {
    //             SetGiftCardData({
    //                 data: response.data,
    //                 loading: true
    //             })
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {

    //     GetGiftCardData()
    // }, [])

    // useEffect(() => {

    // }, [giftCardData.loading])

    // console.log('giftCardData: ', giftCardData);







    return (
        <>
            {/* <h1>hi secQuestion</h1> */}
            {giftCardData.loading && <div className={styles.SecQuestion}>
                <div className={styles.Logo}><img alt="multiLogo" src="/img/giftCardPage/secQuestion/multiLogo.svg" /></div>
                <div className={styles.container}>
                    <div className={styles.questionsBlock}>
                        {
                            giftCardData.data.faq.map(({ question, question_am, question_ru, answer, answer_am, answer_ru }, index) => {
                                return <div className={styles.mapBlock} key={index}>
                                    <div className={styles.imgPatternBlock}>
                                        <div className={styles.pattern}><span className={answered !== index ? styles.plus : styles.minus} onClick={() => toggleAnswerKey(index)}>{answered !== index ? "+" : "-"}</span><img alt="pattern" src="/img/giftCardPage/secQuestion/pattern.svg" /></div>
                                    </div>
                                    <div>
                                        <div className={styles.ask} onClick={() => toggleAnswerKey(index)}>{lang == "en" ? question : lang == "ru" ? question_ru : question_am}</div>
                                        <div className={answered == index ? styles.descrip : styles.descripNone}>{lang == "en" ? answer : lang == "ru" ? answer_ru : answer_am}</div>
                                    </div>
                                </div>
                            })
                        }


                    </div>
                </div>
            </div>}
        </>
    )
}


export async function getStaticProps(ctx) {



    return {
        props: {
            data: null
        }
    }
}

export default SecQuestion