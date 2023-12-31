import { MyContainer } from "../.."
import styles from './contactsAdress.module.scss'

export const ContactsAdress = () => {
  return (
    <MyContainer>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Адрес
          </h2>

          {/* <p className={styles.adress}>
            Санкт-Петербург
            6-Й Верхний Переулок, 1
          </p> */}

          <a href='tel:+78129458605' className={styles.phone}>
            тел.: +7 (812) 945-86-05
          </a>

          <a href="mailto:mebelny.spb@mail.ru" className={styles.mail}>mebelny.spb@mail.ru</a>

          {/* <p className={styles.info}>
            Мы работаем онлайн, в офисе принимаем по предварительной записи
          </p> */}

          <p className={styles.workTime}>
            ПН – ПТ 10:00-19:00
          </p>

          {/* <p className={styles.metro}>
            Станция метро Парнас
          </p> */}
        </div>
      </div>
    </MyContainer>
  )
}