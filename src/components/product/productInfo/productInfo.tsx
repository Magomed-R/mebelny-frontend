import { useState } from 'react'
import { FormSection, MyContainer } from '../..'
import styles from './productInfo.module.scss'
import { IProduct } from '../../../store';

export const ProductInfo = ({ product }: { product: IProduct }) => {
  const { characteristics } = product
  return (
    <div className={styles.productInfo}>
      <MyContainer>
        <div className={styles.btns}>
          {/* <button
            className={styles.btnActive}
          >
            Техническая информация
          </button> */}
        </div>

        <div className={styles.menus}>
          <div className={styles.listActive}>
            <ul className={styles.list}>
              {characteristics.map(({ name, text }, index) => {
                return <li key={index} className={styles.listItem}>
                  <p className={styles.title}>{name}</p>
                  <p className={styles.info}>{text}</p>
                </li>
              })}
            </ul>
          </div>
        </div>

      </MyContainer >
      <FormSection />
    </div>
  )
}