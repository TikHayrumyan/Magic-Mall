import React, { useEffect } from "react";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import dynamic from "next/dynamic";
// const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});
import styles from "../../../styles/sass/pages/HomePage/sectionBrandsSlide/BrandsSlide.module.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider";
import Link from "next/link";
const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1270,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
            infinite: true,
            speed: 1000,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
            infinite: true,
            speed: 1000,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            speed: 1000,
            centerMode: true,
            centerPadding: "99px"
          }
        },
        {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              infinite: true,
              speed: 1000,
              centerMode: true,
              centerPadding: "79px"
            }
          }
      ]

  };

const BrandsSlide = () => {

    const {brandsSliderData,GetBrandsSlider,HOST_API_IMG} = useGlobalProvider()

    useEffect(() => {
        GetBrandsSlider()
    },[])
    useEffect(() => {

    },[brandsSliderData.loading])

    

    return(
        <div className={styles.brandsSlide}>
           
            <div className={styles.sliderContainer}>
            <Slider {...settings}>
                {
                    brandsSliderData.loading && brandsSliderData.data?.map(({id,image,link}) => {
                        
                        return(
                            <Link href={link} key={id}>
                                <div  className="itemOne">
                                    <img className={styles.brandImg} alt="brandImg" src={HOST_API_IMG+image}/>
                                </div>
                            </Link>

                        )
                    })
                }
            
        </Slider>
            </div>
        </div>
    )
}


export default BrandsSlide