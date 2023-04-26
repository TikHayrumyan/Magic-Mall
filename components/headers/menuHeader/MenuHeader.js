/* eslint-disable react-hooks/exhaustive-deps */
import styles from "../../../styles/sass/pages/menuHeader/menuHeader.module.scss"
import Image from 'next/image';
import Link from "next/link"
import { useGlobalProvider } from "../../Providers/GlobalProvider";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { translate } from "../../../translations";


const MenuHeader = () => {
    const [toggleMobileMenu,SetToggleMobileMenu] = useState(false)
    const [subCategoryId,SetSubCategoryId] = useState({})
    useEffect(() => {
        if(toggleMobileMenu){
            document.body.style.overflowY = "hidden"
            document.querySelector(".MainHeadersDiv").style.overflowY = "scroll"
            document.querySelector(".MainHeadersDiv").style.height = "100vh"
        }else{
            document.body.style.overflowY = "scroll"
            document.querySelector(".MainHeadersDiv").style.height = "auto"
            document.querySelector(".MainHeadersDiv").style.overflowY = "visible"
            document.querySelector(".MainHeadersDiv").style.overflowX = "visible"
        }
    },[toggleMobileMenu])
    const [SearchValue,SetSearchValue] = useState("")
    const {GetCategory,
        shopCategoryData,
        foodCategoryData,
        GetFoodCategory,
        GetHeaderMenuFoodFilter,
        GetHeaderMenuShopFilter,
        SetActiveCategoryName,
        SetActiveCategoryNameFood,
        lang,
        GlobalSearchData
        }=useGlobalProvider();


    const SearchInput = (e) => {
        e.preventDefault()
        GlobalSearchData(SearchValue)
        SetToggleMobileMenu(false)
    }
    const router = useRouter();

    const changeLanguage = e => router.push(router.asPath, router.asPath, { locale: e })

    useEffect(()=>{
        GetCategory()
        GetFoodCategory()
    },[])

    useEffect(()=>{
       
    },[shopCategoryData.loading])
    
    useEffect(()=>{
       
    },[foodCategoryData.loading])

    const getFoodFilter = (id,name) => {
        GetHeaderMenuFoodFilter(`${id}`)
        SetActiveCategoryNameFood(name)
    }
    
    const getShopFilter = (id,name,sub_category) => {
        if(sub_category.length){
            SetSubCategoryId({[id]:!subCategoryId[id]})
            if(subCategoryId[id]){
                GetHeaderMenuShopFilter(`${id}`)
                SetActiveCategoryName(name)
            }
        }else{
            GetHeaderMenuShopFilter(`${id}`)
            SetActiveCategoryName(name)
            SetSubCategoryId({[id]:!subCategoryId[id]})
        }
        // GetHeaderMenuShopFilter(`${id}`)
        // SetActiveCategoryName(name)
    }
    const getShopFilterHover = (id,name,sub_category) => {
        if(sub_category.length){
            SetSubCategoryId({[id]:!subCategoryId[id]})
            
        }else{
            SetSubCategoryId({[id]:!subCategoryId[id]})
        }
        // GetHeaderMenuShopFilter(`${id}`)
        // SetActiveCategoryName(name)
    }
    
    const toggleMobile= () => {
        SetToggleMobileMenu(!toggleMobileMenu)
    } 
    return(<div>
        <div className={styles.container}>
            <div className={styles.blockLogo}>
                <Link href="/">
                    <a>
                        <Image className={styles.logo} alt="Logo" src="/img/icons/Logo.svg"/>
                    </a>
                </Link>
            </div>
            <div className={styles.menuContainer}>
                <ul className={lang == "en" ? styles.ulMenuEN : styles.ulMenu}>
                    <li>
                        <div className={styles.ShopMenuHover}>
                        <Link  className={styles.shop} href="/shopPage">
                        <a >{translate.headerMenuShop[lang]} </a>
                        </Link>
                        <div className={lang == "en" ? styles.modal_open_en : styles.modal_open}>
                            {shopCategoryData.loading &&  shopCategoryData.data.map((item) => {
                                return(<>
                                    <div key={item.id} className={styles.CategoryItem} onClick={() => {getShopFilter(item.id,lang == "en" ? item.name : lang == "ru" ? item.name_ru : item.name_am,item.sub_category)}} onMouseEnter={()=>getShopFilterHover(item.id,lang == "en" ? item.name : lang == "ru" ? item.name_ru : item.name_am,item.sub_category)}><span className={styles.icon}></span>{lang == "en" ? item.name : lang == "ru" ? item.name_ru : item.name_am}</div>
                                    {
                                        subCategoryId[item.id] ? <div className={item.sub_category.length ? styles.SubCategoryContainer : styles.SubCategoryContainerNone}>
                                           { item.sub_category?.map((SubItem) => {

                                                return(
                                                    <div key={SubItem.id} className={styles.SubCategoryItem} onClick={() => {getShopFilter(SubItem.id,lang == "en" ? item.name + " " + SubItem.name : lang == "ru" ?  item.name_ru + " " + SubItem.name_ru :  item.name_am + " " + SubItem.name_am,SubItem.sub_category)}}>{lang == "en" ? SubItem.name : lang == "ru" ? SubItem.name_ru : SubItem.name_am}</div>
                                                )
                                            })}
                                        </div> : null
                                    }
                                    </>
                                )
                            })}
                        </div>
                        </div>
                    </li>
                    <li>
                        <Link href="/servicePage">
                        <a>{translate.headerMenuServices[lang]}</a>
                        </Link>                       
                    </li>
                    <li>
                        <Link href="/entertainmentPage">
                        <a>{translate.headerMenuEntertainment[lang]}</a>
                        </Link>
                    </li>
                    <li>
                        <div className={lang == "am" ? styles.foodMenuHover : lang == "ru" ? styles.foodMenuHover_ru : styles.foodMenuHover_en}>
                            <Link href="/foodPage">
                            <a>{translate.headerMenuFood[lang]}</a>
                            </Link>
                            <div className={lang == "am" ? styles.foodMenu : lang == "ru" ? styles.foodMenu_ru : styles.foodMenu_en}>
                            {foodCategoryData.loading &&  foodCategoryData.data.map((item) => {
                                return(
                                    <div key={item.id} onClick={() => getFoodFilter(item.id,item.name)}>{lang == "en" ? item.name : lang == "ru" ? item.name_ru : item.name_am}</div>
                                )
                            })}
                            </div>
                        </div>
                    </li>
                    <li className={styles.specialOffer}>
                        <Link href="/specialOffersPage">
                        <a>{translate.headerMenuSpecialOffers[lang]}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/newsPage">
                        <a>{translate.headerMenuNews[lang]}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogPage">
                        <a>{translate.headerMenuBlog[lang]}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/giftCardPage">
                        <a>{translate.headerMenuGiftCard[lang]}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Map">
                        <a>{translate.headerMenuMallMap[lang]}</a>
                        </Link>
                    </li>
                </ul>
            </div>
            {!toggleMobileMenu ? <div className={styles.mobileMenuHeader} onClick={toggleMobile}><Image layout="fill" alt="mobileMenuHeader" src="/img/icons/mobileMenuHeader.svg"/></div> : <div className={styles.MobileClosButton} onClick={toggleMobile}><Image  alt="mobileClose" layout="fill" src="/img/icons/mobileClose.svg"/></div>}
            
            <div className={toggleMobileMenu ? styles.MobileMenu : styles.mobileMenuHide}>
                {/* Mobile */}
                <div className={styles.MobileMenuContainer}>
                    <div className={styles.languageBlock} onClick={() => SetToggleMobileMenu(false)}>
                            <div onClick={() => changeLanguage(router.locale == "en" ? "am" : "en")}>EN</div>
                            <div onClick={() => changeLanguage(router.locale == "en" ? "am" : "en")}>AM</div>
                            <div onClick={() => changeLanguage(router.locale == "ru" ? "am" : "ru")}>RU</div>
                    </div>
                    <div>
                        <div className={styles.inputBoxActive}>
                            <input className={styles.inputActive}
                            placeholder={translate.Search[lang]} 
                            type="text" 
                            value={SearchValue} 
                            onChange={(e) => SetSearchValue(e.target.value)}
                            />
                            <div className={styles.search}><Image alt="search" src="/img/icons/search.svg" width={40} height={40} onClick={SearchInput}/></div>
                        </div>
                    </div>
                    <ul className={styles.ulMenuMobile} onClick={() => SetToggleMobileMenu(false)}>
                        <li>
                            <div className={styles.ShopMenuHover}>
                            <Link  className={styles.shopMobile} href="/shopPage">
                            <a>{translate.headerMenuShop[lang]} </a>
                            </Link>
                            
                            </div>
                        </li>
                        <li>
                            <Link href="/servicePage">
                            <a>{translate.headerMenuServices[lang]}</a>
                            </Link>                       
                        </li>
                        <li>
                            <Link href="/entertainmentPage">
                            <a>{translate.headerMenuEntertainment[lang]}</a>
                            </Link>
                        </li>
                        <li>
                            <div className={styles.foodMenuHover}>
                                <Link href="/foodPage">
                                <a>{translate.headerMenuFood[lang]}</a>
                                </Link>
                            </div>
                        </li>
                        <li className={styles.specialOfferMobile}>
                            <Link href="/specialOffersPage">
                            <a>{translate.headerMenuSpecialOffers[lang]}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/newsPage">
                            <a>{translate.headerMenuNews[lang]}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blogPage">
                            <a>{translate.headerMenuBlog[lang]}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/giftCardPage">
                            <a>{translate.headerMenuGiftCard[lang]}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Map">
                            <a>{translate.headerMenuMallMap[lang]}</a>
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.LineMobile}></div>
                    <div className={styles.leftContainer}>
                        <div className={styles.forFlex}>
                            <div className={styles.iconPhone}><Image alt="Phone" src="/img/icons/phoneIcon.svg"/></div> 
                            <div><a className={styles.number} href="tel:+374 11 880 888">+374 11 880 888</a></div>
                        </div>
                        <div className={styles.forFlex}>
                            <div className={styles.iconOclock}><Image alt="O'clock" src="/img/icons/oclock.svg"/></div>
                            <div className={styles.oclock}>10:00 - 22:00</div>
                        </div>
                    </div>
                    <div className={styles.middleContainer} onClick={() => SetToggleMobileMenu(false)}>
                        <Link href="/howToGetToMall">
                            <a>
                                <div className={styles.locationIcon}><Image alt="locationIcon" src="/img/icons/locationIcon.svg"/></div>
                                <div className={styles.direction}>{translate.mainHeaderHowToGetToMall[lang]}</div>
                            </a>
                        </Link>
                        {/* <Link href="/howToGetToMall">
                            <div className={styles.freeTransport}>{translate.mainHeaderFreeShuttle[lang]}</div>
                        </Link> */}
                    </div>
                </div>      
            </div>
        </div>
    </div>)
}




export default MenuHeader