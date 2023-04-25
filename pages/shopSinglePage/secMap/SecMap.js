import Image from "next/image"
import styles from "../../../styles/sass/pages/shopSinglePage/secMap/secMap.module.scss"
import map from "../../../public/img/shopSinglePage/secMap/map.svg"


const SecMap = () =>{

    return(
        <div className={styles.SecMap}>
            <div className={styles.container}>
                <div><Image alt="map" src={map}/></div>
            </div>
        </div>
    )
}



export default SecMap