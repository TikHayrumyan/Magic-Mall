/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/shopPage/secFilter/filter.module.scss"
import Select from "./Selectors/Select"
import CardSubscribe from "../../homePage/secCardSubscribe/CardSubscribe"

import Link from "next/link"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"
import { useEffect, useState } from "react"
import InfiniteScroll from 'react-infinite-scroll-component';

const SecFilter = () => {
      const [initialCount,SetInitialCount] = useState(16)
      const {lang,HOST_API_IMG,searchResult,searchInputValue,waitData,SetWaitData}= useGlobalProvider();
      const ShowData = () => {
        SetInitialCount(initialCount + 4)
     }
      useEffect(() => {
        setTimeout(() => {
            SetWaitData(true)
        }, 10000);
      },[SetWaitData, searchResult.loading])
    return(
        <div className={styles.filter}>
            <div className={styles.container}>
                <Select/>
                <div className={styles.shops}>
                <InfiniteScroll
                dataLength={initialCount} //This is important field to render the next data
                next={ShowData}
                hasMore={searchResult.data.length >= initialCount ? true : false}
                loader={<div className={styles.loading}><img alt="load" src="/img/specialOffersPage/newSpecialOffers/load.svg"/></div>}
                style={{display: 'flex', flexWrap: 'wrap',gap:'2.2vw'}}
                >
                    {
                        searchResult.loading && searchResult.data.length ? searchResult.data.map(({id,thumbnail,floor,name,name_am,name_ru,logo,phone,facebook,instagram,sale,sale_am,sale_ru},index) => {

                            if(index < initialCount){
                            return (
                             <a key={id} href={`/shopSinglePage/${id}`}>
                                    <div className={styles.first} style={{backgroundImage:`url(${HOST_API_IMG+thumbnail})`}}>
                                        <div className={styles.patternBlock}>
                                           {sale && <div className={styles.salePattern} style={{backgroundImage: `/img/shopPage/secFilter/salePattern.svg`}}>
                                                <div className={styles.titleSale}>
                                                    <div className={styles.sale}>{translate.sale[lang]}</div>
                                                    <div className={styles.saleUntil}>{lang == "en" ? sale : lang == "ru" ? sale_ru : sale_am}</div>
                                                </div>
                                            </div>}
                                            {sale && <div className={styles.salePatternMobile} style={{backgroundImage: `/img/shopPage/secFilter/salePatternMobile.svg`}}>
                                                <div className={styles.titleSaleMobile}>
                                                    <div className={styles.saleMobile}>{translate.sale[lang]}</div>
                                                    <div className={styles.saleUntilMobile}>{lang == "en" ? sale : lang == "ru" ? sale_ru : sale_am}</div>
                                                </div>
                                            </div>}
                                            <div className={styles.patternBackground}  style={{backgroundImage:`/img/shopPage/secFilter/cutPattern.svg`}}>
                                                <div className={styles.title}>
                                                    <span className={styles.number}>{floor}</span>
                                                    <span className={styles.floor}>{translate.MallMapPageFloor[lang]}</span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className={styles.hoverBlock}>
                                            <div className={styles.logoBackground}>
                                                <img  className={styles.logoBackground} alt="logo" src={HOST_API_IMG+logo}/>
                                            </div>
                                            {phone && <div className={styles.phonBlock}>
                                                <div className={styles.phoneIcon}><img alt="phoneIcon" src="/img/icons/whitPhoneIcon.svg"/></div>
                                                <div><a className={styles.number} href={`tel:${phone}`}>{phone}</a></div>
                                            </div>}
                                            <div className={styles.networkBlock}>
                                              {facebook && <div className={styles.facebook}><Link href={facebook}><a target="_blank"><img alt="facebook" src="/img/icons/Facebook.svg"/></a></Link></div>}
                                                {instagram && <div className={styles.instagram}><Link href={instagram}><a  target="_blank"><img alt="instagram" src="/img/icons/Instagram.svg"/></a></Link></div>}

                                            </div>
                                        </div>
                                        <div className={styles.brandBook}>
                                            <div className={styles.brand}>{lang == "en" ? name : lang == "ru" ? name_ru : name_am}</div>
                                            <div className={styles.iconBook}><img alt="iconBook" src="/img/shopPage/secFilter/iconBook.svg"/></div>
                                        </div>
                                    </div>
                                    </a>
                                   
                                    )}
                        })
                        : !waitData ? <div className={styles.loaderContainer}>
                                <div className={styles.loading}><img alt="load" src="/img/specialOffersPage/newSpecialOffers/load.svg"/></div>
                        </div> : <div>
                            <div className={styles.searchResult}>{translate.SearchResult[lang]} - <span>{searchInputValue}</span></div>
                            <div className={styles.searchResultNotFound}>{translate.SearchNotResult[lang]}</div>
                        </div>
                    }
                    </InfiniteScroll>
                </div>
                {/* {searchResult.data.length <= initialCount || <div className={styles.buttonBlock}><button className={styles.button} onClick={() => ShowData()}>{translate.ShopPageSeeMore[lang]}</button></div>} */}
                <div className={styles.CardSubscribe}>
                    <CardSubscribe/>
                </div>
            </div>
            
        </div>
    )
}

export default SecFilter