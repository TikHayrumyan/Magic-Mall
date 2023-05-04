/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/specialOffersPage/newOffers/newOffers.module.scss"
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider"
import { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"
import InfiniteScroll from 'react-infinite-scroll-component';
import { translate } from "../../../translations"


const NewOffers = () => {
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
    const { GetSpecialOffersData,
        specialOffersData,
        SetSpecialOffersData,
        HOST_API_IMG, HOST_API, lang } = useGlobalProvider()
    // const [disableLoadMoreButton,SetDisableLoadMoreButton] = useState(true)
    const [disableMobileScroll, SetDisableMobileScroll] = useState(true)

    useEffect(() => {
        GetSpecialOffersData()
    }, [])

    useEffect(() => {

    }, [specialOffersData.loading])

    const loadMore = async () => {
        const defaultPages = 4;
        let offSet = (specialOffersData.initialOffset) + defaultPages;

        try {
            const response = await axios({
                url: HOST_API + "specialOffers",
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                data: JSON.stringify({ offset: offSet })
            })

            if (response.data.so.length && response.status == 200) {
                SetSpecialOffersData({
                    data: [...specialOffersData.data, ...response.data.so],
                    loading: true,
                    initialOffset: offSet
                })
                if (response.data.so.length < 4) {
                    // SetDisableLoadMoreButton(false)
                    SetDisableMobileScroll(false)
                    if (size.width <= 600) {
                        SetDisableMobileScroll(false)
                    }
                } else if (response.data.count == offSet + defaultPages) {
                    // SetDisableLoadMoreButton(false)
                    SetDisableMobileScroll(false)
                }
            } else if (response.data.so.length == 0 && response.status == 200) {
                SetSpecialOffersData({
                    data: [...specialOffersData.data],
                    loading: true,
                    initialOffset: offSet
                })
                // SetDisableLoadMoreButton(false)
                if (size.width <= 600) {
                    SetDisableMobileScroll(false)
                }
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            {specialOffersData.loading && <div className={styles.NewOffers}>
                <div className={styles.container}>
                    <div className={styles.titleBlock}>
                        <div className={styles.title}>{translate.SpecialOffersPageNewOffers[lang]}</div>
                    </div>
                    <div className={styles.newSpecialOffers}>
                        {/* {
                     specialOffersData.data.map(({id,image,logo,title,title_am,title_ru,link,link_am,link_ru}) => {

                        return(<Link key={id} href={lang == "en" ? link : lang == "ru" ? link_ru : link_am}>
                                <a>
                                    <div className={styles.specialOffersBlock}>
                                        <div className={styles.background} style={{backgroundImage:`url(${HOST_API_IMG+image})`}}>
                                            <div className={styles.logoBlock}>
                                                <div ><img className={styles.logo} alt="logo" src={HOST_API_IMG+logo}/></div>
                                                <div className={styles.BrandName}>{lang == "en" ? title : lang == "ru" ? title_ru : title_am}</div>
                                            </div>
                                        </div>
                                    </div>
                                    </a>
                                </Link>

                        )
                    })
                } */}

                        {size.width > 600 &&

                            <InfiniteScroll
                                dataLength={specialOffersData.data.length} //This is important field to render the next data
                                next={loadMore}
                                hasMore={disableMobileScroll ? true : false}
                                loader={<div className={styles.loading}><img alt="load" src="/img/specialOffersPage/newSpecialOffers/load.svg" /></div>}
                                style={{ display: 'flex', flexWrap: 'wrap', gap: '1vw' }}
                            >
                                {
                                    specialOffersData.data.map(({ id, image, logo, title, title_am, title_ru, link, link_am, link_ru }) => {

                                        return (<Link key={id} href={"/"}>
                                            <a>
                                                <div className={styles.specialOffersBlock}>
                                                    <div className={styles.background} style={{ backgroundImage: `url(${HOST_API_IMG + image})` }}>
                                                        <div className={styles.logoBlock}>
                                                            <div >
                                                                <img className={styles.logo} alt="logo" src={HOST_API_IMG + logo} />
                                                            </div>
                                                            <div className={styles.BrandName}>{lang == "en" ? title : lang == "ru" ? title_ru : title_am}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>

                                        )
                                    })
                                }
                            </InfiniteScroll>
                        }

                    </div>
                    {/* <div className={styles.buttonBlock}>
                    {disableLoadMoreButton && <button onClick={loadMore} className={styles.button}>{translate.ShopPageSeeMore[lang]}</button>}
                </div> */}
                    {size.width < 600 && <div className={styles.mobile}>

                        <InfiniteScroll
                            dataLength={specialOffersData.data.length} //This is important field to render the next data
                            next={loadMore}
                            hasMore={disableMobileScroll ? true : false}
                            loader={<div className={styles.loading}><img alt="load" src="/img/specialOffersPage/newSpecialOffers/load.svg" /></div>}

                        >
                            {
                                specialOffersData.data.map(({ id, image, logo, title, link }) => {

                                    return (<Link key={id} href={link}>
                                        <div className={styles.specialOffersBlock}>
                                            <div className={styles.background} style={{ backgroundImage: `url(${HOST_API_IMG + image})` }}>
                                                <div className={styles.logoBlock}>
                                                    <div >
                                                        <img className={styles.logo} alt="logo" src={HOST_API_IMG + logo} />
                                                    </div>
                                                    <div className={styles.BrandName}>{title}</div>
                                                </div>
                                            </div>
                                        </div>
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



export default NewOffers