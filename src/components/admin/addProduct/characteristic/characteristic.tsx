import styles from './characteristic.module.scss'

interface props {
  ind: number,
  name: any[],
  text: any[]
}

export const Characteristic = ({ ind, name, text }: props) => {
  const deleteCharacteristic = () => {
    console.log(ind)
  }
  return (
    <>
      <div className={styles.label}>
        <label>Характеристка</label>
        <button>Удалить</button>
      </div>
      <input className={styles.input} type="text" {...name} placeholder='Название характеристики' />
      <input className={styles.input} type="text" {...text} placeholder='Текст характеристики' />
    </>
  )
}