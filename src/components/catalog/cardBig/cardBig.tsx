import { Link } from 'react-router-dom';
import styles from './cardBig.module.scss';
import { IProduct } from '../../../store';
import { serverAdress } from '../../../utils';

interface props {
  product: IProduct
}

export const CardBig = ({ product }: props) => {

  const { _id, preview, title, description } = product;

  return (
    <Link to={`/product/${_id}`}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={serverAdress + '/' + preview} alt={title} />
        </div>

        <div className={styles.right}>
          <h3 className={styles.title}>
            {title}
          </h3>

          <p className={styles.description}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}