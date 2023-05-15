import { Link } from 'react-router-dom'
import Button from '../../../../ui/Button/Button'
import styles from './ProductCard.module.scss'
import useAdaptive from '../../../../hooks/useAdaptive'

const ProductCard = ({ isImageFirst, image, title, link }) => {
  const isMobile = useAdaptive()

  return isMobile ? (
    <></>
  ) : (
    <Link to={link}>
      <div className={styles.product}>
        <img src={image} alt={image} />
        <div
          className={styles.content}
          style={{
            gridRow: isImageFirst ? 1 : 0,
            textAlign: isImageFirst ? 'end' : 'start',
          }}
        >
          <p className="text-lg">{title}</p>
          <div
            style={{
              textAlign: isImageFirst ? 'end' : 'start',
            }}
          >
            <Button>Перейти</Button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
