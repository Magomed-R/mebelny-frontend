import React from 'react'
import styles from './delivery.module.scss'
import img from '../../../assets/delivery.png'
import { MyContainer } from '../../UI/MyContainer/MyContainer'

export const Delivery = () => {

  return (
    <div className={styles.delivery}>
      <MyContainer>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <p className={styles.textTop}>
              Доставляем по Санкт-Петербургу и Лен. обл.
            </p>

            <p className={styles.textBot}>
              Мы осуществляем бесплатную доставку по Санкт-Петербургу (при заказе от 25 000 руб.) Подъём мебели в квартиру не входит в стоимость доставки и предварительно согласовывается по каждому заказу. Вы сами можете выбрать более удобное для Вас время доставки мебели. При заказе до 25 000 руб., стоимость доставки от 800 до 1300 руб.в черте КАД (условия доставки могут меняться в зависимости от производителя мебели и района). Стоимость сборки составляет 5–10% от стоимости мебели.
            </p>
          </div>

          <div className={styles.image}>
            <img className={styles.img} src={img} alt="картинка" />
          </div>
        </div>
      </MyContainer>
    </div>
  )
}