import Cart from '../../../../../assets/icons/Header/Cart'
import styles from './AddGoodsCart.module.scss'

const AddGoodsCartLength = ({ goodsLength }) => {
  return (
    <div className="relative">
      <Cart className={styles.cart} />
      <span className={styles.cartSpan}>{goodsLength}</span>
    </div>
  )
}

export default AddGoodsCartLength
