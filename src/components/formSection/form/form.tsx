import { MyBtn } from '../../UI/MyBtn/MyBtn'
import { MyCheckbox } from '../../UI/MyCheckbox/MyCheckbox'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import InputMask from 'react-input-mask'
import styles from './form.module.scss'
import { askAdmin } from '../../../utils'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


interface formProps {
  title: string
}

export const Form = ({ title }: formProps) => {
  const askAdminError = useSelector((state: any) => state.user.askAdminError);
  const dispatch: any = useDispatch()
  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Введите Ваше имя'),
    phone: yup
      .string()
      .transform((value) => {
        return value.split('_').join('')
      })
      .min(12, 'Введите номер телефона полностью')
      .required('Введите номер телефона'),
    city: yup
      .string(),
    comment: yup
      .string(),
  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const errorMessage = errors.name?.message || errors.phone?.message || askAdminError;


  return (
    <form onSubmit={handleSubmit(({ name, phone, city, comment }) => {
      dispatch(askAdmin(name, phone, city, comment))
      reset()
    })} className={styles.form}>
      <p className={styles.topText}>Заполните форму</p>
      <h2 className={styles.title}>{title}</h2>

      <input
        {...register('name', { required: true })}
        className={styles.input}
        placeholder='Ваше имя*'
      />
      <InputMask
        mask="+79999999999"
        type="tel" {...register('phone')}
        className={styles.input}
        placeholder='Ваш номер телефона*' />
      <input {...register('city')} className={styles.input} placeholder='Город' />
      <input {...register('comment')} className={styles.input} placeholder='Комментарий' />

      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      {/* <MyCheckbox
        label='Подтвердить запрос'
      /> */}

      <MyBtn
        color='#fff'
        bgColor='#873101'
        margin='0 auto'
        className={styles.btn}
      >
        Запросить звонок
      </MyBtn>

      {/* <button type='submit'>Запросить звонок</button> */}
    </form>
  )
}