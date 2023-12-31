import { BasicCard, MyContainer } from "..";
import { CardBig } from "./cardBig/cardBig";
import { Pagination } from "./pagination/pagination";
import { useSelector } from "react-redux";
import { IProduct, } from "../../store";
import styles from './catalog.module.scss'

interface props {
  cardColumns: number;
}

export const Catalog = ({ cardColumns }: props) => {
  const productsFromServer: IProduct[] = useSelector((state: any) => state.products.filteredProducts);
  const productsPerPage: number = useSelector((state: any) => state.products.productsPerPage);
  const currentCatalogPage: number = useSelector((state: any) => state.products.currentCatalogPage);
  const products = productsFromServer.slice((currentCatalogPage - 1) * productsPerPage, currentCatalogPage * productsPerPage)

  return (
    <MyContainer>
      {products.length ?
        <div className={styles.wrapper}>
          <div className={cardColumns === 4 ? styles.cardsSmall : styles.cardsBig}>
            {products.map(item => {
              return (
                <div key={item._id}>
                  {cardColumns === 4 ?
                    <BasicCard
                      key={item._id}
                      product={item}
                      showPrice={false}
                    />
                    :
                    <CardBig
                      key={item._id}
                      product={item}
                    />
                  }
                </div>
              )
            })}
          </div>

          <div className={cardColumns === 4 ? styles.cardsSmallMobile : styles.cardsBigMobile}>
            {products.map(item => {
              return (
                <BasicCard
                  key={item._id}
                  product={item}
                  showPrice={false}
                />
              )
            })}
          </div>

          <Pagination />
        </div>
        :
        <div className={styles.empty}>Ничего не найдено</div>
      }
    </MyContainer>
  )
}