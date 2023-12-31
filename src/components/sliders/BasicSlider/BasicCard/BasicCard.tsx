import { Link } from "react-router-dom";
import { IProduct } from "../../../../store";
import styles from "./BasicCard.module.scss";
import { serverAdress } from "../../../../utils";

interface props {
  product: IProduct,
  showPrice: boolean
}

export const BasicCard = ({ product, showPrice }: props) => {
  const { _id, preview, price, title, discount, sale } = product;
  const totalDiscount = discount > sale ? discount : sale;
  const totalPrice = Math.ceil(price * (100 - totalDiscount) / 100)

  return (
    <Link to={`/product/${_id}`}>
      <div className={styles.card}>
        {!!totalDiscount && <div className={styles.discount}>{`-${totalDiscount}%`}</div>}
        <div className={styles.imageWrapper}>
          <img src={serverAdress + '/' + preview} className={styles.image} alt={title} />
        </div>

        <h3 className={styles.title}>
          {title}
        </h3>

        <p className={styles.price}>
          {showPrice ?
            !!totalDiscount ?
              <div className={styles.discountPrice}>
                <span className={styles.oldPrice}>
                  {price + ' RUB'}
                </span>
                <span className={styles.newPrice}>
                  {totalPrice + ' RUB'}
                </span>
              </div>
              :
              `${price} RUB`
            : ''
          }
        </p>
      </div>
    </Link>
  )
}