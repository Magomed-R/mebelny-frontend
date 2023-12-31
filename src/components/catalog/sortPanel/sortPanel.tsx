import { useState } from 'react'
import { MyContainer } from '../..';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { SEARCHING_OR_FILTERING_PRODUCTS } from '../../../store';
import styles from './sortPanel.module.scss';

interface props {
  cardColumns: number,
  setCardColumns: React.Dispatch<React.SetStateAction<number>>,
}

export const SortPanel = ({ cardColumns, setCardColumns }: props) => {
  const allProducts = useSelector((state: any) => state.products.allProducts);
  const allTags = useSelector((state: any) => state.products.tags);
  const allManufacturers = useSelector((state: any) => state.products.manufacturers);
  const [selectedTag, setSelectedTag] = useState('');
  const [searchPhrase, setSearchPhrase] = useState('');
  const [selectesManufacturer, setSelectesManufacturer] = useState('');
  const dispatch: any = useDispatch()

  const searchProducts = (phrase: string, tag: string, manufacturer: string) => {
    console.log(phrase, tag, manufacturer)
    const filteredProducts = allProducts.filter((product: any) => {
      return tag && manufacturer ?
        product.title.toLowerCase().includes(phrase.toLowerCase()) && product.tags === tag && product.manufacturer === manufacturer
        : manufacturer ? product.title.toLowerCase().includes(phrase.toLowerCase()) && product.manufacturer === manufacturer
          : tag ? product.title.toLowerCase().includes(phrase.toLowerCase()) && product.tags === tag :
            product.title.toLowerCase().includes(phrase.toLowerCase())
    })
    dispatch({ type: SEARCHING_OR_FILTERING_PRODUCTS, payload: filteredProducts })
  }

  return (
    <MyContainer>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.selects}>
            <select
              className={styles.select}
              onChange={({ target }) => {
                setSelectedTag(target.value)
                searchProducts(searchPhrase, target.value, selectesManufacturer)
              }}
            >
              <option value=''>Категория</option>
              {allTags.sort((a: string, b: string) => {
                if (a > b) {
                  return 1;
                }
                if (b > a) {
                  return -1;
                }
                return 0;
              }).map((tags: string, index: number) => {
                return <option
                  key={index}
                  value={tags}>
                  {tags.charAt(0).toUpperCase() + tags.slice(1)}
                </option>
              })}
            </select>

            <select
              className={styles.select}
              onChange={({ target }) => {
                setSelectesManufacturer(target.value)
                searchProducts(searchPhrase, selectedTag, target.value)
              }}
            >
              <option value=''>Производитель</option>
              {allManufacturers.sort((a: string, b: string) => {
                if (a > b) {
                  return 1;
                }
                if (b > a) {
                  return -1;
                }
                return 0;
              }).map((manufacturer: string, index: number) => {
                return <option
                  key={index}
                  value={manufacturer}>
                  {manufacturer.charAt(0).toUpperCase() + manufacturer.slice(1)}
                </option>
              })}
            </select>
          </div>
        </div>

        <div className={styles.searchWrapper}>
          <div className={styles.buttons}>
            <button
              className={`${styles.smallCardsBtn}
             ${cardColumns == 4 ? styles.smallCardsBtnActive : ''}`}
              onClick={() => setCardColumns(4)}
            />
            <button
              className={
                `${styles.bigCardsBtn}
              ${cardColumns == 2 ? styles.bigCardsBtnActive : ''}
            `            }
              onClick={() => setCardColumns(2)}
            />

          </div>

          <form className={styles.inputForm}>
            <input
              className={styles.search}
              placeholder='Поиск'
              onChange={(e) => {
                setSearchPhrase(e.target.value)
                searchProducts(e.target.value, selectedTag, selectesManufacturer)
              }}
            />
          </form>
        </div>
      </div>
    </MyContainer>
  )
}