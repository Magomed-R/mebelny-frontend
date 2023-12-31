import { useState } from "react";
import styles from './catalogLink.module.scss';
import { Link } from 'react-router-dom';

export const CatalogLink = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <div className={styles.wrapper}>
      <Link
        to='/catalog'
        className={styles.link}
        onMouseEnter={() => setMenuVisible(true)}
        onMouseLeave={() => setMenuVisible(false)}
      >
        каталог
      </Link>

      {/* <ul
        onMouseEnter={() => setMenuVisible(true)}
        onMouseLeave={() => setMenuVisible(false)}
        className={menuVisible ? styles.list : styles.listInvisible}>
        <li className={styles.item}>
          <a href="" className={styles.listLink}>
            Диваны
          </a>
        </li>
        <li className={styles.item}>
          <a href="" className={styles.listLink}>
            Кресла
          </a>
        </li>
        <li className={styles.item}>
          <a href="" className={styles.listLink}>
            Стулья
          </a>
        </li>
        <li className={styles.item}>
          <a href="" className={styles.listLink}>
            Кровати
          </a>
        </li>
        <li className={styles.item}>
          <a href="" className={styles.listLink}>
            Матрасы
          </a>
        </li>
        <li className={styles.item}>
          <a href="" className={styles.listLink}>
            Пуфы
          </a>
        </li>
        <li className={styles.item}>
          <a href="" className={styles.listLink}>
            Эксклюзивная мебель
          </a>
        </li>
        <li className={styles.item}>
          <a href="" className={styles.listLink}>
            Кухни
          </a>
        </li>
      </ul> */}
    </div>
  )
}