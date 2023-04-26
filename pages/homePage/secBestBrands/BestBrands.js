/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/HomePage/secbestBrands/bestBrands.module.scss"

import pattern from "../../../public/img/homePage/sectionBestBrands/pattern.svg"
import SliderBestBrands from "./sliderBestBrands/SliderBestBrands"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"


const BestBrands = () => {

    const {lang} = useGlobalProvider()

    return(<div className={styles.bestBrands}>
        <div className={styles.container}>
            <div className={styles.descAndPatter}>
                <div className={styles.pattern}><img alt="pattern" src={pattern}/></div>
                <div className={styles.descBlock}>
                    <div className={styles.descBlockTitle}>{translate.homeBestBrandsTitle[lang]}</div>
                    <p>{translate.homeBestBrandsDescription[lang]}</p>
                </div>
            </div>
            <div className={styles.descAndPatterMobile}>
                <div className={styles.patternAndTitleMobile}>
                    <div className={styles.patternMobile}><img alt="pattern" src={pattern}/></div>
                    <div className={styles.mobileTitle}>{translate.homeBestBrandsTitle[lang]}</div>
                </div>   
                <p className={styles.descBlockMobile}>{translate.homeBestBrandsDescription[lang]}</p>
            </div>
            <SliderBestBrands/>
        </div>
    </div>)
}



export default BestBrands