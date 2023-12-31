import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BasicCard } from "./BasicCard/BasicCard";
import styles from './BasicSlider.module.scss'
import { MyContainer } from "../../UI/MyContainer/MyContainer";
import { IProduct } from "../../../store";

interface slide {
  _id: string,
  image: string,
  title: string,
  price: number
}

interface sliderProps {
  showPrice: boolean,
  slidesToShow: number,
  items: IProduct[],
  mb: string
}

const checkSlidesToShow = (prop: number) => {
  if (window.screen.width <= 600) {
    return 1
  }
  if (window.screen.width <= 768) {
    return 2
  }

  return prop
}

export const BasicSlider = ({ showPrice, slidesToShow, items, mb }: sliderProps) => {
  const settings = {
    dots: false,
    slidesToShow: checkSlidesToShow(slidesToShow),
    arrows: true
  }

  const style = {
    '--mb': mb
  }

  return (
    <MyContainer>
      <Slider className={styles.BasicSlider} {...settings} style={style}>
        {items.map(item => {
          return (
            <BasicCard
              key={item._id}
              product={item}
              showPrice={showPrice}
            />
          )
        })}
      </Slider>
    </MyContainer>
  )
}