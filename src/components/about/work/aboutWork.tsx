import { MyContainer } from '../..'
import styles from './aboutWork.module.scss'
import img from '../../../assets/aboutWork.png'

export const AboutWork = () => {

  return (
    <div className={styles.wrapper}>
      <MyContainer>
        <div className={styles.inner}>
          <div className={styles.imageWrapper}>
            <img src={img} alt="" />
          </div>

          <div className={styles.content}>
            <p className={styles.title}>
              Как устроена наша работа
            </p>

            <p className={styles.text}>
              После получения заказа, мы связываемся с производством и уточняем наличие товара на складе.
              Также, если сроки не устраивают покупателя, постараемся подобрать аналогичный товар.
            </p>
          </div>
        </div>
      </MyContainer>
    </div>
  )
}