/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/entertainmentPage/secFilter/filter.module.scss"
import arrow from "../../../public/img/entertainmentPage/secFilter/Arrow.svg"
import cardContent from "../../../public/img/entertainmentPage/secFilter/cardContent.svg"
import Image from "next/image"
import Link from "next/Link"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { useState,useEffect } from "react"
import { translate } from "../../../translations"
import InfiniteScroll from 'react-infinite-scroll-component';
import load from "../../../public/img/specialOffersPage/newSpecialOffers/load.svg"

const Filter = () => {
    const [initialCount,SetInitialCount] = useState(6)
    const {HOST_API_IMG,entertainmentData,searchInputValueEntertainment,lang,waitData,SetWaitData} = useGlobalProvider();

    function shorten(text, maxLength) {
        var ret = text;
        if (ret?.length > maxLength) {
            ret = ret.substr(0,maxLength) + "...";
        }
        return ret;
    }
    const ShowData = () => {
        SetInitialCount(initialCount + 6)
     }
     useEffect(() => {
        setTimeout(() => {
            SetWaitData(true)
        }, 7000);
      },[SetWaitData, entertainmentData.loading])

    return(
         <div className={styles.filter}>
            <div className={styles.container}>

            <InfiniteScroll
                dataLength={initialCount} //This is important field to render the next data
                next={ShowData}
                hasMore={entertainmentData.data.length >= initialCount ? true : false}
                loader={<div className={styles.loading}><img alt="load" src={load.src}/></div>}
                style={{display: 'flex', flexWrap: 'wrap',gap:'1vw'}}
                >
                {
                entertainmentData.loading && entertainmentData.data.length ? entertainmentData.data.map(({id,thumbnail,name,name_am,name_ru,description,description_ru,description_am},index) => {

                    if(index < initialCount){

                        return( <Link key={id} href={`/entertainmentSinglePage/${id}`}><a>
                            <div className={styles.background} style={{backgroundImage:`url(${HOST_API_IMG+thumbnail})`}}>
                                <div className={styles.cardContent} style={{backgroundImage:`url(${cardContent.src})`}}>
                                <div className={styles.cardContentContainer}>  
                                    <div className={styles.title}>{lang == "en" ? name : lang == "ru" ? name_ru : name_am}</div>
                                    <div className={styles.description}>{lang == "en" ? shorten(description,75) : lang == "ru" ? shorten(description_ru,75) : shorten(description_am,75)}</div>
                                    <div className={styles.arrowBlock}><Image alt="arrow" src={arrow}/></div>
                                </div> 
                                </div>
                        </div>
                        </a>
                        </Link>
                        )}
                    }) 
                    : !waitData ? <div className={styles.loaderContainer}>
                        <div className={styles.loading}><img alt="load" src={load.src}/></div>
                        </div> : <div>
                    <div className={styles.searchResult}>{translate.SearchResult[lang]} - <span>{searchInputValueEntertainment}</span></div>
                    <div className={styles.searchResultNotFound}>{translate.SearchNotResult[lang]}</div>
                </div>
                }
                 </InfiniteScroll>
                {/* {entertainmentData.data.length <= initialCount || <div className={styles.buttonBlock}>
                    <button className={styles.button} onClick={() => ShowData()}>{translate.ShopPageSeeMore[lang]}</button>
                </div>} */}
            </div>
                
        </div>
    )
}


export default Filter