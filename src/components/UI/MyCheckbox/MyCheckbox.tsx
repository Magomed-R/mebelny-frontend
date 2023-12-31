import react from 'react'
import styles from './MyCheckbox.module.scss'

interface props {
  label: string
}

export const MyCheckbox = ({ label }: props) => {

  return (
    <label className={styles.checkboxContainer}>
      <input className={styles.checkbox} type="checkbox" />
      <span className={styles.checkmark}></span>
      {label}
    </label>
  )
}