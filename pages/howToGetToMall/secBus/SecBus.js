import styles from "../../../styles/sass/pages/howToGetToMall/secBus/secBus.module.scss"
import pattern from "../../../public/img/howToGetToMall/secBus/pattern.svg"
import busFirst from "../../../public/img/howToGetToMall/secBus/busFirst.svg"
import arrow from "../../../public/img/howToGetToMall/secBus/arrow.svg"
import marker from "../../../public/img/howToGetToMall/secBus/marker.svg"
import location from "../../../public/img/howToGetToMall/secBus/location.svg"
import { useState } from "react"
import Image from "next/image"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"
import busSecond from "../../../public/img/howToGetToMall/secBus/busSecond.svg"
import busThird from "../../../public/img/howToGetToMall/secBus/busThird.svg"

const SecBus = () => {

    const [showRouteData,SetShowRouteData] = useState(-1)
    const {lang} = useGlobalProvider()

    const toggleData = num => { SetShowRouteData(num == showRouteData ? -1 : num)}
    const routeData = [
        {
            id:1,
            img:location,
            route:"գ. Արգել",
        },
        {
            id:2,
            img:arrow,
            route:"գ. Նոր Գեղի",
        },
        {
            id:3,
            img:arrow,
            route:"գ. Նոր Հաճն",
        },
        {
            id:4,
            img:arrow,
            route:"Հ-5 ավտոճանապարհ",
        },
        {
            id:5,
            img:arrow,
            route:"Մ-4 ավտոճանապարհ",
        },
        {
            id:6,
            img:arrow,
            route:"գ. Վերին Պտղնի",
        },
        {
            id:7,
            img:marker,
            route:"Multi Magic Mall",
        },
        {
            id:8,
            img:arrow,
            route:"ք. Երևան Թբիլիսյան խճ.",
        },
        {
            id:9,
            img:arrow,
            route:"Ազատության պող.",
        },
        {
            id:10,
            img:arrow,
            route:"Սարալանջի փ.",
        },
        {
            id:11,
            img:arrow,
            route:"Աբովյան փ.",
        },
        {
            id:12,
            img:arrow,
            route:"Մոսկովյան փ.",
        },
        {
            id:13,
            img:arrow,
            route:"Խանջյան փ.",
        },
        {
            id:14,
            img:arrow,
            route:"Տիգրան Մեծ պող.",
        },
        {
            id:15,
            img:location,
            route:"«Երկաթգծի կայարան» ե/կ",
        },
    ]

    
    const SecondRouteData = [
        {
            id:1,
            img:location,
            route:"Աբովյանի ԱԿ",
        },
        {
            id:2,
            img:arrow,
            route:"Սևանի փ.",
        },
        {
            id:3,
            img:arrow,
            route:"Հատիսի փ.",
        },
        {
            id:4,
            img:arrow,
            route:"Հանրապետության պող.",
        },
        {
            id:5,
            img:arrow,
            route:"Երևանյան փ.",
        },
        {
            id:6,
            img:arrow,
            route:"Հ-1 ավտոճանապարհ",
        },
        {
            id:7,
            img:arrow,
            route:"գ. Բալահովիտ",
        },
        {
            id:8,
            img:arrow,
            route:"Մ-4 ավտոճանապարհ",
        },
        {
            id:9,
            img:arrow,
            route:"գ․ Վերին Պտղնի",
        },
        {
            id:10,
            img:marker,
            route:"Multi Magic Mall",
        },
        {
            id:11,
            img:arrow,
            route:"ք. Երևան Թբիլիսյան խճ.",
        },
        {
            id:12,
            img:arrow,
            route:"Ազատության պող.",
        },
        {
            id:13,
            img:arrow,
            route:"Կոմիտասի պող.",
        },
        {
            id:14,
            img:arrow,
            route:"Մ. Բաղրամյան պող.",
        },
        {
            id:15,
            img: arrow,
            route:"Մ. Մաշտոցի պող.",
        },
        {
            id:16,
            img: arrow,
            route:"Ծ. Իսակովի պող.",
        },
        {
            id:17,
            img: location,
            route:"«Կենտրոնական» ԱԿ",
        },
    ]

    const ThirdRouteData = [
        {
            id:1,
            img:location,
            route:"Աբովյանի ԱԿ",
        },
        {
            id:2,
            img:arrow,
            route:"Սևանի փ.",
        },
        {
            id:3,
            img:arrow,
            route:"Հատիսի փ.",
        },
        {
            id:4,
            img:arrow,
            route:"Հանրապետության պող.",
        },
        {
            id:5,
            img:arrow,
            route:"Երևանյան փ.",
        },
        {
            id:6,
            img:arrow,
            route:"Հ-1 ավտոճանապարհ",
        },
        {
            id:7,
            img:arrow,
            route:"գ. Բալահովիտ",
        },
        {
            id:8,
            img:arrow,
            route:"Մ-4 ավտոճանապարհ",
        },
        {
            id:9,
            img:arrow,
            route:"գ․ Վերին Պտղնի",
        },
        {
            id:10,
            img:marker,
            route:"Multi Magic Mall",
        },
        {
            id:11,
            img:arrow,
            route:"ք. Երևան Աճառյան փ.",
        },
        {
            id:12,
            img:arrow,
            route:"Մյասնիկյան պող.",
        },
        {
            id:13,
            img:arrow,
            route:"Հերացու փ.",
        },
        {
            id:14,
            img:arrow,
            route:" Խանջյան փ.",
        },
        {
            id:15,
            img: arrow,
            route:"Տիգրան Մեծի պող.",
        },
        {
            id:16,
            img: location,
            route:"«Երկաթգծի կայարան» ե/կ",
        },
    ]

    return(
        <div className={styles.SecBus}>
            <div className={styles.container}>
                <div className={styles.title}>{translate.Bus[lang]}</div>
                <div className={styles.routeTitleBlock}>
                    <div className={styles.pattern}><Image alt="pattern" src={pattern}/></div>
                    <div className={styles.bus}><Image alt="bus" src={busFirst}/></div>
                    <div className={styles.routeTitle} onClick={() => toggleData(1)}>գ. Արգել-Նոր Հաճն-Երևան</div>
                    <div className={showRouteData == 1 ? styles.minus : styles.minusNone} onClick={() => toggleData(1)}>-</div>
                    <div className={showRouteData == 1 ? styles.plusNone : styles.plus} onClick={() => toggleData(1)}>+</div>
                </div>
                <div className={styles.routeData}>
                    <div className={styles.routeDataBlock} >
                    {
                        showRouteData == 1 && routeData.map(({id,img,route}) => {

                            return(
                                <div className={styles.data} key={id}>
                                    <div className={styles.patternsArrow}><Image alt="arrow" src={img}/></div>
                                    {id == 7 ? <div className={styles.routeMultiOutletMall}>{route}</div> : <div className={styles.route}>{route}</div>}
                                </div>
                            )
                        })
                    }
                    </div>
                </div>

                <div className={styles.routeTitleBlock}>
                <div className={styles.pattern}><Image alt="pattern" src={pattern}/></div>
                    <div className={styles.bus}><Image alt="bus" src={busSecond}/></div>
                    <div className={styles.routeTitle} onClick={() => toggleData(2)}>Աբովյան-Երևան</div>
                    <div className={showRouteData == 2 ? styles.minus : styles.minusNone} onClick={() => toggleData(2)}>-</div>
                    <div className={showRouteData == 2 ? styles.plusNone : styles.plus} onClick={() => toggleData(2)}>+</div>
                </div>
                <div className={styles.routeData}>
                    <div className={styles.routeDataBlock} >
                    {
                        showRouteData == 2 && SecondRouteData.map(({id,img,route}) => {

                            return(
                                <div className={styles.data} key={id}>
                                    <div className={styles.patternsArrow}><Image alt="arrow" src={img}/></div>
                                    {id == 10 ? <div className={styles.routeMultiOutletMall}>{route}</div> : <div className={styles.route}>{route}</div>}
                                </div>
                            )
                        })
                    }
                    </div>
                </div>

                <div className={styles.routeTitleBlock}>
                    <div className={styles.pattern}><Image alt="pattern" src={pattern}/></div>
                    <div className={styles.bus}><Image alt="bus" src={busThird}/></div>
                    <div className={styles.routeTitle} onClick={() => toggleData(3)}>Աբովյան-Երևան</div>
                    <div className={showRouteData == 3 ? styles.minus : styles.minusNone} onClick={() => toggleData(3)}>-</div>
                    <div className={showRouteData == 3 ? styles.plusNone : styles.plus} onClick={() => toggleData(3)}>+</div>
                </div>
                <div className={styles.routeData}>
                    <div className={styles.routeDataBlock} >
                    {
                        showRouteData == 3 && ThirdRouteData.map(({id,img,route}) => {

                            return(
                                <div className={styles.data} key={id}>
                                    <div className={styles.patternsArrow}><Image alt="arrow" src={img}/></div>
                                    {id == 10 ? <div className={styles.routeMultiOutletMall}>{route}</div> : <div className={styles.route}>{route}</div>}
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


export default SecBus