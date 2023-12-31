import React, { useState } from "react";
import styles from './users.module.scss';
import { useSelector } from "react-redux";
import { User } from "./user/user";
import { MyContainer } from "../../UI";

export const AdminUsers = () => {
  const allUsers = useSelector((state: any) => state.adminData.allUsers.filter((user: any) => !user.isBlocked && user.mail !== state.user.mail))

  const blockedUsers = useSelector((state: any) => state.adminData.allUsers.filter((user: any) => user.isBlocked && user.mail !== state.user.mail))

  const [usersToShow, setUsersToShow] = useState(true)

  return (
    <MyContainer>
      <div className={styles.btns}>
        <button
          className={styles.btn}
          onClick={() => setUsersToShow(true)}
        >Пользователи</button>
        <button
          className={styles.btn}
          onClick={() => setUsersToShow(false)}
        >Заблокированные пользователи</button>
      </div>
      <div className={styles.users}>
        {(usersToShow ? allUsers : blockedUsers).map((user: any) => {
          return <User
            key={user._id}
            id={user._id}
            name={user.username}
            email={user.mail}
            number={user.number}
            orders={user.historyOfBye}
            isBlocked={user.isBlocked}
          />
        })}
      </div>
    </MyContainer >
  )
}