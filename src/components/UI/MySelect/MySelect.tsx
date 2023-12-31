import react from 'react'
import styles from './MySelect.module.scss';

export const MySelect = () => {

  return (
    <select className={styles.select}>
      <option className={styles.option}>Все модели</option>
      <option className={styles.option}>Все модели</option>
      <option className={styles.option}>Все модели</option>
      <option className={styles.option}>Все модели</option>
      <option className={styles.option}>Все модели</option>
    </select>
  )
}