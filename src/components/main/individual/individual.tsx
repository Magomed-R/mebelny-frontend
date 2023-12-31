import react from 'react'
import styles from './individual.module.scss'
import { Title } from '../../UI/Title/Title'
import { MyBtn } from '../../UI/MyBtn/MyBtn'
import image from '../../../assets/individual.png'
import { MyContainer } from '../../UI/MyContainer/MyContainer'
import { Link } from 'react-router-dom'

export const Individual = () => {

  return (
    <div className={styles.individual}>
      <MyContainer>
        <div className={styles.wrapper}>

          <div className={styles.img}>
            <img src={image} />
          </div>

          <div className={styles.info}>
            <Title
              mb='30px'
              dark={false}
              className={styles.title}
            >Как купить?</Title>

            <p className={styles.textBot}>
              Для того чтобы заказать мебель, Вам необходимо зарегистрироваться на сайте. Затем выбрать в каталоге интересующие Вас товары и добавить их в корзину. В корзине вы сможете выбрать необходимое количество товара или убрать ненужное. После этого нажмите «Оформить заказ». Оператор, после того, как обработает заказ, с Вами свяжется для обсуждения удобной Вам даты и адреса доставки.

            </p>

            <Link to='/catalog'>
              <MyBtn
                bgColor='#873101'
                color='#FFFFFF'
                className={styles.btn}
              >Перейти в каталог</MyBtn>
            </Link>
          </div>
        </div>

        <Link to='/catalog'>
          <MyBtn
            bgColor='#873101'
            color='#FFFFFF'
            className={styles.btnMobile}
          >Перейти в каталог</MyBtn>
        </Link>
      </MyContainer>
    </div>
  )
}