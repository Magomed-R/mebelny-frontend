import React, { useState } from "react";
import styles from './user.module.scss';
import { serverAdress } from "../../../../utils";

interface user {
  id: string,
  name: string,
  email: string,
  number: string,
  orders: [],
  isBlocked: boolean
}

export const User = ({ id: userId, name, email, number, orders, isBlocked }: user) => {
  const [submitBlock, setSubmitBlock] = useState(false);
  const [deletedOrBlocked, setDeletedOrBlocked] = useState(false)
  const accessToken = localStorage.getItem('accessToken');

  const handleClick = () => {
    fetch(`${serverAdress}/${isBlocked ? 'unblock' : 'block'}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        id: userId,
      })
    }).then(() => {
      setDeletedOrBlocked(true)
    })
  }

  if (deletedOrBlocked) {
    return <div className={styles.user}>
      <p>Пользователь заблокирован. Обновите страницу</p>
    </div>
  }

  return (
    <div className={styles.user}>
      <>
        <p>Ник: {name}</p>
        <p>Почта: {email}</p>
        <p>Телефон: {number}</p>
      </>

      {submitBlock ?
        <div className={styles.submitBtns}>
          <button
            className={styles.btn}
            onClick={handleClick}
          >
            Подтвердить</button>
          <button
            className={styles.btn}
            onClick={() => setSubmitBlock(false)}
          >Отмена</button>
        </div>
        :
        <div className={styles.submitBtns}>
          <button
            className={styles.btn}
            onClick={() => setSubmitBlock(true)}
          >
            {isBlocked ? 'Разблокировать' : 'Заблокировать'}

          </button>
        </div>
      }
    </div>
  )
}