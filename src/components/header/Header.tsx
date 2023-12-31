import React from "react";
import { Logo } from "../UI";
// import { CatalogLink } from "./catalogLink/catalogLink";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IProduct, LOGOUT } from "../../store";
import styles from './header.module.scss'

interface item {
  furniture: IProduct,
  count: number
}

export const Header = () => {
  const isAuth = useSelector((state: any) => state.user.isAuth);
  const userRole = useSelector((state: any) => state.user.role);
  const cartCount = useSelector((state: any) => state.cart.reduce((acc: number, current: item) => {
    return acc + Number(current.count)
  }, 0))
  const dispatch = useDispatch();

  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className={styles.header__nav}>
            <li className={styles.header__item}>
              <Link to='/' className={styles.header__link}>
                Главная
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link to='/catalog' className={styles.header__link}>
                Каталог
              </Link>
              {/* <CatalogLink /> */}
            </li>
            <li className={styles.header__item}>
              <Link to='/contacts' className={styles.header__link}>
                контакты
              </Link>
            </li>
            <li className={styles.header__item}>
              <Logo dark={true} />
            </li>
            {/* <li className={styles.header__item}>
              {isAuth ?
                <Logo dark={true} />
                :
                <Link to='/about' className={styles.header__link}>
                  о компании
                </Link>
              }
            </li> */}
            <li className={styles.header__item}>
              <Link to='/about' className={styles.header__link}>
                о компании
              </Link>
            </li>

            <li className={styles.header__item}>
              <Link to='/cart'
                className={styles.header__link}
              >
                {cartCount ?
                  <div className={styles.cart_count}>
                    {cartCount > 9 ? '9+' : cartCount}
                  </div>
                  : ''
                }
                Корзина
              </Link>
            </li>

            {isAuth ?
              <li className={styles.header__item}>
                {/* <a
                  onClick={() => {
                    localStorage.removeItem('accessToken')
                    dispatch({ type: LOGOUT })
                  }}
                  className={styles.header__link}
                >
                  Выйти
                </a> */}
                <Link to='/user'
                  className={styles.header__link}
                >
                  Профиль
                </Link>
              </li>
              :
              <li className={styles.header__item}>
                <Link to='/login'
                  className={styles.header__link}
                >
                  Войти
                </Link>
              </li>
            }

            {userRole === "admin" ?
              <li className={styles.header__item}>
                <Link to='/admin'
                  className={styles.header__link}
                >
                  Админка
                </Link>
              </li> : ""}
          </ul>
        </nav>
      </header>
    </>
  )
}