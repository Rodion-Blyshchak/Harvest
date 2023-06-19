import { awards, journals } from '../../../../consts/Main/About/AboutListIcons'
import { motion } from 'framer-motion'
import styles from './About.module.scss'

const AboutList = ({ journalsList, awardsList }) => {
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
    <>
      {journalsList && (
        <ul className={styles.list}>
          {journals.map((iconItem) => (
            <motion.li
              initial="hidden"
              whileInView="visible"
              variants={animation}
              custom={3}
              viewport={{ once: true }}
              key={iconItem.id}
            >
              {iconItem.icon}
            </motion.li>
          ))}
        </ul>
      )}
      {awardsList && (
        <ul className={styles.list}>
          {awards.map((imageItem) => (
            <motion.li
              initial="hidden"
              whileInView="visible"
              variants={animation}
              custom={5}
              viewport={{ once: true }}
              key={imageItem.id}
            >
              <img src={imageItem.image} alt={imageItem.image} />
            </motion.li>
          ))}
        </ul>
      )}
    </>
  )
}

export default AboutList
