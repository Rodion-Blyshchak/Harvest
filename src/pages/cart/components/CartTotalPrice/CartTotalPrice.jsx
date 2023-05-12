import useTotal from '../../../../hooks/useTotal'
import Button from '../../../../ui/Button/Button'
import styles from './CartTotalPrice.module.scss'

const CartTotalPrice = () => {
  const { totalPrice } = useTotal('itemsInGoodsCart')
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Сума до оплати за товар</p>
      <p className={styles.price}>{totalPrice} грн</p>
      <div className={styles.button}>
        <Button>Оформити</Button>
      </div>
    </div>
  )
}

export default CartTotalPrice
