import { UnitGoodsCardList } from '../../../../../consts/Main/Banner/UnitGoodsCardList'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../../../../../ui/Button/Button'
import styles from './UnitGoodsCard.module.scss'
import useBasicAnimation from '../../../../../hooks/useBasicAnimation'

const UnitGoodsCard = () => {
  const animation = useBasicAnimation({})

  return (
    <section>
      <ul className={styles.list}>
        {UnitGoodsCardList.map((cardItem, index) => (
          <motion.li
            initial="hidden"
            whileInView="visible"
            variants={animation}
            custom={index + 1}
            viewport={{ once: true }}
            key={cardItem.id}
            className="relative"
          >
            <Link to={cardItem.link}>
              <img
                src={cardItem.image}
                alt={cardItem.title}
                className={styles.image}
              />
              <div className={styles.content}>
                {cardItem.state && (
                  <p className={styles.title}>{cardItem.title}</p>
                )}
                <Button buttonType="transparent">Перейти</Button>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default UnitGoodsCard
