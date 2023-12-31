import { Dispatch, SetStateAction } from 'react'
import styles from './image.module.scss'

interface props {
  index: number,
  src: string,
  name: string,
  onDelete: (e: any) => void,
  setPreview: Dispatch<SetStateAction<number>>,
  isPreview: boolean
}

export const Image = ({ index, src, name, onDelete, setPreview, isPreview }: props) => {
  return (
    <div
      className={`${styles.wrapper} ${isPreview ? styles.preview : ''}`}

    >
      <button
        className={styles.previewBtn}
        onClick={(e) => {
          e.preventDefault()
          setPreview(index)
        }}
      >Выбрать</button>
      <button className={styles.delete} onClick={onDelete}>X</button>
      <img className={styles.image} src={src} />
      <p className={styles.name}>{isPreview ? 'фото карточки' : name}</p>
    </div>
  )
}