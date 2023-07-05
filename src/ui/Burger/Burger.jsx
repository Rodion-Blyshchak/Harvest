import { motion } from 'framer-motion'
import classNames from 'classnames'
import styles from './Burger.module.scss'

const Burger = ({ children, isBurger, setIsBurger, className }) => {
  if (!isBurger) {
    return
  }

  return (
    <motion.div
      className={styles.burger}
      onClick={() => setIsBurger(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isBurger && (
        <button className={styles.close} onClick={() => setIsBurger(false)}>
          Закрити
        </button>
      )}
      <div
        className={classNames(styles.burger__content, 'scroll-bar', className)}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </motion.div>
  )
}

export default Burger
