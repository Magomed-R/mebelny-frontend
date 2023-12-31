import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../store';
import { MyContainer } from '../UI';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import styles from './loginForm.module.scss';

export const LoginForm = () => {
  const dispatch: any = useDispatch();
  const authError = useSelector((state: any) => state.user.authError);
  const isAuth = useSelector((state: any) => state.user.isAuth)
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Заполните логин'),
    password: yup
      .string()
      .required('Заполните пароль')
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (email: string, password: string) => {
    dispatch(loginAction(email, password)).then(() => {
      window.location.reload()
    })
  }

  const errorMessage = errors.email?.message || errors.password?.message || authError;

  useEffect(() => {
    if (isAuth) {
      <Navigate to='/' />
    }
  }, [isAuth])


  return (
    <>
      {isAuth ? <Navigate to='/' /> :
        <MyContainer>
          <form
            className={styles.form}
            onSubmit={handleSubmit(({ email, password }) => onSubmit(email, password))}
          >
            <input
              className={styles.input}
              {...register('email')}
              placeholder="Почта" />
            <input
              className={styles.input}
              type="password"
              {...register('password')}
              placeholder="Пароль" />
            <button
              className={styles.button}
            >Войти</button>
          </form>
          <Link
            className={styles.link}
            to='/register'>
            Зарегистрироваться
          </Link>
          {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        </MyContainer>
      }
    </>
  )
}