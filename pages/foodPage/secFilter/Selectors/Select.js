/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import styles from "../../../../styles/sass/pages/FoodPage/secFilter/secSelect/select.module.scss"
import dArr from "../../../../public/img/FoodPage/secFilter/dArr.svg"
import Image from "next/image"
import { useState,useEffect} from "react"
import Search from "../../../../public/img/FoodPage/secFilter/Search.svg"
import { useGlobalProvider } from "../../../../components/Providers/GlobalProvider"
import axios from "axios"
import { translate } from "../../../../translations"


const Select = () => {
    const {GetFoodCategory,foodCategoryData,HOST_API,searchFoodResult,SetSearchFoodResult,activeCategoryNameFood,SetActiveCategoryNameFood,searchInputValueFood,SetSearchInputValueFood,lang} = useGlobalProvider();
    const [modal,SetModal] = useState(false)
    const [floorModal,SetFloorModal] = useState(false);
    const [initialSearchData,setInitialSearchData]=useState({
       category:null,
       floor:null,
       search:null,
    })
    // const [activeCategoryNameFood,SetActiveCategoryNameFood] = useState("")
    const [activeFloorName,SetActiveFloorName] = useState("")


    useEffect(()=>{
        GetFoodCategory()
        if(searchFoodResult.initialData == false){
            SearchFood(null,null,null)
        }

        return () => {
            SetActiveFloorName("")
            SearchFood(null,null,null)
            SetActiveCategoryNameFood("")
        }
    },[])
  

    const SearchFood =async(category,floor,search,resetData=false)=>{
        let searchForKeys = new Object()
        if(category != null){
            searchForKeys.category = category
            setInitialSearchData({...initialSearchData,category:category})
        }else if(initialSearchData?.category != null && category == null && resetData != true){
            searchForKeys.category = initialSearchData.category
        }
        if(floor != null){
            searchForKeys.floor = floor
            setInitialSearchData({...initialSearchData,floor:floor})
        }
        // else if(initialSearchData?.floor != null && floor == null && resetData != true){
        //     searchForKeys.floor = initialSearchData.floor
        // }
        if(search!=null){
            setInitialSearchData({...initialSearchData,search:search});
            searchForKeys.search=`${search}`;
           }
       
        // console.log(searchForKeys,"asasasa");
        try {
            const searchResponse = await axios({
                url: HOST_API + "food",
                method:"POST",
                headers: {
                    'content-type': 'application/json',
                    
                  },
                  data:JSON.stringify(searchForKeys)
            });
            console.log(searchResponse);
            if(searchResponse.data.length && searchResponse.status == 200){
                SetSearchFoodResult({
                    data: searchResponse.data,
                    loading: true
                })
            }else if(searchResponse.data.length == 0 && searchResponse.status == 200){
                SetSearchFoodResult({
                    data: [],
                    loading: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

   const searchByFloor = (floor) => {
        SearchFood(null,floor,null)
        SetFloorModal(false);
        SetSearchInputValueFood("")
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
        SearchFood(null,null,searchValue)
    },2000)
 }
    const toggleModal  = () =>{
        SetModal(!modal)
        SetFloorModal(false)
    }
    
    const floorToggleModal = () => {
        SetFloorModal(!floorModal)
         SetModal(false)
    }
     
    const blur = () => {
        SetModal(false)
        SetFloorModal(false)
    }


    const changeCategory = (item) => {
        SearchFood(`${item.id}`,null,null)
        SetActiveCategoryNameFood(lang == "en" ? item.name : lang == "ru" ? item.name_ru : item.name_am)
        SetModal(false)
    }
    
    return(
        <div>
            <div className={styles.selectsContainer}>
                 <div className={styles.selectsContainerLeft}>
                    <div className={styles.select} tabIndex={1} onBlur={blur}>
                        <div className={styles.forSelect} onClick={toggleModal}>
                            <div className={styles.allCategory}>{activeCategoryNameFood == "" ?  `${translate.ShopPageAllCategory[lang]}` : activeCategoryNameFood}</div>
                            <div className={modal ? styles.uArr : styles.dArr}><img alt="arrow" src="/img/map/secSelect/dArr.svg"/></div>
                        </div>
                        <div className={modal ? styles.dropDown : styles.dropDownNo}>
                        <div className={styles.AllCaregoriesItem} onClick={() =>{
                             SearchFood(null,null,null,true)
                             SetActiveFloorName("")
                             SetActiveCategoryNameFood("")
                             SetSearchInputValueFood("")
                             SetModal(false)
                             setInitialSearchData({
                                category:null,
                                floor:null,
                                search:null,
                             })
                            }}>{translate.ShopPageAllCategory[lang]}</div>
                            {
                                foodCategoryData.loading && foodCategoryData.data.map((item) => {

                                    return(
                                        <div key={item.id} className={styles.miniSelect} onClick={() => changeCategory(item)}>
                                            <p className={styles.miniTitle}>{lang == "en" ? item.name : lang == "ru" ? item.name_ru : item.name_am}</p>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                    <div tabIndex={0} onBlur={blur}>
                        <div className={styles.floor} onClick={floorToggleModal}>
                            <div className={styles.allFloors}>{activeFloorName == "" || activeFloorName == null ?  `${translate.ShopPageAllFloors[lang]}` : activeFloorName}</div>
                            <div className={floorModal ? styles.upArr : styles.dArr}><img alt="arrow" src="/img/map/secSelect/dArr.svg"/></div>
                        </div>
                        <div className={floorModal ? styles.floorDropDown : styles.floorDropDownClose}>
                            <div onClick={() => searchByFloor(null)}>{translate.ShopPageAllFloors[lang]}</div>
                            {/* <div onClick={() => searchByFloor(-1)}>{translate.MallMapPageFloor[lang]} -1</div> */}
                            <div onClick={() => searchByFloor(1)}>{translate.MallMapPageFloor[lang]} 1</div>
                            <div onClick={() => searchByFloor(2)}>{translate.MallMapPageFloor[lang]} 2</div>
                        </div>
                    </div>
                </div>
                <div className={styles.selectsContainerRight}>
                        <input className={styles.input}
                         type="text" 
                         value={searchInputValueFood}
                         placeholder={translate.ShopPageInput[lang]} 
                         onKeyUp={(e)=>{
                           SearchByInput(e.target.value)}}
                           onChange={(e)=>SetSearchInputValueFood(e.target.value)}/>
                        <div className={styles.searchIcon}><Image alt="search" src={Search} width={16.5} height={17.5}/></div>
                </div>
            </div> 
        </div>
    )
}



export default Select