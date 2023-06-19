import { AdvantagesList } from '../../../../consts/Main/Advantages/AdvantagesList'
import { motion } from 'framer-motion'
import styles from './Advantages.module.scss'

const Advantages = () => {
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
    <ul className={styles.list}>
      {AdvantagesList.map((row, index) => (
        <motion.li
          key={row.id}
          initial="hidden"
          whileInView="visible"
          variants={animation}
          custom={index + 1}
          viewport={{ amount: 0.2, once: true }}
          className={styles.list__item}
        >
          <div className={styles.icon}>{row.image}</div>
          <div>
            <p className="title__article">{row.title}</p>
            <p className="description__article">{row.description}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  )
}

export default Advantages
