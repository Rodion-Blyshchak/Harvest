import classNames from 'classnames'
import styles from './CartListFilling.module.scss'
import { Link } from 'react-router-dom'
import useTotal from '../../../../hooks/useTotal'
import useAddAndRemoveGoods from '../../../../hooks/useAddAndRemoveGoods'
import Delete from '../../../../assets/icons/ui/Delete'

const CartListFilling = () => {
  const { goodsItem } = useTotal('itemsInGoodsCart')

  const { removeItem } = useAddAndRemoveGoods({}, 'itemsInGoodsCart')

  return (
    <ul className="w-full">
      {goodsItem.length > 0 ? (
        goodsItem.map((data) => (
          <li key={data.id} className="flex gap-4">
            <Link
              to={{
                pathname: '/assortment/item',
                search: `?id=${data.id}`,
              }}
              className={classNames(
                styles.item,
                'flex justify-between gap-2 w-full'
              )}
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
            <button
              onClick={() => removeItem(data.id)}
              className="flex-end p-3 bg-stone-950 mt-5"
            >
              <Delete className="fill-white" />
            </button>
          </li>
        ))
      ) : (
        <p className="header__text text-center">Корзина пуста</p>
      )}
    </ul>
  )
}

export default CartListFilling
