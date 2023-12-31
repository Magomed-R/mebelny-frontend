import react from 'react'
import styles from './history.module.scss'
import { Title } from '../../UI/Title/Title'
import { MyContainer } from '../../UI/MyContainer/MyContainer'

export const History = () => {
  return (
    <div className={styles.history}>
      <MyContainer>
        <Title
          mb='14px'
          dark
        >
          Наша история
        </Title>

        <div className={styles.info}>
          <div className={styles.textWrapper}>
            <p className={styles.textTop}>Наработки длинной в 17 лет</p>
            <p className={styles.textBot}>На протяжении долгих лет мы осуществляем продажу мебели с доставкой по Санкт-Петербургу. Высокое качество обслуживания и открытость помогла нам стать легендарными. </p>
          </div>
        </div>

        <ul className={styles.bottom}>
          <li className={styles.botItem}>2006</li>
          <li className={styles.botCenter}>17 лет </li>
          <li className={styles.botItem}>2023</li>
        </ul>
      </MyContainer>
    </div>
  )
}