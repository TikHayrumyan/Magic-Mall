/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/FAQpage/questions/questions.module.scss"
import { useEffect, useState } from "react"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"

const Questions = () => {
    const { GetFaqPageData,
        FAQdata,
        SetFAQdata, lang } = useGlobalProvider()

    useEffect(() => {
        GetFaqPageData()
    }, [GetFaqPageData])
    useEffect(() => {

    }, [FAQdata.loading])
    const [answered, SetAnswered] = useState(-1)

    const toggleAnswerKey = num => SetAnswered(num == answered ? -1 : num)

    return (
        <div className={styles.Questions}>
            <div className={styles.backgroundPattern}><img alt="backgroundPattern" src="/img/FAQpage/backgroundPattern.png" /></div>
            <div className={styles.container}>
                <div className={styles.title}>{translate.FooterMenuFAQ[lang]}</div>
                <div className={styles.questionsBlock}>
                    {
                        FAQdata.data.map(({ id, question, question_am, question_ru, answer, answer_am, answer_ru }, index) => {
                            return <div className={styles.mapBlock} key={index}>
                                <div className={styles.imgPatternBlock}>
                                    <div className={styles.pattern}><span className={answered !== index ? styles.plus : styles.minus} onClick={() => toggleAnswerKey(index)}>{answered !== index ? "+" : "-"}</span></div>
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
        </div>
    )
}




export default Questions