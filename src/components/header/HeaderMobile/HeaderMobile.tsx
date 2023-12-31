import { useState } from "react";
import styles from './HeaderMobile.module.scss'
import { Logo } from "../../UI";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../../../store";

export const HeaderMobile = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const dispatch = useDispatch()
  const isAuth = useSelector((state: any) => state.user.isAuth);
  const userRole = useSelector((state: any) => state.user.role);

  return (
    <header className={styles.header}>
      <Logo dark />
      <div className={styles.wrapper}>

        <a href="tel:+7(812)-945-86-05" className={styles.phone} />

        <button
          className={!menuVisible ? styles.burgerBtn : styles.burgerClose}
          onClick={() => setMenuVisible(!menuVisible)}
        >
          <span />
        </button>

        {menuVisible ?
          (<ul className={styles.burgerMenu}>
            <li className={styles.burgerItem}>
              <Link to='/'>
                Главная
              </Link>
            </li>
            <li className={styles.burgerItem}>
              <Link to='/catalog'>
                Каталог
              </Link>
            </li>
            <li className={styles.burgerItem}>
              <Link to='/about'>
                О компании
              </Link>
            </li>
            <li className={styles.burgerItem}>
              <Link to='/contacts'>
                Контакты
              </Link>
            </li>
            <li className={styles.burgerItem}>
              <Link to='/cart'>
                Корзина
              </Link>
            </li>
            <li className={styles.burgerItem}>
              <Link to='/user'>
                Профиль
              </Link>
            </li>

            {userRole === 'admin' ?
              <li className={styles.burgerItem}>
                <Link to='/admin'>
                  Админка
                </Link>
              </li>
              :
              ''
            }

            {isAuth ?
              <li className={styles.burgerItem}>
                <a onClick={() => {
                  localStorage.removeItem('accessToken')
                  dispatch({ type: LOGOUT })
                }}>
                  Выйти
                </a>
              </li>
              :
              <li className={styles.burgerItem}>
                <Link to='/login'>
                  Войти
                </Link>
              </li>
            }

          </ul>)
          : <></>
        }

      </div>
    </header>
  )
}