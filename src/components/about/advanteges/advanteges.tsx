import styles from './advanteges.module.scss';
import { MyContainer } from '../..';

interface props {
  image: string
}

export const AboutAdvanteges = ({ image }: props) => {

  return (
    <div className={styles.wrapper}>
      <MyContainer>
        <div className={styles.inner}>
          <div className={styles.left}>
            <p className={styles.topText}>
              Почему стоит заказывать мебель у нас?
            </p>

            <p className={styles.botText}>
              Следует отметить, что цены в магазинах примерно на 30% выше цен нашего интернет-магазина, так как наша фирма работает непосредственно с фирмами-производителями и наши цены значительно ниже.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <img className={styles.image} src={image} />
          </div>
        </div>
      </MyContainer>
    </div>
  )
}