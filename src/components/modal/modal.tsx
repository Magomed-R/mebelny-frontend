import { Dispatch, SetStateAction } from 'react';
import styles from './modal.module.scss';

interface props {
  isOpen: boolean,
  onClick: () => void,
  setStatus: Dispatch<SetStateAction<string>>,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>,
  setPhotos?: Dispatch<SetStateAction<File[]>>,
  title: string,
  loading: boolean,
  status: string,
  reset?: () => void,
  isCartModal?: boolean
}

export const Modal = ({ isOpen, onClick, setIsModalOpen, title, loading, status, reset, setPhotos, setStatus, isCartModal }: props) => {
  const onModalClose = () => {
    document.body.style.position = 'static';
    if (status === 'success') {
      if (reset && setPhotos) {
        reset()
        setPhotos([])
      }
      setStatus('')
    }
    if (status && !isCartModal) {
      window.location.reload()
    }
    setIsModalOpen(false)
  }

  const statusInfo = status === 'success' ? isCartModal ? title : 'Успешно' : 'Ошибка'

  return (
    <>
      {isOpen && (
        <div className={styles.wrapper} >
          <div className={styles.modal}>
            <h3 className={styles.title}>
              {loading ? 'Загрузка' : status ? statusInfo : title}
            </h3>
            {!loading && <div className={styles.buttons}>
              <button
                className={`${styles.btn} ${!!status ? styles.disabled : ''}`}
                onClick={onClick}
                disabled={!!status}
              >
                Подтвердить
              </button>
              <button
                className={styles.btn}
                onClick={onModalClose}
              >
                Закрыть
              </button>
            </div>
            }
          </div>
        </div >
      )}
    </>
  )
}