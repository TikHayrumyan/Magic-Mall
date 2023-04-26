/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import styles from "../../../styles/sass/pages/Mainheader/mainHeader.module.scss"


import { useRouter } from "next/router";
import Link from "next/link"
import { translate } from "../../../translations";
import { useGlobalProvider } from "../../Providers/GlobalProvider";


const MainHeader = () => {

    
    const router = useRouter();
    const {lang,GlobalSearchData,globalSearchResult} = useGlobalProvider()
    const [OpenSearch,SetOpenSearch] = useState(false)
    const [SearchValue,SetSearchValue] = useState("")
    
    const openInput = (e) => {
        e.preventDefault()
        SetOpenSearch(true)  
        if(OpenSearch){
            GlobalSearchData(SearchValue)
        }
    }
    
   

    const closeInput = () => {
        SetOpenSearch(false)
    }
    const EnterSearch = (e) => {
        e.preventDefault()
        GlobalSearchData(SearchValue)
    }

    const changeLanguage = e => router.push(router.asPath, router.asPath, { locale: e })
    
    return(
        <div className= {styles.container}>
            <div className={styles.leftContainer}>
               <div className={styles.iconPhone}><img alt="Phone" src="/img/icons/phoneIcon.svg"/></div> 
                <div className={styles.numberDiv}><a className={styles.number} href="tel:+374 11 880 888">+374 11 880 888</a></div>
               <div className={styles.iconOclock}><img alt="O'clock" src="/img/icons/oclock.svg"/></div>
                <div className={styles.oclock}>10:00 - 22:00</div>
            </div>
            <div className={styles.middleContainer}>
                <Link href="/howToGetToMall">
                    <div className={styles.locationIcon}><img alt="locationIcon" src="/img/icons/locationIcon.svg"/></div>
                </Link>
                <Link href="/howToGetToMall">
                    <div className={styles.direction}>{translate.mainHeaderHowToGetToMall[lang]}</div>
                </Link>
                {/* <Link href="/howToGetToMall">
                <div className={styles.freeTransport}>{translate.mainHeaderFreeShuttle[lang]}</div>
                </Link> */}
            </div>
            <div className={styles.rightContainer}>
                    <form className={OpenSearch ? styles.inputBoxActive : styles.inputBox} onMouseLeave={closeInput} onSubmit={EnterSearch}>
                        <input className={OpenSearch ? styles.inputActive : styles.input} 
                        placeholder={translate.Search[lang]} 
                        type="text" 
                        value={SearchValue} 
                        onChange={(e) => SetSearchValue(e.target.value)}/>
                        <div className={styles.search}><img alt="search" src="/img/icons/search.svg" width={50} height={50} onClick={openInput} /></div>
                    </form>
                <div className={styles.languageBlock}>
                    <div className={styles.language}>
                        {router.locale == "am" ? "ՀԱՅ" : router.locale == "ru" ? "РУС" : "ENG"}
                    </div>
                    <div className={styles.dArr}><img alt="downArr" src="/img/icons/dArr.svg"/></div>
                    <div className={styles.hoverLanguageBlock}>
                        {/* <div className={styles.ru} onClick={() => {
                            changeLanguage(router.locale == "ru" ? "am" : "ru")
                            
                            }}>
                            {router.locale == "ru" ? "ՀԱՅ" : "РУС"}
                        </div> */}
                        <div className={styles.line}></div>
                        <div className={styles.am} onClick={() => changeLanguage(router.locale == "en" ? "am" : "en")}>
                            {router.locale == "en" ? "ՀԱՅ" : "ENG"}
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default MainHeader