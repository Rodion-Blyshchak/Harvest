import classNames from 'classnames'
import styles from './Burger.module.scss'

const Burger = ({ children, isBurger, setIsBurger }) => {
  if (!isBurger) {
    return
  }

  return (
    <div className={styles.burger} onClick={() => setIsBurger(false)}>
      {isBurger && (
        <button className={styles.close} onClick={() => setIsBurger(false)}>
          Закрити
        </button>
      )}
      <div
        className={classNames(styles.burger__content, 'scroll-bar')}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Burger
