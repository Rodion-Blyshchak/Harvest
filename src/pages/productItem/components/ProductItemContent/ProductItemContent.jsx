import classNames from 'classnames'
import useAdaptive from '../../../../hooks/useAdaptive'
import AddLikes from '../../../../ui/AddLikes/AddLikes'
import styles from './ProductItemContent.module.scss'
import AddCart from '../../../../ui/AddCart/AddCart'

const ProductItemContent = ({ getData }) => {
  const adaptive = useAdaptive()

  return (
    <div
      className={classNames(
        adaptive
          ? 'flex flex-col gap-4 justify-between py-12 px-4'
          : 'flex gap-4 justify-between py-12 px-4'
      )}
    >
      <img
        src={getData.thumbnailUrl}
        alt={getData.id}
        className={classNames(adaptive ? 'w-full' : 'w-3/5')}
      />
      <div className={classNames(adaptive ? 'w-full' : 'w-2/5')}>
        <p className={styles.title}>{getData.title}</p>
        <div className="flex flex-wrap gap-1 py-8 items-center justify-between">
          <p className={styles.price}>{getData.id} грн</p>
          <div className="flex gap-1 items-center">
            <AddCart goodsDataItem={getData} />
            <AddLikes goodsDataItem={getData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItemContent
