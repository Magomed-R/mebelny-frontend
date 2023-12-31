import react from 'react'
import styles from './footer.module.scss'
import { MyContainer } from '../UI/MyContainer/MyContainer'
import { Logo } from '../UI'
import inst from '../../assets/insta.png'
import facebook from '../../assets/facebook.png'
import { MyBtn } from '../UI/MyBtn/MyBtn'
import { Link } from 'react-router-dom'

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <MyContainer>
        <div className={styles.inner}>
          <div className={styles.wrapper}>
            <div className={styles.logoWrapper}>
              <Logo dark={false} />
            </div>

            <div className={styles.listWrapper}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Link to="/catalog" className={styles.link}>
                    Каталог
                  </Link>
                </li>
                <li className={styles.listItem}>
                  <Link to="/about" className={styles.link}>
                    О компании
                  </Link>
                </li>
                <li className={styles.listItem}>
                  <Link to="/about" className={styles.link}>
                    Индивидуальная мебель
                  </Link>
                </li>
              </ul>

              <ul className={styles.list}>
                {/* <li className={styles.listItem}>
                  <a className={styles.link}>
                    Корзина
                  </a>
                </li> */}
                {/* <li className={styles.listItem}>
                  <a className={styles.link}>
                    Как купить
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a className={styles.link}>
                    Акции
                  </a>
                </li> */}
                <li className={styles.listItem}>
                  <Link to="/contacts" className={styles.link}>
                    Контакты
                  </Link>
                </li>
                <li className={styles.listItem}>
                  <Link to="/contacts" className={styles.link}>
                    Нужна помощь
                  </Link>
                </li>
                <li className={styles.listItem}>
                  <Link to="/contacts" className={styles.link}>
                    Доставка
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.media}>
              <div className={styles.mediaWrapper}>
                {/* <div className={styles.icons}>
                  <a href="" className={styles.mediaLink}>
                    <img src={inst} alt="insta" />
                  </a>
                  <a href="" className={styles.mediaLink}>
                    <img src={facebook} alt="facebook" />
                  </a>
                </div> */}

                <a href="tel:+7(812)-945-86-05" className={styles.phone}>
                  +7 (812)-945-86-05
                </a>
              </div>

              <Link to='/contacts'
                className={styles.phone}>
                <MyBtn
                  color='#4B4844'
                  bgColor='rgba(204, 178, 163, 1)'
                  margin='0 0 20px 0'
                  fz='13px'
                >
                  Персональная консультация
                </MyBtn>
              </Link>
              <p className={styles.public}>
                Сайт не является публичной офертой
              </p>
            </div>
          </div>

          <p className={styles.copy}>
            © 2006–2023 Интернет-магазин
            «Мебельный-Санкт-Петербург» — мебель
          </p>
        </div>
      </MyContainer>
    </footer >
  )
}