import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../store';
import { MyContainer } from '../UI';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import styles from './registerForm.module.scss';

export const RegisterForm = () => {
  const dispatch: any = useDispatch();
  const isAuth = useSelector((state: any) => state.user.isAuth);
  const registerError = useSelector((state: any) => state.user.registerError)

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Введите почту'),
    username: yup
      .string()
      .required('Введите имя пользователя'),
    phone: yup
      .string()
      .transform((value) => {
        return value.split('_').join('')
      })
      .required('Введите номер телефона'),
    password: yup
      .string()
      .required('Введите пароль')
      .min(5, 'Пароль должен содержать как минимум 5 символов')
      .max(30, 'Пароль должен быть не более 30 символов'),
    passcheck: yup
      .string()
      .required('Повторите пароль')
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (email: string, phone: string, username: string, password: string) => {
    dispatch(registerAction(email, phone, username, password))
  }

  const errorMessage = errors.email?.message || errors.username?.message || errors.phone?.message || errors.password?.message || errors.passcheck?.message || registerError

  return (
    <>
      {isAuth ? <Navigate to='/' /> :
        <MyContainer>
          <form
            className={styles.form}
            onSubmit={handleSubmit(({ email, phone, password, username }) => onSubmit(email, phone, username, password))}
          >
            <input
              className={styles.input}
              {...register('email')}
              placeholder="Почта" />
            <input
              className={styles.input}
              {...register('username')}
              placeholder="Имя пользователя" />
            <InputMask
              mask='+79999999999'
              className={styles.input}
              {...register('phone')}
              placeholder="Номер телефона" />
            <input
              className={styles.input}
              type="password"
              {...register('password')}
              placeholder="Пароль" />
            <input
              className={styles.input}
              type="password"
              {...register('passcheck')}
              placeholder="Повтор пароля" />
            <button
              className={styles.button}
            >Зарегистрироваться</button>
          </form>
          <Link
            className={styles.link}
            to='/login'>
            Войти
          </Link>
          {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        </MyContainer>
      }
    </>
  )
}