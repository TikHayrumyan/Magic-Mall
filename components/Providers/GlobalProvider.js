import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import Router, { withRouter } from 'next/router'
import { useRouter } from "next/router";

const GlobalContext = createContext({});

// react html parser     .........CK EDITOR

const GlobalProvider = ({ children }) => {
    const [shopCategoryData, setShopCategoryData] = useState({ data: [], loading: false });
    const [activeCategoryName, SetActiveCategoryName] = useState("")
    const [searchResult, setSearchResult] = useState({ data: [], loading: false, initialData: false });
    const [searchInputValue, SetSearchInputValue] = useState(null)
    const [mainSliderData, SetMainSliderData] = useState({ data: [], loading: false })
    const [brandsSliderData, SetBrandsSliderData] = useState({ data: [], loading: false })
    const [bestBrandsSlider, SetBestBrandsSlider] = useState({ data: [], loading: false })
    const [interestedData, SetInterestedData] = useState({ data: [], loading: false })
    const [foodCategoryData, SetFoodCategoryData] = useState({ data: [], loading: false })
    const [activeCategoryNameFood, SetActiveCategoryNameFood] = useState("")
    const [searchInputValueFood, SetSearchInputValueFood] = useState(null)
    const [searchFoodResult, SetSearchFoodResult] = useState({ data: [], loading: false, initialData: false })
    const [servicesData, SetServicesData] = useState({ data: [], loading: false })
    const [searchInputValueService, SetSearchInputValueService] = useState(null)
    const [entertainmentData, SetEntertainmentData] = useState({ data: [], loading: false })
    const [searchInputValueEntertainment, SetSearchInputValueEntertainment] = useState(null)
    const [blogSliderData, SetBlogSliderData] = useState({ data: [], loading: false })
    const [blogPageData, SetBlogPageData] = useState({ data: [], loading: false, initialOffset: 1 })
    const [FAQdata, SetFAQdata] = useState({ data: [], loading: false })
    const [AboutUsData, SetAboutUsData] = useState({ data: {}, loading: false })
    const [specialOffersData, SetSpecialOffersData] = useState({ data: [], loading: false, initialOffset: 0 })
    const [specialOffersSliderData, SetSpecialOffersSliderData] = useState({ data: [], loading: false })
    const [financialReportsData, SetFinancialReportsData] = useState({ data: [], loading: false })
    const [careerData, SetCareerData] = useState({ data: [], loading: false })
    const [giftCardData, SetGiftCardData] = useState({ data: {}, loading: false })
    const [giftCardHomePageData, SetGiftCardHomePageData] = useState({ data: [], loading: false })
    const [firstMallData, SetFirstMallData] = useState({ data: {}, loading: false })
    const [globalSearchResult, SetGlobalSearchResult] = useState({ data: {}, loading: false, searchWord: "" })
    const HOST_API = "https://apimall.weflex.am/api/";
    const HOST_API_IMG = "https://apimall.weflex.am";
    // this state serves for loading until data is received in Shops,Services,Entertainment and Food pages
    const [waitData, SetWaitData] = useState(false)

    const GetCategory = async () => {
        try {
            const response = await axios({
                url: HOST_API + "categories",
                method: "GET",

            });
            if (response.data.length && response.status == 200) {
                setShopCategoryData({
                    data: response.data,
                    loading: true
                })
            }
        } catch (err) {
            console.log(err);
        }

    };

    const GetMainSlider = async () => {
        try {
            const response = await axios({
                url: HOST_API + "slider",
                method: "GET",
            });
            if (response.data.length && response.status == 200) {
                SetMainSliderData({
                    data: response.data,
                    loading: true
                })
            }

        } catch (err) {
            console.log(err);
        }
    };
    const GetBrandsSlider = async () => {
        try {
            const response = await axios({
                url: HOST_API + "slider/logo",
                method: "GET"
            });
            if (response.data.length && response.status == 200) {
                SetBrandsSliderData({
                    data: response.data,
                    loading: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    // home page brands slider
    const GetBestBrandsSlider = async () => {
        try {
            const response = await axios({
                url: HOST_API + "bestBrands",
                method: "GET"
            });
            if (response.data.length && response.status == 200) {
                SetBestBrandsSlider({
                    data: response.data,
                    loading: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    // interested page
    const GetInterested = async () => {
        try {
            const response = await axios({
                url: HOST_API + "interested",
                method: "GET"
            });
            if (response.data.length && response.status == 200) {
                SetInterestedData({
                    data: response.data,
                    loading: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    // food filter
    const GetFoodCategory = async () => {
        try {
            const response = await axios({
                url: HOST_API + "categories/food ",
                method: "GET"
            });

            if (response.data.length && response.status == 200) {
                SetFoodCategoryData({
                    data: response.data,
                    loading: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    // header menu for food
    const GetHeaderMenuFoodFilter = async (id) => {
        try {
            const searchResponse = await axios({
                url: HOST_API + "food",
                method: "POST",
                headers: {
                    'content-type': 'application/json',

                },
                data: JSON.stringify({ category: id })
            });
            if (searchResponse.data.length && searchResponse.status == 200) {
                SetSearchFoodResult({
                    data: searchResponse.data,
                    loading: true,
                    initialData: true
                })
                Router.push({ pathname: '/foodPage' });

            } else if (searchResponse.data.length == 0 && searchResponse.status == 200) {
                SetSearchFoodResult({
                    data: [],
                    loading: true,
                    initialData: false
                })
                Router.push({ pathname: '/foodPage' });

            }
        } catch (error) {
            console.log(error);
        }
    }
    // header menu for shops


    const GetHeaderMenuShopFilter = async (id) => {
        try {
            const searchResponse = await axios({
                url: HOST_API + "shops",
                method: "POST",
                headers: {
                    'content-type': 'application/json',

                },
                data: JSON.stringify({ category: id })
            });
            if (searchResponse.data.length && searchResponse.status == 200) {
                setSearchResult({
                    data: searchResponse.data,
                    loading: true,
                    initialData: true
                }),

                    Router.push({ pathname: '/shopPage' });
            } else if (searchResponse.data.length == 0 && searchResponse.status == 200) {
                setSearchResult({
                    data: [],
                    loading: true,
                    initialData: false
                })
                Router.push({ pathname: '/shopPage' });
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Map page
    // const [floorModal,SetFloorModal] = useState(false)

    // const [changeFloor,SetChangeFloor] = useState(1)

    // const setFloor = (num) => {
    //     SetChangeFloor(num == changeFloor ? num : num)
    //     SetFloorModal(false)
    // }

    // Blog  home page

    const GetBlogSliderData = async () => {
        try {
            const response = await axios({
                url: HOST_API + "home/blog",
                method: "GET",
            })
            if (response.data.length && response.status == 200) {
                SetBlogSliderData({
                    data: response.data,
                    loading: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Blog Page Data

    const GetBlogPageData = async () => {
        try {
            const response = await axios({
                url: HOST_API + "blog",
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                // data:JSON.stringify({initialOffset : 0})
            })
            console.log(response, "response");
            if (response.data.blog.length && response.status == 200) {
                SetBlogPageData({
                    data: response.data.blog,
                    loading: true,
                    initialOffset: 1
                })
            } else if (response.data.blog.length == 0 && response.status == 200) {
                SetBlogPageData({
                    data: [],
                    loading: true,
                    initialOffset: 1

                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    // FAQ page

    const GetFaqPageData = async () => {
        try {
            const response = await axios({
                url: HOST_API + "faq",
                method: "GET"
            })
            console.log(response, "responseFaq");
            if (response.data.length && response.status == 200) {
                SetFAQdata({
                    data: response.data,
                    loading: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    // about Us

    const GetAboutUsPageData = async () => {
        try {
            const response = await axios({
                url: HOST_API + "aboutUs",
                method: "GET"
            })
            console.log(response, "response AboutUss");

            if (response.data && response.status == 200) {
                SetAboutUsData({
                    data: response.data,
                    loading: true
                })
            }

        } catch (error) {
            console.log(error);
        }
    }

    // special offers

    const GetSpecialOffersData = async () => {
        try {
            const response = await axios({
                url: HOST_API + "specialOffers",
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                //   data:JSON.stringify({initialOffset : 0})
            })
            console.log(response, "SpecialOffersData");
            if (response.data.so.length && response.status == 200) {
                SetSpecialOffersData({
                    data: response.data.so,
                    loading: true,
                    initialOffset: 0
                })
            } else if (response.data.so.length == 0 && response.status == 200) {
                SetSpecialOffersData({
                    data: [],
                    loading: true,
                    initialOffset: 0

                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    // special offers homePage slider

    const GetSpecialOffersSliderData = async () => {
        try {
            const response = await axios({
                url: HOST_API + "home/specialOffers",
                method: "GET"
            })
            console.log(response, "specialOFferSLider");
            if (response.data.length && response.status == 200) {
                SetSpecialOffersSliderData({
                    data: response.data,
                    loading: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    // First Outlet Mall Data

    const GetFirstOutletMallData = async () => {
        try {
            const response = await axios({
                url: HOST_API + "home/firstMall",
                method: "GET"
            })
            console.log(response, "firstOutletMall");
            if (response.data && response.status == 200) {
                SetFirstMallData({
                    data: response.data,
                    loading: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    // financial Report Page

    const GetFinancialReportData = async () => {
        try {
            const response = await axios({
                url: HOST_API + "finance",
                method: "GET"
            })
            console.log(response, "finance");
            if (response.data.length && response.status == 200) {
                SetFinancialReportsData({
                    data: response.data,
                    loading: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Career Page Data

    const GetCareerPageData = async () => {
        try {
            const response = await axios({
                url: HOST_API + "career",
                method: "GET"
            })
            if (response.data.length && response.status == 200) {
                SetCareerData({
                    data: response.data,
                    loading: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    // gift card section

    const GetGiftCardData = async () => {
        try {
            const response = await axios({
                url: HOST_API + "giftCard",
                method: "GET"
            })
            console.log(response, "giftCard");
            if (response.data && response.status == 200) {
                SetGiftCardData({
                    data: response.data,
                    loading: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }


    // translations

    const router = useRouter()
    const { locale } = router
    const lang = locale === "en" ? "en" : locale === "ru" ? "ru" : "am"


    // homePage GiftCard Data

    const GetHomePageGiftCardData = async () => {
        try {
            const response = await axios({
                url: HOST_API + "home/giftCard",
                method: "GET"
            })
            console.log(response, "giftCardHomePage");
            if (response.data && response.status == 200) {
                SetGiftCardHomePageData({
                    data: response.data,
                    loading: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    // global search

    const GlobalSearchData = async (word) => {

        try {
            const response = await axios({
                url: HOST_API + "home/search",
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                data: JSON.stringify({ search: word })
            })
            console.log(response, "GlobalSearchData");
            if (response.data && response.status == 200) {
                let filterResult = Object.values(response.data).filter((element) => element.length)

                if (filterResult.length == 0) {
                    SetGlobalSearchResult({
                        data: {},
                        loading: true,
                        searchWord: word
                    })
                    Router.push({ pathname: '/Search' });
                } else {
                    SetGlobalSearchResult({
                        data: response.data,
                        loading: true,
                        searchWord: word
                    })
                    Router.push({ pathname: '/Search' });
                }
            }


        } catch (error) {
            console.log(error);
        }
    }
    return <GlobalContext.Provider value={{
        HOST_API,
        HOST_API_IMG,
        GetCategory,
        shopCategoryData,
        searchInputValue,
        SetSearchInputValue,
        searchResult,
        setSearchResult,
        GetMainSlider,
        mainSliderData,
        GetBrandsSlider,
        brandsSliderData,
        GetBestBrandsSlider,
        bestBrandsSlider,
        GetInterested,
        interestedData,
        GetFoodCategory,
        foodCategoryData,
        searchInputValueFood,
        SetSearchInputValueFood,
        searchFoodResult,
        SetSearchFoodResult,
        servicesData,
        SetServicesData,
        searchInputValueService,
        SetSearchInputValueService,
        entertainmentData,
        SetEntertainmentData,
        searchInputValueEntertainment,
        SetSearchInputValueEntertainment,
        GetHeaderMenuFoodFilter,
        activeCategoryNameFood,
        SetActiveCategoryNameFood,
        GetHeaderMenuShopFilter,
        activeCategoryName,
        SetActiveCategoryName,
        GetBlogSliderData,
        blogSliderData,
        GetBlogPageData,
        blogPageData,
        SetBlogPageData,
        GetFaqPageData,
        FAQdata,
        SetFAQdata,
        GetAboutUsPageData,
        AboutUsData,
        GetSpecialOffersData,
        specialOffersData,
        SetSpecialOffersData,
        GetSpecialOffersSliderData,
        specialOffersSliderData,
        GetFinancialReportData,
        financialReportsData,
        searchInputValue,
        SetSearchInputValue,
        GetCareerPageData,
        careerData,
        GetGiftCardData,
        giftCardData,
        lang,
        giftCardHomePageData,
        GetHomePageGiftCardData,
        GetFirstOutletMallData,
        firstMallData,
        GlobalSearchData,
        globalSearchResult,
        waitData, SetWaitData
    }}>
        {children}
    </GlobalContext.Provider>
}


const useGlobalProvider = () => {
    return useContext(GlobalContext);
}

export { GlobalProvider, useGlobalProvider }

