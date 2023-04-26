import Link from "next/link"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import styles from "../../../styles/sass/pages/shopSinglePage/headerOffer/HeaderOffer.module.scss"


const HeaderOffer = ({specialOfferData}) => {

    const {lang} = useGlobalProvider()

    return(<>
        {specialOfferData && specialOfferData.specialOfferText ? <div className={styles.HeaderOffer}>
            <div className={styles.container}>
                <div className={styles.loop}>
                    {specialOfferData.specialOfferLink && specialOfferData.specialOfferLink_am &&  specialOfferData.specialOfferLink_ru && <Link href={lang == "en" ? specialOfferData.specialOfferLink : lang == "am" ? specialOfferData.specialOfferLink_am : specialOfferData.specialOfferLink_ru}>
                    <div className={styles.leftText}>{lang == "en" ? specialOfferData.specialOfferText : lang == "am" ? specialOfferData.specialOfferText_am : specialOfferData.specialOfferText_ru}</div>
                    </Link>}
                    {!specialOfferData.specialOfferLink && !specialOfferData.specialOfferLink_am && !specialOfferData.specialOfferLink_ru && <div className={styles.leftText}>{lang == "en" ? specialOfferData.specialOfferText : lang == "am" ? specialOfferData.specialOfferText_am : specialOfferData.specialOfferText_ru}</div>}
                </div>
            </div>
        </div> : null}
        </>
    )
}


export default HeaderOffer