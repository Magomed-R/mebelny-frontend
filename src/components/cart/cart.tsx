import { useSelector } from 'react-redux';
import { CartItem, RegisterModal } from './components';
import styles from './cart.module.scss';
import { MyContainer } from '../UI';
import { useDispatch } from 'react-redux';
import { cartRequest, makeOrder } from '../../store';
import { useEffect, useState } from 'react';
import { Modal } from '../modal/modal';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const dispatch: any = useDispatch();
  const isAuth = useSelector((state: any) => state.user.isAuth)
  const cartItems = useSelector((state: any) => state.cart);
  const allProducts = useSelector((state: any) => state.products.allProducts)
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [status, setStatus] = useState('')
  const [modalHandler, setModalHandler] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const cartFromStorage = localStorage.getItem('cart');
  const parsedCart = cartFromStorage ? JSON.parse(cartFromStorage) : []
  const [totalPrice, setTotalPrice] = useState({
    fullPrice: 0,
    totalPriceWithDiscount: 0
  })
  const cartToRender = isAuth ? cartItems : parsedCart

  useEffect(() => {
    const countTotalPrice = () => {
      let fullPrice = 0;
      let totalPriceWithDiscount = 0;
      if (allProducts) {
        fullPrice = Math.ceil(cartToRender.reduce((val: number, item: any) => {
          const product = allProducts.filter((prod: any) => prod._id === (item.furniture ? item.furniture._id : item._id))[0]
          if (product) {
            return val + item.count * product.price
          } else {
            return 0
          }
        }, 0))
        totalPriceWithDiscount = Math.ceil(cartToRender.reduce((val: number, item: any) => {
          const product = allProducts.filter((prod: any) => prod._id === (item.furniture ? item.furniture._id : item._id))[0]
          if (product) {
            return val + item.count * product.price * (product.discount > product.sale ? (1 - product.discount / 100) : (1 - product.sale / 100))
          } else {
            return 0
          }

        }, 0))
      }

      setTotalPrice(
        { fullPrice, totalPriceWithDiscount }
      )
    }

    countTotalPrice()

  }, [allProducts, cartToRender])

  const clearCart = () => {
    setLoading(true)
    dispatch(cartRequest('clear', isAuth, '')).then(() => {
      setModalTitle('Корзина очищена')
      setStatus('success')
      setLoading(false)
    })
  }

  const order = () => {
    setLoading(true)
    dispatch(makeOrder()).then(() => {
      setModalTitle('Спасибо за заказ! Наш оператор свяжется с вами в ближайшее время')
      setStatus('success')
      setLoading(false)
    })
  }

  const openModalForOrder = () => {
    if (isAuth) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      setModalHandler('order')
      setModalTitle('Оформить заказ?')
      setIsModalOpen(true)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      setIsRegisterModalOpen(true)
    }
  }

  const openModalForClear = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    setModalHandler('clear')
    setModalTitle('Очистить корзину?')
    setIsModalOpen(true)
  }
  console.log(cartToRender, !!cartToRender.length)

  return (
    <>
      <MyContainer>
        {cartToRender.length ?
          <div className={styles.wrapper}>
            <div className={styles.cartItemsWrapper}>
              {cartToRender.map((item: any) =>
                <CartItem item={item} key={item._id} />
              )}
            </div>

            <div className={styles.order}>
              <div className={styles.totalPrice}>{`Полная стоимость: ${totalPrice.fullPrice} руб`}</div>
              <div className={styles.totalPrice}>{`Скидка: ${totalPrice.fullPrice - totalPrice.totalPriceWithDiscount} руб`}</div>
              <div className={styles.totalPrice}>{`Итого: ${totalPrice.totalPriceWithDiscount} руб`}</div>

              <div className={styles.btns}>

              </div>
              <button className={styles.orderBtn} onClick={openModalForOrder}>Оформить заказ</button>
              <button className={styles.orderBtn} onClick={openModalForClear}>Очистить корзину</button>
            </div>
          </div>
          : <div className={styles.empty}>Ваша корзина пуста <Link to='/catalog'>Перейти в каталог</Link></div>}

      </MyContainer>

      <Modal
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onClick={modalHandler === 'order' ? order : clearCart}
        title={modalTitle}
        loading={loading}
        status={status}
        setStatus={setStatus}
        isCartModal={true}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        setIsOpen={setIsRegisterModalOpen}
      />
    </>
  )
}