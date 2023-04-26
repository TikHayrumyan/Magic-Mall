/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/FoodPage/secFilter/filter.module.scss"
import Select from "./Selectors/Select"
import cutPattern from "../../../public/img/FoodPage/secFilter/cutPattern.svg"
import Image from "next/image"
import iconBook from "../../../public/img/FoodPage/secFilter/iconBook.svg"
import MainBackground from "../../../public/img/FoodPage/secFilter/MainBackground.jpg"
import CardSubscribe from "../../homePage/secCardSubscribe/CardSubscribe"
import whitPhoneIcon from "../../../public/img/icons/whitPhoneIcon.svg"
import Facebook from "../../../public/img/icons/Facebook.svg"
import Instagram from "../../../public/img/icons/Instagram.svg"
import Link from "next/link"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"
import { useEffect, useState } from "react"
import InfiniteScroll from 'react-infinite-scroll-component';
import load from "../../../public/img/specialOffersPage/newSpecialOffers/load.svg"

const SecFilter = () => {
    const [initialCount,SetInitialCount] = useState(8)
    const {searchFoodResult,HOST_API_IMG,searchInputValueFood,lang,waitData,SetWaitData} = useGlobalProvider()
    
    const ShowData = () => {
        SetInitialCount(initialCount + 4)
     }
     useEffect(() => {
        setTimeout(() => {
            SetWaitData(true)
        }, 7000);
      },[SetWaitData, searchFoodResult.loading])

    
    return(
        <div className={styles.filter}>
            <div className={styles.container}>
                <Select/>
                <div className={styles.foods}>
                    <InfiniteScroll
                    dataLength={initialCount} //This is important field to render the next data
                    next={ShowData}
                    hasMore={searchFoodResult.data.length >= initialCount ? true : false}
                    loader={<div className={styles.loading}><img alt="load" src={load.src}/></div>}
                    style={{display: 'flex', flexWrap: 'wrap',gap:'2.2vw'}}
                    >
                    {
                        searchFoodResult.loading && searchFoodResult.data.length ? searchFoodResult.data.map(({id,imgBig,floor,name,name_am,name_ru,logo,phone,facebook,instagram,thumbnail},index) => {

                            if(index < initialCount){

                            return (<a key={id} href={`/foodSinglePage/${id}`}>
                                    <div className={styles.first} style={{backgroundImage:`url(${HOST_API_IMG+thumbnail})`}}>
                                        <div className={styles.patternBlock}>
                                            <div className={styles.patternBackground}  style={{backgroundImage:`url(${cutPattern.src})`}}>
                                                <div className={styles.title}>
                                                    <span className={styles.number}>{floor}</span>
                                                    <span className={styles.floor}>{translate.MallMapPageFloor[lang]}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.hoverBlock}>
                                            <div >
                                             <img className={styles.logoBackground} alt="logo" src={HOST_API_IMG+logo}/>   
                                            </div>
                                            {phone && <div className={styles.phonBlock}>
                                                <div className={styles.phoneIcon}><Image alt="phoneIcon" src={whitPhoneIcon}/></div>
                                                <div><a className={styles.number} href={`tel:${phone}`}>{phone}</a></div>
                                            </div>}
                                            <div className={styles.networkBlock}>
                                                {facebook && <div className={styles.facebook}><Link href={facebook}><a target="_blank"><Image alt="facebook" src={Facebook}/></a></Link></div>}
                                               {instagram && <div className={styles.instagram}><Link href={instagram}><a  target="_blank"><Image alt="instagram" src={Instagram}/></a></Link></div>}

                                            </div>
                                        </div>
                                        <div className={styles.brandBook}>
                                            <div className={styles.brand}>{lang == "en" ? name : lang == "ru" ? name_ru : name_am}</div>
                                            <div className={styles.iconBook}><Image alt="iconBook" src={iconBook}/></div>
                                        </div>
                                    </div>
                                    </a>
                                    )}
                        })
                        : !waitData ? <div className={styles.loaderContainer}>
                        <div className={styles.loading}><img alt="load" src={load.src}/></div>
                        </div> : <div>
                        <div className={styles.searchResult}>{translate.SearchResult[lang]} - <span>{searchInputValueFood}</span></div>
                        <div className={styles.searchResultNotFound}>{translate.SearchNotResult[lang]}</div>
                    </div>
                    }
                    </InfiniteScroll>
                </div>
                {/* {searchFoodResult.data.length <= initialCount || <div className={styles.buttonBlock}><button className={styles.button} onClick={() => ShowData()}>տեսնել ավելին</button></div>} */}
                <div className={styles.CardSubscribe}>
                    <CardSubscribe/>
                </div>
            </div>
            
        </div>
    )
}

export default SecFilter