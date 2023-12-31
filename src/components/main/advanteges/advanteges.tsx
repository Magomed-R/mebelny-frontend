import React from "react";
import styles from './advantages.module.scss'
import { MyContainer } from "../../UI/MyContainer/MyContainer";


export const Advantages = () => {
  return (
    <MyContainer>
      <ul className={styles.advantages}>
        <li className={styles.item}>
          <span className={styles.num}>1</span>
          Мы предлагаем Вам широкий ассортимент мебельной продукции по выгодным ценам самых различных производителей. Продажа производится как оптом, так и в розницу.

        </li>
        <li className={styles.item}>
          <span className={styles.num}>2</span>
          Мы осуществляем бесплатную доставку
          по Санкт-Петербургу
          ( от 25000 рублей ),
          а также доставку со скидкой по Ленинградской области,
          в зависимости от расстояния в км. Также производится и доставка
          по всей России
          после предварительного согласования.
        </li>
        <li className={styles.item}>
          <span className={styles.num}>3</span>
          Мы интернет-магазин, поэтому у нас выгодно. Следует отметить, что цены в магазинах примерно
          на 30%выше цен нашего интернет-магазина
          “Мебельный Санкт-Петербург”. Работаем напрямую с фирмами-производителями
          и не используем крупный склад.
        </li>
      </ul>
    </MyContainer>
  )
}