import { useState } from 'react';
import { MyContainer } from '../..';
import { FormSection } from '../..';
import styles from './productInfoMobile.module.scss';

export const ProductInfoMobile = () => {
  const [techVisible, setTechVisible] = useState(false)
  const [sizesVisible, setSizesVisible] = useState(false)
  const [additionalVisible, setAdditionalVisible] = useState(false)

  return (
    <div className={styles.productInfoMobile}>
      <MyContainer>
        <div className={styles.btns}>
          <button
            className={techVisible ? styles.btnActive : styles.btn}
            onClick={() => setTechVisible(!techVisible)}
          >
            Техническая информация
          </button>

          <div className={techVisible ? styles.listActive : styles.listNone}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <p className={styles.title}>Механизм:</p>
                <p className={styles.info}>Модель имеет множество вариантов комплектации, здесь есть прямые и угловые модули, а также модель может  быть дополнена пуфом и декоративными подушками.</p>
              </li>
              <li className={styles.listItem}>
                <p className={styles.title}>Механизм:</p>
                <p className={styles.info}>Модель имеет множество вариантов комплектации, здесь есть прямые и угловые модули, а также модель может  быть дополнена пуфом и декоративными подушками.</p>
              </li>
            </ul>
          </div>

          <button
            className={sizesVisible ? styles.btnActive : styles.btn}
            onClick={() => setSizesVisible(!sizesVisible)}
          >
            Размеры
          </button>

          <div className={sizesVisible ? styles.listActive : styles.listNone}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <p className={styles.title}>Размеры:</p>
                <p className={styles.info}>Модель имеет множество вариантов комплектации, здесь есть прямые и угловые модули, а также модель может  быть дополнена пуфом и декоративными подушками.</p>
              </li>
              <li className={styles.listItem}>
                <p className={styles.title}>Механизм:</p>
                <p className={styles.info}>Модель имеет множество вариантов комплектации, здесь есть прямые и угловые модули, а также модель может  быть дополнена пуфом и декоративными подушками.</p>
              </li>
            </ul>
          </div>

          <button
            className={additionalVisible ? styles.btnActive : styles.btn}
            onClick={() => setAdditionalVisible(!additionalVisible)}
          >
            Дополнительная комплектация
          </button>

          <div className={additionalVisible ? styles.listActive : styles.listNone}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <p className={styles.title}>Декоративные элементы: </p>
                <p className={styles.info}>Модель имеет множество вариантов комплектации, здесь есть прямые и угловые модули, а также модель может  быть дополнена пуфом и декоративными подушками.</p>
              </li>
              <li className={styles.listItem}>
                <p className={styles.title}>Механизм:</p>
                <p className={styles.info}>Модель имеет множество вариантов комплектации, здесь есть прямые и угловые модули, а также модель может  быть дополнена пуфом и декоративными подушками.</p>
              </li>
            </ul>
          </div>
        </div>


      </MyContainer >
      <FormSection />
    </div>
  )
}