/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/map/secSelect/select.module.scss"
import { useGlobalProvider } from "../../Providers/GlobalProvider"
import { translate } from "../../../translations"



const Select = ({setFloor,changeFloor,floorModal,SetFloorModal,data}) => {

    const {lang} = useGlobalProvider()
    
    const keys = Object?.keys(data.data)
    
    const floorToggleModal = () => {
        SetFloorModal(!floorModal)
    }
    const blur = () => {
        SetFloorModal(false)
    }

    return(
        <div>
            <div className={styles.titleBlock}>
                <div className={styles.title}>{translate.headerMenuMallMap[lang]}</div>
                
            </div>
                <div className={styles.secSelect}>
                
                            <div className={styles.selectsContainer}>
                                <div className={styles.selectsContainerLeft}>
                            <div tabIndex={0} onBlur={blur}>
                                <div className={styles.floor} onClick={floorToggleModal}>
                                    <div className={styles.allFloors}>{changeFloor ?   `${translate.MallMapPageFloor[lang]}` + " " + changeFloor : "Բոլոր հարկերը"}</div>
                                    <div className={floorModal ? styles.upArr : styles.dArr}><img alt="arrow" src="/img/map/secSelect/dArr.svg"/></div>
                                </div>
                                <div className={floorModal ? styles.floorDropDown : styles.floorDropDownClose}>
                                    <div onClick={() => setFloor(keys[0])}>{translate.MallMapPageFloor[lang]} 1</div>
                                    <div onClick={() => setFloor(keys[1])}>{translate.MallMapPageFloor[lang]} 2</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.selectsContainerRight}>
                        
                        </div>
                    </div> 
                </div>
        </div>
    )
}


export default Select