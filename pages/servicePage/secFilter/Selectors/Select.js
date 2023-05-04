/* eslint-disable @next/next/no-img-element */
import styles from "../../../../styles/sass/pages/servicePage/secFilter/secSelect/select.module.scss"

import Image from "next/image"
import { useEffect, useState } from "react"

import axios from "axios"
import { useGlobalProvider } from "../../../../components/Providers/GlobalProvider"
import { translate } from "../../../../translations"



const Select = () => {

    const [floorModal,SetFloorModal] = useState(false)
    const {HOST_API,servicesData,SetServicesData,searchInputValueService,SetSearchInputValueService,lang} = useGlobalProvider();
    const [activeFloorName,SetActiveFloorName] = useState("")
    const [initialData,SetInitialData] = useState({
        floor:null,
        search:null
    })
  
    useEffect(() => {
        searchData()
    },[])

    useEffect(() => {

    },[servicesData.loading])

  
    const floorToggleModal = () => {
        SetFloorModal(!floorModal)
    }

    const blur = () => {
        SetFloorModal(false)
    }

    const searchByFloor = (floor) => {
        searchData(floor,null)
        SetFloorModal(false);
        SetSearchInputValueService("")
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
                url:HOST_API + "services",
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                  },
                  data:JSON.stringify(searchForKeys)
            });
            if(response.data.length && response.status == 200){
                SetServicesData({
                    data: response.data,
                    loading: true
                })
            }else if(response.data.length == 0 && response.status == 200){
                SetServicesData({
                    data: [],
                    loading: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <div>
            <div className={styles.selectsContainer}>
                 <div className={styles.selectsContainerLeft}>
                    <div  tabIndex={0} onBlur={blur}>
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
                         value={searchInputValueService}
                         placeholder={translate.ShopPageInput[lang]}
                         onKeyUp={(e)=>{
                           SearchByInput(e.target.value)}}
                           onChange={(e)=>SetSearchInputValueService(e.target.value)}/>
                        <div className={styles.searchIcon}><Image alt="search" src="/img/servicePage/secFilter/Search.svg" width={16.5} height={17.5}/></div>
                </div>
            </div> 
        </div>
    )
}



export default Select