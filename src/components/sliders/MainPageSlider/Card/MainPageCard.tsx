import { Link } from 'react-router-dom';
import { MyContainer } from '../../../UI';
import { MainPageSlide } from '../../../../utils';
import styles from './MainPageCard.module.scss';

interface props {
  slideContent: MainPageSlide
}

export const MainPageCard = ({ slideContent }: props) => {

  const { btnBackgroundColor, btnColor, background, image, text, btnText, secondaryText } = slideContent;

  const customBtnStyle: {} = {
    '--backColor': btnBackgroundColor,
    '--color': btnColor
  }

  return (
    <div className={styles.card}>
      <MyContainer>
        <div className={styles.cardWrapper}>
          <div className={styles.background} style={{ backgroundColor: background }} />
          <p className={styles.secondary}>{secondaryText}</p>

          <p className={styles.textMobile}>{text}</p>

          <div className={styles.cardContent}>
            <div className={styles.textWrapper}>
              <p className={styles.text}>{text}</p>

              <p className={styles.secondaryMobile}>{secondaryText}</p>

              <Link to='/catalog'>
                <button
                  className={styles.btn}
                  style={customBtnStyle}
                >
                  {btnText}
                </button>
              </Link>
            </div>

            <div
              className={styles.img}
              style={{ backgroundImage: `url(${image})` }}>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  )
}