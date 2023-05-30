import HeaderDesktopMenu from './HeaderDesktopMenu'
import classNames from 'classnames'
import styles from './HeaderDesktopMain.module.scss'

const HeaderDesktopMainDefault = () => {
  return (
    <div className={styles.header}>
      <div className={classNames(styles.body, '_container')}>
        <HeaderDesktopMenu />
      </div>
    </div>
  )
}

export default HeaderDesktopMainDefault
