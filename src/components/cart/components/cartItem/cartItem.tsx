import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IProduct, cartRequest } from '../../../../store';
import { serverAdress } from '../../../../utils';
import styles from './cartItem.module.scss'
import { useSelector } from 'react-redux';

export const CartItem = ({ item }: any) => {
  const isAuth = useSelector((state: any) => state.user.isAuth)
  const allProducts = useSelector((state: any) => state.products.allProducts)
  const product = isAuth ? item.furniture : allProducts.filter((product: IProduct) => product._id === item._id)[0];
  const { title, price, preview, _id, discount, sale } = product ? product :
    {
      title: '',
      price: '',
      preview: '',
      _id: '',
      discount: '',
      sale: ''
    }
  const count = item.count;

  const dispatch: any = useDispatch();

  const increaseProductInCart = () => {
    return dispatch(cartRequest('plus', isAuth, _id))
  }

  const decreaseProductInCart = () => {
    return dispatch(cartRequest('minus', isAuth, _id))
  }

  const deleteProductInCart = () => {
    return dispatch(cartRequest('delete', isAuth, _id))
  }

  return (
    <div className={styles.cartItem}>
      <div className={styles.image}>
        {product ?
          <img src={serverAdress + '/' + preview} />
          : <div className={styles.imageLoad}></div>
        }

      </div>
      {product ? <div className={styles.wrapper}>
        <div className={styles.info}>
          <Link className={styles.link} to={`/product/${_id}`}>
            {title}
          </Link>
          <div>
            {(discount || sale) ? <p className={styles.oldPrice}>{price + ' руб'}</p> : <></>}
            <p className={(discount || sale) ? styles.priceWithDiscount : styles.price}>{Math.ceil(price * (discount > sale ? (1 - discount / 100) : (1 - sale / 100))) + ' руб'}</p>
          </div>
        </div>

        <div className={styles.buttons}>
          <button
            className={`${styles.button} ${styles.buttonMinus}`}
            onClick={count === 1 ? deleteProductInCart : decreaseProductInCart} />
          <p className={styles.count}>{count}</p>
          <button
            className={`${styles.button} ${styles.buttonPlus}`}
            onClick={increaseProductInCart}
          />
        </div>
      </div>
        :
        <div className={styles.infoLoad}>
          <div className={styles.infoLoad_block} />
          <div className={styles.infoLoad_block} />
          <div className={styles.infoLoad_last} />
        </div>}

    </div>
  )
}