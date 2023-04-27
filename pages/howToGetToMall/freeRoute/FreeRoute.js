/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import styles from "../../../styles/sass/pages/howToGetToMall/freeRoute/freeRoute.module.scss"

import arrow from "../../../public/img/howToGetToMall/freeRoute/arrow.svg"
import marker from "../../../public/img/howToGetToMall/freeRoute/marker.svg"
import location from "../../../public/img/howToGetToMall/freeRoute/location.svg"
import { useState } from "react"
import { translate } from "../../../translations"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"

const FreeRoute = () => {

    const [showRouteData,SetShowRouteData] = useState(false)
    const {lang} = useGlobalProvider()

    const toggleData = () => {
        SetShowRouteData(!showRouteData)
    }
    const routeData = [
        {
            id:1,
            img:location,
            route:"Զոր. Անդրանիկի փ.,",
        },
        {
            id:2,
            img:arrow,
            route:"Րաֆֆու փ.,",
        },
        {
            id:3,
            img:arrow,
            route:"Սեբաստիայի փ.,",
        },
        {
            id:4,
            img:arrow,
            route:"Լենինգրադյան փ.,",
        },
        {
            id:5,
            img:marker,
            route:"Մուլտի մեջիք մոլ",
        },
        {
            id:6,
            img:arrow,
            route:"Զոր. Անդրանիկի փ.,",
        },
        {
            id:7,
            img:arrow,
            route:"Րաֆֆու փ.,",
        },
        {
            id:8,
            img:arrow,
            route:"Սեբաստիայի փ.,",
        },
        {
            id:9,
            img:arrow,
            route:" Լենինգրադյան փ.,",
        },
        {
            id:10,
            img:arrow,
            route:"Մուլտի մեջիք մոլ",
        },
        {
            id:11,
            img:arrow,
            route:"Զոր. Անդրանիկի փ.,",
        },
        {
            id:12,
            img:arrow,
            route:"Րաֆֆու փ.,",
        },
        {
            id:13,
            img:arrow,
            route:"Սեբաստիայի փ.,",
        },
        {
            id:14,
            img:arrow,
            route:"Լենինգրադյան փ.,",
        },
        {
            id:15,
            img:arrow,
            route:"Մուլտի մեջիք մոլ",
        },
        {
            id:16,
            img:arrow,
            route:"Զոր. Անդրանիկի փ.,",
        },
        {
            id:17,
            img:arrow,
            route:"Րաֆֆու փ.,",
        },
        {
            id:18,
            img:location,
            route:"Սեբաստիայի փ.,",
        },

    ]

    return(
        <div className={styles.freeRoute}>
            <div className={styles.container}>
                <div className={styles.title}>{translate.mainHeaderFreeShuttle[lang]}</div>
                <div className={styles.description}>{translate.HowToGetToMall[lang]}</div>
                <div className={styles.routeTitleBlock}>
                    <div className={styles.pattern}><img alt="pattern" src="/img/howToGetToMall/freeRoute/pattern.svg"/></div>
                    <div className={styles.bus}><img alt="bus" src="/img/howToGetToMall/freeRoute/bus.svg"/></div>
                    <div className={styles.routeTitle} onClick={toggleData}>Նորաշեն թաղամաս - 1-ին հեռուստաընկերություն</div>
                    <div className={showRouteData ? styles.minus : styles.minusNone} onClick={toggleData}>-</div>
                    <div className={showRouteData ? styles.plusNone : styles.plus} onClick={toggleData}>+</div>
                </div>
              
                <div className={styles.routeData}>
                    <div className={styles.routeDataBlock} >
                    {
                        showRouteData && routeData.map(({id,img,route}) => {

                            return(
                                <div className={styles.data} key={id}>
                                    <div className={styles.patternsArrow}><img alt="arrow" src={img} /></div>
                                    <div className={styles.route}>{route}</div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeRoute