/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import styles from "../../../styles/sass/pages/NewsPage/secNews/secNews.module.scss"
import calendar from "../../../public/img/newsPage/secNews/calendar.svg"
import arrow from "../../../public/img/newsPage/secNews/arrow.svg"
import pattern from "../../../public/img/newsPage/secNews/pattern.svg"
import prev from "../../../public/img/newsPage/secNews/prev.svg"
import next from "../../../public/img/newsPage/secNews/next.svg"
import Link from "next/link"
import dArr from "../../../public/img/newsPage/secNews/dArr.svg"
import { useEffect, useState,useRef } from "react"
import axios from "axios"
import {useGlobalProvider} from "../../../components/Providers/GlobalProvider"
import ReactPaginate from 'react-paginate';
import Discounts from "../discounts/Discounts"
import { translate } from "../../../translations"


const SecNews = () => {
    const [activeCategoryName,SetActiveCategoryName] = useState("")
    const [floorModal,SetFloorModal] = useState(false)
    const [newsData,SetNewsData] = useState({data:[],loading:false,type:undefined,initialOffSet:0,itemLength:0,specialOffers:[]})
    const {HOST_API,HOST_API_IMG,lang} = useGlobalProvider()
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const myRef = useRef(null);
    const handleScroll = (ref) => {
        window.scrollTo({
          top: ref?.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      };

      const floorToggleModal = () => {
        SetFloorModal(!floorModal)
    }

    const blur = () => {
        SetFloorModal(false)
    }
    useEffect(() => {
        GetNewsData(undefined)
    },[])
    useEffect(() => {
        setPageCount(Math.ceil(newsData.itemLength / 3))
        
    },[newsData.loading,newsData.itemLength])

    

    useEffect(() => {
        GetNewsData(undefined,itemOffset)
        
        handleScroll(myRef.current)            
        
    },[itemOffset])
    
    const GetNewsData = async(types,offset,ref) => {
        try {
            let data = {}
            if(types != undefined){
                data.type = types
            }
            else if(offset != 0){
                data.offset = offset
            }
            const response = await axios({
                url: HOST_API+"news",
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                  },
                data:JSON.stringify({...data})
            })
            console.log(response,"response News");
            if(response.data.news.length && response.status == 200){
                SetNewsData({
                    data: response.data.news,
                    loading :true,
                    type: types,
                    initialOffSet:0,
                    itemLength: response.data.count,
                    specialOffers: response.data.specialOffers
                })
            }else if(response.data.news.length == 0 && response.status == 200){
                SetNewsData({
                    data: [],
                    loading: true,
                    type: types,
                    initialOffSet: 0,
                    specialOffers:[]
                })
            }
            
               
              
            SetFloorModal(false)
        } catch (error) {
            console.log(error);
        }
    }
     
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 3);
        
        setItemOffset(newOffset);
        
    };
   
    return(
        <>
       {newsData.loading && <div className={styles.SecNews}>
            <div className={styles.container}>
                <div  className={styles.titleBlock}>
                    <div className={styles.title}>{translate.NewsPageCategoryNews[lang]}</div>
                </div>
                <div tabIndex={0} onBlur={blur} className={styles.dropDownBlock} ref={myRef}>
                        <div className={styles.floor} onClick={floorToggleModal}>
                            <div className={styles.allFloors}>{activeCategoryName == "" ? `${translate.NewsPageSelectAll[lang]}` : activeCategoryName}</div>
                            <div className={floorModal ? styles.upArr : styles.dArr}><img alt="arrow" src="/img/map/secSelect/dArr.svg"/></div>
                        </div>
                        <div className={floorModal ? styles.floorDropDown : styles.floorDropDownClose}>
                            <div onClick={() => {
                                GetNewsData(undefined)
                                SetActiveCategoryName(`${translate.NewsPageSelectAll[lang]}`)
                            }}>{translate.NewsPageSelectAll[lang]}</div>
                            <div onClick={() => {
                                GetNewsData(1)
                                SetActiveCategoryName(`${translate.NewsPageCategoryNews[lang]}`)
                            }}>{translate.headerMenuNews[lang]}</div>
                            <div onClick={() => {
                                GetNewsData(2)
                                SetActiveCategoryName(`${translate.NewsPageCategoryEvents[lang]}`)
                            }}>{translate.NewsPageCategoryEvents[lang]}</div>
                        </div>
                    </div>
                {
                    newsData.data.map(({id,date,title,title_am,title_ru,description,description_am,description_ru,thumbnail},index) => {

                        return(
                            <Link  key={id} href={`/newsSinglePage/${id}`}>
                            <a>
                            <div className={styles.pagination} >
                                <div className={index % 2 != 1 ? styles.PaginationContainerReverse : styles.PaginationContainer}>
                                    <div className={styles.descripBlock}>
                                        <div className={styles.pattern}><img alt="pattern" src={pattern}/></div>
                                        <div className={styles.dateBlock}>
                                            <div className={styles.calendar}><img alt="calendar" src={calendar}/></div>
                                            <div className={styles.date}>{date}</div>
                                        </div>
                                        <div className={styles.descripTitleBlock}>
                                            <div className={styles.descripTitle}>{lang == "en" ? title : lang == "ru" ? title_ru : title_am}</div>
                                        </div>
                                        <div className={styles.descriptionBlock}>
                                            <div className={styles.description}>{lang == "en" ? description : lang == "ru" ? description_ru : description_am}</div>
                                        </div>
                                        <div><img className={styles.imgMobile} alt="img" src={HOST_API_IMG+thumbnail} width={764} height={589}/></div>
                                        <div className={styles.btnBlock}>
                                            <button className={styles.button}>{translate.buttonSeeMore[lang]}</button>
                                            <div className={styles.arrow}><img alt="arrow" src={arrow}/></div>
                                            <div className={styles.patternMobile}><img alt="pattern" src={pattern}/></div>
                                        </div>
                                    </div>
                                    <div><img className={styles.img} alt="img" src={HOST_API_IMG+thumbnail} width={764} height={589}/></div>
                                </div>
                            </div>
                            </a>
                            </Link>
                        )
                    })  
                }
                
                {/* <PaginatedItems itemsPerPage={3}/> */}
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<img alt="prev" src={next.src} onClick={() => {handleScroll(myRef.current)}}/>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    previousLabel={<img alt="prev" src={prev.src} onClick={() => {handleScroll(myRef.current)}}/>}
                    renderOnZeroPageCount={null}
                    breakClassName={styles.ellipsis}
                    activeClassName={styles.activePage}
                    previousClassName={styles.previous}
                    containerClassName={styles.paginationContainerNumbers}
                    pageClassName={styles.Li}
                    activeLinkClassName={styles.activePage}
                    
                />
            </div>
        </div>}
        <Discounts specialOffers={newsData.specialOffers}/>
        </>)
    
}



export default SecNews