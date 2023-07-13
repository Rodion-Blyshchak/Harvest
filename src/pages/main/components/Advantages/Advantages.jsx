import { AdvantagesList } from '../../../../consts/Main/Advantages/AdvantagesList'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import useBasicAnimation from '../../../../hooks/useBasicAnimation'
import styles from './Advantages.module.scss'

const Advantages = () => {
  const animation = useBasicAnimation({})

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
          <Link to={row.link} className="flex gap-2.5">
            <div className={styles.icon}>{row.image}</div>
            <div>
              <p className="title__article">{row.title}</p>
              <p className="description__article">{row.description}</p>
            </div>
          </Link>
        </motion.li>
      ))}
    </ul>
  )
}

export default Advantages
