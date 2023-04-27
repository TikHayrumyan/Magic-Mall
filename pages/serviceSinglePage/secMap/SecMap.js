import Image from "next/image"
import styles from "../../../styles/sass/pages/serviceSinglePage/secMap/secMap.module.scss"



const SecMap = () =>{

    return(
        <div className={styles.SecMap}>
            <div className={styles.container}>
                <div><Image alt="map" src="/img/serviceSinglePage/secMap/map.svg"/></div>
            </div>
        </div>
    )
}



export default SecMap