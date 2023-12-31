import styles from './input.module.scss';

export const Input = (props: any) => {
  return (
    <input className={styles.input} {...props} />
  )
}