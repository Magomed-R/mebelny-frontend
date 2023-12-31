import { useSelector } from 'react-redux'
import { MyBtn, MyContainer } from '../..'
import { IProduct, cartRequest } from '../../../store'
import { serverAdress } from '../../../utils'
import styles from './productContent.module.scss'
import Slider from 'react-slick'
import { useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'

interface props {
  product: IProduct,
  productInCart: { _id: string, count: number } | undefined
}

export const ProductContent = ({ product, productInCart }: props) => {
  const dispatch: any = useDispatch();
  const { _id, title, description, price, photos, discount, sale } = product;
  const totalDiscount = discount > sale ? discount : sale;
  const totalPrice = Math.ceil(price * (100 - totalDiscount) / 100);
  const settings = {
    dots: false,
    arrows: true
  }

  console.log(productInCart)

  const [submitDelete, setSubmitDelete] = useState(false)
  const isAdmin = useSelector((state: any) => state.user.role) === 'admin';
  const isAuth = useSelector((state: any) => state.user.isAuth)

  const deleteProduct = () => {
    const accessToken = localStorage.getItem('accessToken');
    fetch(serverAdress + '/furniture/delete', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        id: _id,
      })
    }).then((res) => {
      console.log(res)
      window.location.reload()
    })
  }

  return (
    <MyContainer>
      <div className={styles.wrapper}>

        <div className={styles.topMobile}>
          <h2 className={styles.title}>
            {title}
          </h2>
        </div>

        <div className={styles.images}>
          <Slider className={styles.slider} {...settings}>
            {photos.map((img, index) => {
              return (
                <div key={index} className={styles.slide}>
                  <img src={serverAdress + '/' + img} />
                </div>
              )
            })}
          </Slider>
        </div>

        <div className={styles.content}>
          <div className={styles.contentDesktop}>
            <h2 className={styles.title}>
              {title}
            </h2>

          </div>

          <p className={styles.description}>
            {description}
          </p>

          <p className={styles.price}>
            {!!totalDiscount ?
              <div className={styles.discountPrice}>
                <span className={styles.oldPrice}>
                  {price + ' RUB'}
                </span>
                <span className={styles.newPrice}>
                  {totalPrice + ' RUB'}
                </span>
              </div>
              :
              `${price} RUB`}
          </p>

          {!!productInCart ?
            <div className={styles.productInCartWrapper}>
              <button
                className={`${styles.productInCartBtn} ${styles.productInCartMinus}`}
                onClick={() => productInCart.count === 1 ? dispatch(cartRequest('delete', isAuth, _id)) : dispatch(cartRequest('minus', isAuth, _id))}
              />
              <div className={styles.productInCartCount}>{productInCart.count}</div>
              <button
                className={`${styles.productInCartBtn} ${styles.productInCartPlus}`}
                onClick={() => dispatch(cartRequest('plus', isAuth, _id))}
              />
            </div>
            :
            <MyBtn
              color='#fff'
              bgColor={!!productInCart ? '#646363' : '#873101'}
              onClick={() => dispatch(cartRequest('add', isAuth, _id))}
            >
              {!!productInCart ? 'Товар в корзине' : 'В корзину '}
            </MyBtn>
          }

          {isAdmin && <Link
            to={`/admin/edit/${_id}`}
            className={styles.edit}
          >
            Редактировать товар
          </Link>}
          {isAdmin &&
            <>
              {submitDelete ?
                <div className={styles.submitDeleteBtns}>
                  <button
                    className={styles.delete}
                    onClick={() => deleteProduct()}
                  >
                    Подтвердить
                  </button>
                  <button
                    className={styles.delete}
                    onClick={() => setSubmitDelete(false)}
                  >
                    Отмена
                  </button>
                </div>
                :
                <button
                  className={styles.delete}
                  onClick={() => setSubmitDelete(true)}
                >
                  Удалить товар
                </button>
              }
            </>
          }
        </div>
      </div>

      {/* <div className={styles.gallery}>
        {images.map(img => {
          return (
            <div className={styles.imageWrapper}>
              <img src={img} />
            </div>
          )
        })}
      </div> */}
    </MyContainer >
  )
}