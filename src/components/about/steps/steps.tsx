import react from 'react';
import styles from './steps.module.scss';
import { MyContainer } from '../..';

interface props {
  image: string;
}

export const AboutSteps = ({ image }: props) => {

  return (
    <div className={styles.wrapper}>
      <MyContainer>
        <div className={styles.inner}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={image} />
          </div>

          <div className={styles.right}>
            <h3 className={styles.title}>
              Этапы работы:
            </h3>

            <ol className={styles.list}>
              <li className={styles.item}>
                Уточнение у клиента деталей заказа
              </li>
              <li className={styles.item}>
                Внесение предоплаты по необходимости
              </li>
              <li className={styles.item}>
                Изготовление или отгрузка со склада
              </li>
              <li className={styles.item}>
                Доставка
              </li>
            </ol>

            <p className={styles.text}>
              Информирование покупателя на каждом из этапов.
            </p>
          </div>
        </div>
      </MyContainer>
    </div>
  )
}