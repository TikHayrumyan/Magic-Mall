/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/servicePage/secFilter/filter.module.scss"
import Select from "./Selectors/Select"

import CardSubscribe from "../../homePage/secCardSubscribe/CardSubscribe"

import Link from "next/link"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { translate } from "../../../translations"
import { useEffect, useState } from "react"
import InfiniteScroll from 'react-infinite-scroll-component';



const SecFilter = () => {

    const {HOST_API_IMG,servicesData,searchInputValueService,lang,waitData,SetWaitData} = useGlobalProvider();
    const [initialCount,SetInitialCount] = useState(16)
   
    const ShowData = () => {
       SetInitialCount(initialCount + 4)
    }
    useEffect(() => {
        setTimeout(() => {
            SetWaitData(true)
        }, 7000);
      },[SetWaitData, servicesData.loading])
    return(
        <div className={styles.filter}>
            <div className={styles.container}>
                <Select/>
                <div className={styles.foods}>

                <InfiniteScroll
                dataLength={initialCount} //This is important field to render the next data
                next={ShowData}
                hasMore={servicesData.data.length >= initialCount ? true : false}
                loader={<div className={styles.loading}><img alt="load" src="/img/specialOffersPage/newSpecialOffers/load.svg"/></div>}
                style={{display: 'flex', flexWrap: 'wrap',gap:'2vw'}}
                >
                    {
                        servicesData.loading && servicesData.data.length ? servicesData.data.map(({id,logo,floor,icon,facebook,instagram,linkedin,phone},index) => {


                            if(index < initialCount){

                            return ( 
                                
                                    <a key={id} href={`/serviceSinglePage/${id}`}>
                                    <div key={id} className={styles.first}>
                                        <div className={styles.patternBlock}>
                                            <div className={styles.patternBackground}  style={{backgroundImage:`url(/img/servicePage/secFilter/cutPattern.svg)`}}>
                                                <div className={styles.title}>
                                                    <span className={styles.number}>{floor}</span>
                                                    <span className={styles.floor}>{translate.MallMapPageFloor[lang]}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.bankLogoBlock}>
                                            <div className={styles.bankLogo}><img className={styles.logo} alt="bankLogo" src={HOST_API_IMG+logo}/></div>
                                        </div>
                                        
                                        <div className={styles.hoverBlock}>
                                            
                                            {phone && <div className={styles.phonBlock}>
                                                        <div className={styles.phoneIcon}><img alt="phoneIcon" src="/img/icons/whitPhoneIcon.svg"/></div>
                                                        <div className={styles.numberPhone}><a className={styles.numberPhone} href={`tel:${phone}`}>+374 11 880 888</a></div>
                                                    </div>}
                                            <div className={styles.networkBlock}>
                                                {facebook && <div className={styles.facebook}><Link href={facebook}><a target="_blank"><img alt="facebook" src="/img/icons/Facebook.svg"/></a></Link></div>}
                                                {instagram && <div className={styles.instagram}><Link href={instagram}><a  target="_blank"><img alt="instagram" src="/img/icons/Instagram.svg"/></a></Link></div>}
                                            </div>
                                        </div>
                                        <div className={styles.brandBook}>
                                            <div className={styles.iconBook}><img alt="iconBook" src="/img/servicePage/secFilter/iconBook.svg"/></div>
                                        </div>
                                    </div>
                                    </a>
                              )}
                        }) : !waitData ? <div className={styles.loaderContainer}>
                        <div className={styles.loading}><img alt="load" src="/img/specialOffersPage/newSpecialOffers/load.svg"/></div>
                        </div> :  <div>
                        <div className={styles.searchResult}>{translate.SearchResult[lang]} - <span>{searchInputValueService}</span></div>
                        <div className={styles.searchResultNotFound}>{translate.SearchNotResult[lang]}</div>
                    </div>
                    }
                      </InfiniteScroll>
                </div>
                {/* {servicesData.data.length <= initialCount || <div className={styles.buttonBlock}><button className={styles.button} onClick={() => ShowData()}>տեսնել ավելին</button></div>} */}
                <div className={styles.CardSubscribe}>
                    <CardSubscribe/>
                </div>
            </div>
            
        </div>
    )
}

export default SecFilter