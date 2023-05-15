import classNames from 'classnames'
import Likes from '../../../../../assets/icons/Header/Likes'
import styles from './AddGoodsLikes.module.scss'
import useAdaptive from '../../../../../hooks/useAdaptive'

const AddGoodsLikesLength = ({ goodsLength }) => {
  const isMobile = useAdaptive()

  return (
    <div className="relative">
      <Likes className={classNames(isMobile ? 'fill-black' : 'fill-white')} />
      <span className={styles.likesSpan}>{goodsLength}</span>
    </div>
  )
}

export default AddGoodsLikesLength
