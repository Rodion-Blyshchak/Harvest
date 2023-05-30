import useAdaptive from '../../../../hooks/useAdaptive'
import classNames from 'classnames'
import AddLikes from '../../../../ui/AddLikes/AddLikes'
import AddCart from '../../../../ui/AddCart/AddCart'
import styles from './ProductItemContent.module.scss'

const ProductItemContent = ({ getData }) => {
  const isMobile = useAdaptive()

  return (
    <div
      className={classNames(
        isMobile
          ? 'flex flex-col gap-4 justify-between py-12 px-4'
          : 'flex gap-4 justify-between py-12 px-4'
      )}
    >
      <img
        src={getData.thumbnailUrl}
        alt={getData.id}
        className={classNames(isMobile ? 'w-full' : 'w-3/5')}
      />
      <div className={classNames(isMobile ? 'w-full' : 'w-2/5')}>
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
