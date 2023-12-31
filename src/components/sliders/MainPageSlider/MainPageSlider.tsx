import React from "react";
import Slider from "react-slick";
import { MainPageCard } from './Card/MainPageCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './MainPageSlider.module.scss'
// import { useGetMainPageSildes, MainPageSlide } from "../../../utils/";

interface item {
  image: string,
  btnBackgroundColor: string,
  btnColor: string,
  background: string,
  text: string,
  btnText: string,
  secondaryText: string
}


interface props {
  items: item[]
}


export const MainPageSlider = ({ items }: props) => {
  // const slides: MainPageSlide[] = useGetMainPageSildes();
  const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 10000
  }

  return (
    <Slider className={styles.slider} {...settings}>
      {items.map((slideContent, index) => {
        return (
          <MainPageCard
            key={index}
            slideContent={slideContent}
          />
        )
      })}
    </Slider>
  )
}