import styles from './AddGoodsLikes.module.scss'
import Button from '../../../../../ui/Button/Button'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const AddGoodsLikesModalContent = ({ goodsItem, totalPrice }) => {
  return (
    <div className="p-5">
      <ul>
        {goodsItem.length > 0 ? (
          goodsItem.map((data) => (
            <li key={data.id}>
              <Link to="/item" className="flex gap-3 pb-5">
                <img
                  src={data.thumbnailUrl}
                  alt={data.id}
                  className={styles.image}
                />
                <div className="w-full">
                  <p className={classNames(styles.text, 'max-w-xs')}>
                    {data.title}
                  </p>
                  <p className={classNames(styles.textDark, 'text-end pt-2')}>
                    {data.id} грн
                  </p>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p className={styles.text}>Ви не добавили товар</p>
        )}
      </ul>
      <div>
        {goodsItem.length > 0 ? (
          <div className="flex gap-3 justify-between items-center">
            <p className={styles.textDark}>Разом: {totalPrice} грн </p>
            <Button>Оформити замовлення</Button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default AddGoodsLikesModalContent
