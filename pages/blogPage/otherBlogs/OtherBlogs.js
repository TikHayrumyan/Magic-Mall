/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/blogPage/otherBlogs/otherBlogs.module.scss"
import calendarIcon from "../../../public/img/blogPage/otherBlog/calendarIcon.svg"
import arrow from "../../../public/img/blogPage/otherBlog/arrow.svg"
import Image from "next/image"
import Link from "next/link"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import axios from "axios"
import { useState,useEffect } from "react"
import InfiniteScroll from 'react-infinite-scroll-component';
import load from "../../../public/img/specialOffersPage/newSpecialOffers/load.svg"
import { translate } from "../../../translations"

const OtherBlogs = () => {
    const size = useWindowSize();
    function useWindowSize() {
        
        const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
        });
      
        useEffect(() => {
          if (typeof window !== 'undefined') {
            function handleResize() {
              setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
              });
            }
          
            window.addEventListener("resize", handleResize);
           
            handleResize();
          
            return () => window.removeEventListener("resize", handleResize);
          }
        }, []); 
        return windowSize;
      }


    const {blogPageData,HOST_API_IMG,HOST_API,SetBlogPageData,lang} = useGlobalProvider()
    // const [disableLoadMoreButton,SetDisableLoadMoreButton] = useState(true)
    const [disableMobileScroll,SetDisableMobileScroll] = useState(true)

    const LoadMore = async() => {
        const defaultPages = 6;
        let offSet = blogPageData.initialOffset + defaultPages;
        console.log(offSet,"offset");
        try {
            const response = await axios({
                url: HOST_API + "blog",
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                  },
                data:JSON.stringify({offset : offSet})
            })
            console.log(response,"responseOffSet");
            if(response.data.blog.length && response.status == 200){
                console.log(response.data.blog,"hn");
                SetBlogPageData({
                    data: [...blogPageData.data,...response.data.blog],
                    loading: true,
                    initialOffset: offSet
                })
                if(response.data.blog.length < 6){
                    // SetDisableLoadMoreButton(false)
                    SetDisableMobileScroll(false)
                    if(size.width <= 600){
                        SetDisableMobileScroll(false) 
                    }
                }
            }else if(response.data.blog.length == 0 && response.status == 200){
                SetBlogPageData({
                    data: [...blogPageData.data],
                    loading: true,
                    initialOffset: offSet
                })
                // SetDisableLoadMoreButton(false)
                SetDisableMobileScroll(false)
                if(size.width <= 600){
                    SetDisableMobileScroll(false)
                }
            }     
        } catch (error) {
            console.log(error);
        }
    }
    // text ellipsis for few lines 
    function shorten(text, maxLength) {
        var ret = text;
        if (ret?.length > maxLength) {
            ret = ret.substr(0,maxLength) + "...";
        }
        return ret;
    }
    
    return(
        <>
        {blogPageData.loading && <div className={styles.OtherBlogs}>
            <div className={styles.container}>
                <div className={styles.otherBlogContainer}>
                <InfiniteScroll
                        dataLength={blogPageData.data.length} //This is important field to render the next data
                        next={LoadMore}
                        hasMore={disableMobileScroll  ? true : false}
                        loader={<div className={styles.loading}><img alt="load" src={load.src}/></div>}
                        style={{display: 'flex', flexWrap: 'wrap',gap:'3vw'}}
                        >
                {
                    blogPageData.data.map(({id,title,title_am,title_ru,thumbnail,date},index) => {

                        return(index != 0 && <Link  key={id} href={`/singleBlogPage/${id}`}><a>
                            <div className={styles.blogs}>
                                <div><img className={styles.img} alt="blogImg" src={HOST_API_IMG+thumbnail}/></div>
                                <div className={styles.description}>{lang == "en" ? shorten(title,79) : lang == "ru" ?shorten(title_ru,79) : shorten(title_am,79)}</div>
                                <div className={styles.dateBlock}>
                                    <div><img alt="calendarIcon" src={calendarIcon}/></div>
                                    <div className={styles.date}>{date}</div>
                                </div>
                                <div className={styles.btnBlock}>
                                        <button className={styles.button}>{translate.buttonRead[lang]}</button>
                                        <div className={styles.arrow}><img alt="arrow" src={arrow}/></div>
                                </div>
                            </div>  
                            </a>
                            </Link>
                        )
                    })
                }
                </InfiniteScroll>
                </div>
                {/* <div className={styles.buttonBlock}>
                    {disableLoadMoreButton && <button className={styles.button} onClick={LoadMore}>{translate.ShopPageSeeMore[lang]}</button>}
                </div> */}
                {size.width < 600 && <div className={styles.mobile}>
                    
                    <InfiniteScroll
                        dataLength={blogPageData.data.length} //This is important field to render the next data
                        next={LoadMore}
                        hasMore={disableMobileScroll  ? true : false}
                        loader={<div className={styles.loading}><img alt="load" src={load.src}/></div>}
                        // endMessage={
                        //     <div style={{ textAlign: 'center' }}>
                        //     <div>Yay! You have seen it all</div>
                        //     </div>
                        // }
                        >
                        {
                            blogPageData.data.map(({id,title,title_am,title_ru,thumbnail,date},index) => {

                                return(index != 0 && <Link key={id}  href={`/singleBlogPage/${id}`}><a>
                                    <div className={styles.blogsMobile}>
                                        <div><img className={styles.img} alt="blogImg" src={HOST_API_IMG+thumbnail}/></div>
                                        <div className={styles.description}>{lang == "en" ? shorten(title,65) : lang == "ru" ?shorten(title_ru,65) : shorten(title_am,60)}</div>
                                        <div className={styles.dateBlock}>
                                            <div><img alt="calendarIcon" src={calendarIcon}/></div>
                                            <div className={styles.date}>{date}</div>
                                        </div>
                                        <div className={styles.btnBlock}>
                                                <button className={styles.button}>{translate.buttonRead[lang]}</button>
                                                <div className={styles.arrow}><img alt="arrow" src={arrow}/></div>
                                        </div>
                                    </div>  
                                    </a>
                                    </Link>
                                )
                    })
                }
                    </InfiniteScroll>
                </div>}
            </div>
            
        </div>}
        </>
    )
}


export default OtherBlogs