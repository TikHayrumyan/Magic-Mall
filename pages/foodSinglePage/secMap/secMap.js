/* eslint-disable @next/next/no-img-element */

import styles from "../../../styles/sass/pages/foodSinglePage/secMap/secMap.module.scss"



const SecMap = () =>{

    return(
        <div className={styles.SecMap}>
            <div className={styles.container}>
                <div><img alt="map" src="/img/foodSinglePage/secMap/map.svg"/></div>
            </div>
        </div>
    )
}



export default SecMap