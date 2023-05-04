/* eslint-disable @next/next/no-img-element */

import styles from "../../../styles/sass/pages/entertainmentPage/secSelect/select.module.scss"
import Image from "next/image"
import { useState ,useEffect} from "react"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import axios from "axios"
import { translate } from "../../../translations"



const Select = () => {

    const [floorModal,SetFloorModal] = useState(false)
    const {HOST_API,entertainmentData,SetEntertainmentData,searchInputValueEntertainment,SetSearchInputValueEntertainment,lang} = useGlobalProvider();
    const [activeFloorName,SetActiveFloorName] = useState("")
    const [initialData,SetInitialData] = useState({
        floor:null,
        search:null
    })

    useEffect(() => {
        searchData()
    },[])
    
    useEffect(() => {

    },[entertainmentData.loading])

    const floorToggleModal = () => {
        SetFloorModal(!floorModal)
    }

    
    const blur = () => {
        SetFloorModal(false)
    }

    const searchData = async(floor,search)=> {
        let searchForKeys = new Object()
        if(floor != null && floor != `${translate.ShopPageAllFloors[lang]}`){
            searchForKeys.floor = floor
            SetInitialData({...initialData,floor:floor})
        }else if(initialData.floor != null && floor == null && floor != `${translate.ShopPageAllFloors[lang]}`){
            searchForKeys.floor = initialData.floor
        }else{
            SetInitialData({
                floor:null,
                search:null
            })
        }
        if(search!=null){
            SetInitialData({...initialData,search:search});
            searchForKeys.search=`${search}`;
        }
        try {
            const response = await axios({
                url:HOST_API + "entertianment",
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                  },
                  data:JSON.stringify(searchForKeys)
            });
            if(response.data.length && response.status == 200){
                SetEntertainmentData({
                    data: response.data,
                    loading: true
                })
            }else if(response.data.length == 0 && response.status == 200){
                SetEntertainmentData({
                    data: [],
                    loading: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    
    const searchByFloor = (floor) => {
        searchData(floor,null)
        SetFloorModal(false);
        SetSearchInputValueEntertainment("")
        SetActiveFloorName(floor)
        if (floor == 1) {
            SetActiveFloorName(translate.MallMapPageFloor[lang] + " " + floor)
        }else if(floor == 2){
            SetActiveFloorName(translate.MallMapPageFloor[lang] + " " + floor)
        }else if(floor == -1){
            SetActiveFloorName(translate.MallMapPageFloor[lang] + " " + floor)
        }
   }
    const SearchByInput =(searchValue)=>{

    setTimeout(()=>{
        searchData(null,searchValue)
    },1000)}
    return(
        <div className={styles.secSelect}>
            <div className={styles.selectsContainer}>
                 <div className={styles.selectsContainerLeft}>
                    <div tabIndex={0} onBlur={blur}>
                        <div className={styles.floor} onClick={floorToggleModal}>
                            <div className={styles.allFloors}>{activeFloorName == "" || activeFloorName == null ? `${translate.ShopPageAllFloors[lang]}` : activeFloorName}</div>
                            <div className={floorModal ? styles.upArr : styles.dArr}><img alt="arrow" src="/img/map/secSelect/dArr.svg"/></div>
                        </div>
                        <div className={floorModal ? styles.floorDropDown : styles.floorDropDownClose}>
                        <div onClick={() => searchByFloor(`${translate.ShopPageAllFloors[lang]}`)}>{translate.ShopPageAllFloors[lang]}</div>
                            {/* <div onClick={() => searchByFloor(-1)}>{translate.MallMapPageFloor[lang]} -1</div> */}
                            <div onClick={() => searchByFloor(1)}>{translate.MallMapPageFloor[lang]} 1</div>
                            <div onClick={() => searchByFloor(2)}>{translate.MallMapPageFloor[lang]} 2</div>
                        </div>
                    </div>
                </div>
                <div className={styles.selectsContainerRight}>
                <input className={styles.input} type="text" 
                         value={searchInputValueEntertainment}
                         placeholder={translate.ShopPageInput[lang]} 
                         onKeyUp={(e)=>{
                           SearchByInput(e.target.value)}}
                           onChange={(e)=>SetSearchInputValueEntertainment(e.target.value)}/>
                        <div className={styles.searchIcon}><Image alt="search" src="/img/entertainmentPage/secSelect/Search.svg" width={16.5} height={17.5}/></div>
                </div>
            </div> 
        </div>
    )
}



export default Select