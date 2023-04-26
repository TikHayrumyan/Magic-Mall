import styles from "../../../styles/sass/pages/GiftCardPage/secQuestion/secQuestion.module.scss"
import Image from "next/image"
import multiLogo from "../../../public/img/giftCardPage/secQuestion/multiLogo.svg"
import pattern from "../../../public/img/giftCardPage/secQuestion/pattern.svg"
import { useEffect, useState } from "react"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"


const SecQuestion = () => {
    const {GetGiftCardData,giftCardData,lang} = useGlobalProvider()

    useEffect(() => {
        GetGiftCardData()
    },[GetGiftCardData])

    useEffect(() => {

    },[giftCardData.loading])


    const [answered,SetAnswered] = useState(-1)
  
    const toggleAnswerKey = num => SetAnswered(num == answered ? -1 : num)

   
    return(<>
        {giftCardData.loading && <div className={styles.SecQuestion}>
            <div className={styles.Logo}><Image alt="multiLogo" src={multiLogo}/></div>
            <div className={styles.container}>
                <div className={styles.questionsBlock}>
                {
                        giftCardData.data.faq.map(({question,question_am,question_ru,answer,answer_am,answer_ru},index) => {
                          return  <div className={styles.mapBlock} key={index}>
                                        <div className={styles.imgPatternBlock}>
                                            <div className={styles.pattern}><span className={answered !== index ? styles.plus : styles.minus} onClick={() => toggleAnswerKey(index)}>{answered !== index ? "+" : "-"}</span><Image alt="pattern" src={pattern}/></div>
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


export default SecQuestion