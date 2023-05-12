import classNames from 'classnames'
import styles from './CartListFilling.module.scss'
import { Link } from 'react-router-dom'
import useTotal from '../../../../hooks/useTotal'

const CartListFilling = () => {
  const { goodsItem } = useTotal('itemsInGoodsCart')

  return (
    <ul className="w-full">
      {goodsItem.length > 0 ? (
        goodsItem.map((data) => (
          <li key={data.id}>
            <Link
              to={{
                pathname: '/assortment/item',
                search: `?id=${data.id}`,
              }}
              className={classNames(styles.item, 'flex justify-between gap-2')}
            >
              <img
                src={data.thumbnailUrl}
                alt={data.id}
                className={styles.image}
              />
              <div>
                <p className={styles.title}>{data.title}</p>
                <p className={styles.price}>{data.id} грн</p>
              </div>
            </Link>
          </li>
        ))
      ) : (
        <p className="header__text text-center">Корзина пуста</p>
      )}
    </ul>
  )
}

export default CartListFilling
