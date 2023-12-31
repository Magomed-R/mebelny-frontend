import React, { useState } from "react";
import styles from './order.module.scss';
import { serverAdress } from "../../../../utils";

interface props {
  order: any
}
export const Order = ({ order }: props) => {
  const customer = order.buyer;
  const orderInfo = order.purchase;
  const status = order.status === 'В обработке';

  const totalPrice = order.purchase.reduce((acc: any, val: any) => {
    return acc + (val.count * val.furniture.price)
  }, 0)

  const handleChangeStatus = (orderStatus: string) => {
    const accessToken = localStorage.getItem('accessToken');
    fetch(serverAdress + '/purchase/complete', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        id: order._id,
        status: orderStatus
      })
    }).then(() => {
      alert('Обновите страницу')
    })
  }

  return <div className={styles.order}>
    <h3 className={styles.title}>Заказ №{order.ticket}</h3>
    <h3 className={styles.title}>Информация о покупателе</h3>
    {customer ?
      <div className={styles.customerInfo}>
        <p>Ник: {customer.username}</p>
        <p>Почта: {customer.mail}</p>
        <p>Телефон: {customer.number}</p>
        <p>Адрес: {customer.address ? customer.address : 'не указан'}</p>
      </div>
      :
      <p>Пользователь удален или заблокирован</p>
    }

    <h3 className={styles.title}>Заказ</h3>
    {orderInfo.map((item: any) => {
      return (
        <div className={styles.orderItem}>
          <p><b>Назавание товара:</b> {item.furniture.title}</p>
          <p><b>Назавание для админа:</b> {item.furniture.adminTitle}</p>
          <p><b>Производитель:</b> {item.furniture.manufacturer}</p>
          <p><b>Количество:</b> {item.count}</p>
          <p><b>Стоимость 1 шт:</b> {item.furniture.price} руб</p>
        </div>
      )
    })}
    <p><b>Статус заказа:</b> {order.status}</p>
    <p><b>Полная стоимость:</b> {totalPrice} руб</p>

    {status ?
      <div className={styles.btns}>
        <button
          className={styles.btn}
          onClick={() => handleChangeStatus('success')}>
          Отправить в выполненные
        </button>
        <button
          className={styles.btn}
          onClick={() => handleChangeStatus('fail')}>
          Отменить
        </button>
      </div>
      : <></>
    }

  </div>
}