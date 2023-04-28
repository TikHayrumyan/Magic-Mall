/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import styles from "../../../../styles/sass/pages/shopPage/secFilter/secSelect/select.module.scss"

import { useEffect, useState } from "react"
import { useGlobalProvider } from "../../../../components/Providers/GlobalProvider"
import axios from "axios"
import { translate } from "../../../../translations"
import Image from "next/image"


const Select = () => {
    const { GetCategory,
        shopCategoryData,
        HOST_API,
        setSearchResult,
        searchResult,
        activeCategoryName,
        SetActiveCategoryName,
        searchInputValue,
        SetSearchInputValue,
        lang
    } = useGlobalProvider();
    
    const [activeSubCategory, SetActiveSubCategory] = useState([]);
    const [activeSubIndex, setActiveSubIndex] = useState(null);
    const [activeFloorName, SetActiveFloorName] = useState("")
    const [initialSearchParams, setInitialSearchParams] = useState({
        category: null,
        floor: null,
        search: null,
    })
    const [activeSubElemName, SetActiveSubElemName] = useState("")
    useEffect(() => {
        GetCategory()
        if (searchResult.initialData == false) {
            SearchShop(null, null, null)
        }

        return () => {
            setInitialSearchParams(null, null, null)
            SetActiveFloorName("")
            setActiveSubIndex(null)
            SetActiveSubCategory([])
            SearchShop(null, null, null)
            SetActiveCategoryName("")
            SetActiveSubElemName(" ")
        }
    }, [])

    useEffect(() => {

    }, [shopCategoryData.loading])
    const [modal, SetModal] = useState(false)
    const [floorModal, SetFloorModal] = useState(false)
    const toggleModal = () => {
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

    const ChangeSubCategory = (item) => {
        if (activeSubIndex == item.id) {
            SetActiveCategoryName(lang == "en" ? item.name : lang == "ru" ? item.name_ru : item.name_am)
            SetActiveSubCategory([]);
            setActiveSubIndex(null);
            SetActiveSubElemName(" ")
        } else {
            SetActiveCategoryName(lang == "en" ? item.name : lang == "ru" ? item.name_ru : item.name_am)
            SearchShop(`${item.id}`, null, null);
            setActiveSubIndex(item.id)
            SetActiveSubCategory(item.sub_category);
            SetSearchInputValue("")
            SetActiveSubElemName(" ")
        }
    }
    const SearchShop = async (category, floor, search, resetData = false) => {
        let searchData = new Object;
        if (category != null) {
            setInitialSearchParams({ ...initialSearchParams, category: category });
            searchData.category = category;
        } else if (initialSearchParams?.category != null && category == null && resetData != true) {
            searchData.category = initialSearchParams.category
        }
        if (floor !== null) {
            setInitialSearchParams({ ...initialSearchParams, floor: floor });
            searchData.floor = `${floor}`
        }
        if (search != null) {
            setInitialSearchParams({ ...initialSearchParams, search: search });
            searchData.search = `${search}`;
        }

        try {
            const searchResponse = await axios({
                url: HOST_API + "shops",
                method: "POST",
                data: JSON.stringify(searchData),
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            if (searchResponse.data && searchResponse.status == 200) {
                setSearchResult({ data: [...searchResponse.data], loading: true })
            }
        } catch (error) {
            console.log(error);
        }
    }

    const SearchByFloor = (floor) => {
        SearchShop(null, floor, null);
        SetFloorModal(false);
        SetSearchInputValue("")
        SetActiveFloorName(floor)
        if (floor == 1) {
            SetActiveFloorName(translate.MallMapPageFloor[lang] + " " + floor)
        } else if (floor == 2) {
            SetActiveFloorName(translate.MallMapPageFloor[lang] + " " + floor)
        }

    }

    const SearchByInput = (searchValue) => {
        setTimeout(() => {
            SearchShop(null, null, searchValue)
        }, 1000)
    }
    return (
        <div>
            <div className={styles.selectsContainer}>
                <div className={styles.selectsContainerLeft}>
                    <div className={styles.select} tabIndex={0} onBlur={blur}>
                        <div className={styles.forSelect} onClick={toggleModal}>
                            <div className={styles.allCategory}>{activeCategoryName == "" ? `${translate.ShopPageAllCategory[lang]}` : activeCategoryName + " " + activeSubElemName}</div>
                            <div className={modal ? styles.uArr : styles.dArr}><img alt="arrow" src="/img/map/secSelect/dArr.svg" /></div>
                        </div>
                        <div className={modal ? styles.dropDown : styles.dropDownNo}>
                            <div className={styles.AllCaregoriesItem} onClick={() => {
                                SearchShop(null, null, null, true)
                                SetActiveFloorName("")
                                SetActiveCategoryName("")
                                setInitialSearchParams({
                                    category: null,
                                    floor: null,
                                    search: null,
                                })
                                SetModal(false)
                                SetSearchInputValue("")
                                setActiveSubIndex(null)
                            }}>{translate.ShopPageAllCategory[lang]}</div>
                            {shopCategoryData.loading && shopCategoryData.data.map((item) => {
                                return (
                                    <>
                                        <div
                                            className={styles.categories}
                                            key={item.id}
                                            onClick={() => {
                                                ChangeSubCategory(item)
                                                if (!item.sub_category?.length) {
                                                    SetModal(false)
                                                }
                                            }}>
                                            <div className={styles.miniSelect}>
                                                {item.sub_category?.length ? <div className={activeSubIndex == item.id ? styles.downArr : styles.lArr}><img alt="arrow" src="/img/shopPage/secFilter/lArr.svg" /></div> : null}
                                                <p className={styles.miniTitle}>{lang == "en" ? item.name : lang == "ru" ? item.name_ru : item.name_am}</p>

                                            </div>
                                        </div>
                                        {activeSubIndex == item.id && activeSubCategory?.map((subelem) => {
                                            return (
                                                <div key={subelem.id} onClick={() => {
                                                    SearchShop(`${subelem.id}`, null, null)
                                                    SetModal(false)
                                                    SetActiveSubElemName(lang == "en" ? subelem.name : lang == "ru" ? subelem.name_ru : subelem.name_am)

                                                }}>
                                                    <div className={styles.miniDropDown}>
                                                        {subelem.sub_category?.length ? <div><img alt="arrow" src="/img/shopPage/secFilter/lArr.svg" /></div> : null}
                                                        <p className={styles.subCategory}>{lang == "en" ? subelem.name : lang == "ru" ? subelem.name_ru : subelem.name_am}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>
                                )
                            })
                            }

                        </div>
                    </div>
                    <div tabIndex={0} onBlur={blur}>
                        <div className={styles.floor} onClick={floorToggleModal}>
                            <div className={styles.allFloors}>{activeFloorName == "" || activeFloorName == null ? `${translate.ShopPageAllFloors[lang]}` : activeFloorName}</div>
                            <div className={floorModal ? styles.upArr : styles.dArr}><img alt="arrow" src="/img/map/secSelect/dArr.svg" /></div>
                        </div>
                        <div className={floorModal ? styles.floorDropDown : styles.floorDropDownClose}>
                            <div onClick={() => SearchByFloor(null)}>{translate.ShopPageAllFloors[lang]}</div>
                            {/* <div onClick={()=>SearchByFloor(-1)}>{translate.MallMapPageFloor[lang]} -1</div> */}
                            <div onClick={() => SearchByFloor(1)}>{translate.MallMapPageFloor[lang]} 1</div>
                            <div onClick={() => SearchByFloor(2)}>{translate.MallMapPageFloor[lang]} 2</div>
                        </div>
                    </div>
                </div>
                <div className={styles.selectsContainerRight}>
                    <input
                        className={styles.input}
                        type="text"
                        value={searchInputValue}
                        placeholder={translate.ShopPageInput[lang]}
                        onKeyUp={(e) => {
                            SearchByInput(e.target.value)

                        }}
                        onChange={(e) => SetSearchInputValue(e.target.value)}

                    />
                    <div className={styles.searchIcon}><Image alt="search" src="/img/shopPage/secFilter/Search.svg" width={16.5} height={17.5} /></div>
                </div>
            </div>
        </div>
    )
}



export default Select