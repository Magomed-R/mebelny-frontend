import React, { useState } from "react";
import styles from './orders.module.scss';
import { useSelector } from "react-redux";
import { Order } from "./order/order";
import { MyContainer } from "../../UI";

export const AdminOrders = () => {
  const allOrders = useSelector((state: any) => state.adminData.orders);
  const [completeOrders, setCompleteOrders] = useState(false)

  return (
    <MyContainer>
      <div className={styles.btns}>
        <button
          className={styles.btn}
          onClick={() => setCompleteOrders(false)}
        >Заказы в обработке</button>
        <button
          className={styles.btn}
          onClick={() => setCompleteOrders(true)}
        >Завершенные заказы</button>
      </div>
      <div className={styles.ordersWrapper}>
        <h3 className={styles.title}>{completeOrders ? 'Выполненные заказы' : 'Заказы в обработке'}</h3>
        {allOrders.filter((order: any) => completeOrders ? order.status !== 'В обработке' : order.status === 'В обработке').map((order: any) => {
          if (!order) {
            return
          } else {
            return <Order
              key={order._id}
              order={order}
            />
          }
        })}
      </div>
    </MyContainer>
  )
}