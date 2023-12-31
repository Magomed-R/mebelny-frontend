import { Dispatch, SetStateAction } from "react";
import styles from './registerModal.module.scss'
import { Link } from "react-router-dom";

export const RegisterModal = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <>
            {isOpen ?
                <div className={styles.wrapper}>

                    <div className={styles.modal}>
                        <p>Оформить заказ могут только зарегистрированныe пользователи</p>

                        <div className={styles.links}>
                            <Link className={styles.link} to='/login'>Войти в аккаунт</Link>
                            <Link to='/register'>Зарегистрироваться</Link>
                        </div>

                        <button
                            className={styles.close}
                            onClick={() => {
                                setIsOpen(false)
                                document.body.style.position = 'static';
                            }} >Х</button>
                    </div>

                </div>
                : <></>
            }
        </>
    )
}