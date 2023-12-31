import logoDark from '../../../assets/logo-dark.png';
import logoLight from '../../../assets/logo-light.png';
import styles from './logo.module.scss';

interface logoProps {
  dark: boolean
}

export const Logo = ({ dark }: logoProps) => {
  return (
    <>
      {dark ?
        (
          <div className={styles.logo__wrapper}>
            <img className={styles.logo__img} src={logoDark} alt="logo" />
            <p className={styles.logo__text}>Мебельный Санкт-Петербург</p>
          </div>
        )
        :
        (
          <div className={styles.logo__wrapper}>
            <img className={`${styles.logo__img} ${styles.logo__img__light}`} src={logoLight} alt="logo" />
          </div>
        )
      }
    </>
  )
}