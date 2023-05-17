import Cart from '../../../../../assets/icons/Header/Cart'
import styles from './AddGoodsCart.module.scss'
import useAdaptive from '../../../../../hooks/useAdaptive.js'
import classNames from 'classnames'

const AddGoodsCartLength = ({ goodsLength, styleFill }) => {
  const isMobile = useAdaptive()

  return (
    <div className="relative">
      <Cart className={classNames(isMobile ? 'fill-black' : `${styleFill}`)} />
      <span className={styles.cartSpan}>{goodsLength}</span>
    </div>
  )
}

export default AddGoodsCartLength
