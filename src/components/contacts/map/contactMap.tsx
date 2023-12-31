import styles from './ContactMap.module.scss'

export const ContactMap = () => {
  return (
    <div className={styles.wrapper}>
      <iframe className={styles.frame} src="https://yandex.ru/map-widget/v1/?um=constructor%3A98689797c1805011dc43ecc7d25f178aa6bba45d400f60639ccbc15d037ce0d2&amp;source=constructor"></iframe>
    </div>
  )
}