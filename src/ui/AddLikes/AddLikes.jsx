import Like from '../../assets/icons/ui/LIke'
import styles from './AddLikes.module.scss'
import classNames from 'classnames'
import useAddAndRemoveGoods from '../../hooks/useAddAndRemoveGoods'

const AddLikes = ({ goodsDataItem, className }) => {
  const { isItemsInGoods, handleClick } = useAddAndRemoveGoods(
    goodsDataItem,
    'itemsInGoods'
  )

  return (
    <>
      <button onClick={handleClick} className={className}>
        {isItemsInGoods ? (
          <Like className={classNames(styles.active, styles.like)} />
        ) : (
          <Like className={classNames(styles.notActive, styles.like)} />
        )}
      </button>
    </>
  )
}

export default AddLikes
