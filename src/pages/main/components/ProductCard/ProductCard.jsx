import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useAdaptive from '../../../../hooks/useAdaptive'
import useBasicAnimation from '../../../../hooks/useBasicAnimation'
import Button from '../../../../ui/Button/Button'
import styles from './ProductCard.module.scss'

const ProductCard = ({ isImageFirst, image, title, link }) => {
  const isMobile = useAdaptive()

  const animation = useBasicAnimation({
    hidden: { y: 0 },
  })

  return isMobile ? (
    <></>
  ) : (
    <Link to={link}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animation}
        viewport={{ amount: 0.2, once: true }}
        className={styles.product}
      >
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
      </motion.div>
    </Link>
  )
}

export default ProductCard
