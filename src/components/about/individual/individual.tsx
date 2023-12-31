import React from "react";
import styles from './individual.module.scss'
import { MyBtn, MyContainer, Title } from "../..";

interface props {
  image: string
}

export const AboutIndividual = ({ image }: props) => {
  return (
    <div className={styles.wrapper}>
      <MyContainer>
        <div className={styles.inner}>
          <div className={styles.left}>
            <Title
              mb="15px"
              dark={false}
              className={styles.title}
            >О нас</Title>

            <p className={styles.text}>
              Основным направлением деятельности компании является оптовая и розничная продажа широкого ассортимента мебели по ценам производителя. В течение уже нескольких лет мы осуществляем продажу мебели с бесплатной доставкой по Санкт-Петербургу, используя собственную службу доставки. Широчайший выбор товаров, низкие цены, высокое качество обслуживания позволили нам завоевать популярность и доверие у потребителей.
            </p>

            {/* <MyBtn
              color="#fff"
              bgColor="#873101"
            >
              Связаться с менеджером
            </MyBtn> */}
          </div>

          <div className={styles.imageWrapper}>
            <img className={styles.image} src={image} />
          </div>
        </div>
      </MyContainer>
    </div>
  )
}