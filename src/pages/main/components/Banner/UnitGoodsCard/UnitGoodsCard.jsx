import { UnitGoodsCardList } from '../../../../../consts/Main/Banner/UnitGoodsCardList'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../../../../../ui/Button/Button'
import styles from './UnitGoodsCard.module.scss'

const UnitGoodsCard = () => {
  const animation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  }

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
