import { MyContainer } from '../..'
import img1 from '../../../assets/aboutInfo1.png'
import img2 from '../../../assets/aboutInfo2.png'
import img3 from '../../../assets/aboutInfo3.png'
import styles from './aboutInfo.module.scss'

export const AboutInfo = () => {

  return (
    <div className={styles.wrapper}>
      <MyContainer>
        <div className={styles.titleInside}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Обустройство
            </h2>

            <p className={styles.text}>
              В нашем магазине представлены сотни наименований товара. По вашему запросу поможем подобрать именно то, что Вам нужно.</p>
          </div>

          <div className={styles.imageWrapper}>
            <img src={img1} />
          </div>
        </div>

        <h2 className={styles.title}>
          Подготовка жилья для сдачи
        </h2>

        <div className={styles.titleOutside}>
          <div className={styles.imageWrapper}>
            <img src={img2} />
          </div>

          <p className={styles.text}>
            На сайте представлена мебель под разный бюджет. Есть много вариантов недорогой, но качественной мебели, например, для сдачи жилья в аренду.
          </p>
        </div>

        <div className={styles.titleInside}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Помощь с ремонтом
            </h2>

            <p className={styles.text}>
              В кратчайшие сроки поможем обновить мебель в доме по доступным ценам. Создадим уют и подберем декор с выгодой.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <img src={img3} />
          </div>
        </div>

      </MyContainer>
    </div>
  )
}