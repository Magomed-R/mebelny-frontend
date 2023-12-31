import { Link } from "react-router-dom";
import { MyContainer } from "../../UI";
import styles from './navBar.module.scss'

export const AdminNav = () => {
  return (
    <MyContainer>
      <div className={styles.nav}>
        <Link to='/admin/add' className={styles.link}>
          Добавить товар
        </Link>
        <Link to='/admin/users' className={styles.link}>
          Пользователи
        </Link>
        <Link to='/admin/orders' className={styles.link}>
          Заказы
        </Link>
        <Link to='/admin/sale' className={styles.link}>
          Скидка по производителю
        </Link>
      </div>
    </MyContainer>
  )
}