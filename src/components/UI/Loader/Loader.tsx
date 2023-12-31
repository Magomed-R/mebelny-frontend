import React from "react";
import styles from './loader.module.scss'

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>Загрузка</h2>

      <div className={styles.bar}>
        <div className={styles.barChild}>

        </div>
      </div>
    </div>
  )
}