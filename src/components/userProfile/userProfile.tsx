import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { LOGOUT } from "../../store";
import { MyContainer } from "../UI";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import InputMask from "react-input-mask";
import styles from './userProfile.module.scss'
import { Navigate, useNavigate } from "react-router-dom";
import { editUserData } from "../../store/reducers/userReducer/actionCreators/editUserData";
import { useState } from "react";

export const UserProfile = () => {
  const user = useSelector((state: any) => state.user);
  const dispatch: any = useDispatch()
  const serverError = useSelector((state: any) => state.user.registerError)
  const [success, setSuccess] = useState(false)

  const logout = () => {
    localStorage.removeItem('accessToken')
    dispatch({ type: LOGOUT })
    window.location.reload()
  }

  const onSubmit = (mail: string, number: string, username: string) => {
    setSuccess(false)
    dispatch(editUserData(mail, number, username, setSuccess))
  }

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Введите почту'),
    username: yup
      .string()
      .required('Введите имя пользователя'),
    number: yup
      .string()
      .transform((value) => {
        return value.split('_').join('')
      })
      .required('Введите номер телефона'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const errorMessage = errors.email?.message || errors.username?.message || errors.number?.message || serverError;

  if (!user.isAuth) {
    return <Navigate to='/' />
  }

  return (
    <MyContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
        className={styles.form}>
        <label htmlFor="username">Ваше имя</label>
        <input
          type="text"
          className={styles.input}
          defaultValue={user.username}
          {...register('username')}
        />
        <label htmlFor="email">Электронная почта</label>
        <input
          type="text"
          className={styles.input}
          defaultValue={user.mail}
          {...register('email')}
        />
        <label htmlFor="phone">Номер телефона</label>
        <InputMask
          mask='+79999999999'
          className={styles.input}
          defaultValue={user.number}
          {...register('number')}
        />
        <button
          onClick={handleSubmit(({ email: mail, number, username }) => {
            onSubmit(mail, number, username)
            // console.log(data)
          })}
          className={styles.button}
        >Сохранить изменения</button>

        <button
          className={styles.button}
          onClick={(e) => {
            e.preventDefault()
            logout()
          }}>Выйти из аккаунта</button>
      </form>
      {errorMessage && <div className={styles.error}>
        {errorMessage}
      </div>}

      {success && <div className={styles.success}>
        Изменения сохранены. Обновите страницу.
      </div>}
    </MyContainer>
  )
}