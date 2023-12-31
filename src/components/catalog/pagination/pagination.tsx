import { useDispatch, useSelector } from "react-redux";
import { NEXT_CATALOG_PAGE, PREV_CATALOG_PAGE } from "../../../store";
import styles from './pagination.module.scss'
import { useEffect } from "react";

export const Pagination = () => {
  const currentCatalogPage = useSelector((state: any) => state.products.currentCatalogPage);
  const totalCatalogPages = useSelector((state: any) => state.products.totalCatalogPages);
  const dispatch: any = useDispatch();

  const prevPage = () => {
    dispatch({ type: PREV_CATALOG_PAGE })
  }

  const nextPage = () => {
    dispatch({ type: NEXT_CATALOG_PAGE })
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentCatalogPage])

  if (totalCatalogPages === 1) return <></>

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.prevArrow}
        onClick={prevPage}
        disabled={currentCatalogPage === 1}
      />
      {currentCatalogPage !== 1 &&
        <button
          className={styles.page}
          onClick={prevPage}
        >
          {currentCatalogPage - 1}
        </button>}
      <button
        className={styles.pageActive}
      >
        {currentCatalogPage}
      </button>
      {currentCatalogPage !== totalCatalogPages &&
        <button
          className={styles.page}
          onClick={nextPage}
        >{currentCatalogPage + 1}</button>}
      <button
        className={styles.nextArrow}
        onClick={nextPage}
        disabled={currentCatalogPage === totalCatalogPages}
      />
    </div>
  )
}