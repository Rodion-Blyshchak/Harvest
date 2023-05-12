import Likes from '../../../../../assets/icons/Header/Likes'
import styles from './AddGoodsLikes.module.scss'

const AddGoodsLikesLength = ({ goodsLength }) => {
  return (
    <div className="relative">
      <Likes className={styles.likes} />
      <span className={styles.likesSpan}>{goodsLength}</span>
    </div>
  )
}

export default AddGoodsLikesLength
