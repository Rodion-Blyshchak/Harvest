import classNames from 'classnames'
import styles from './HeaderDesktopMain.module.scss'
import HeaderDesktopMenu from './HeaderDesktopMenu'
import { Link } from 'react-router-dom'
import Logo from '../../../../../assets/icons/Logo/Logo'
import Cart from '../../../../../assets/icons/Header/Cart'

const HeaderDesktopMainFixed = () => {
  return (
    <div className={styles.header}>
      <div className={classNames(styles.bodyFixed, '_container')}>
        <Link to="/">
          <Logo />
        </Link>
        <HeaderDesktopMenu />
        <Link to="/cart">
          <Cart />
        </Link>
      </div>
    </div>
  )
}

export default HeaderDesktopMainFixed
