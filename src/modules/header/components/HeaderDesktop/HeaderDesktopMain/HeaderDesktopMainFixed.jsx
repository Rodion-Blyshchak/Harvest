import classNames from 'classnames'
import styles from './HeaderDesktopMain.module.scss'
import HeaderDesktopMenu from './HeaderDesktopMenu'
import { Link } from 'react-router-dom'
import Logo from '../../../../../assets/icons/Logo/Logo'
import AddGoodsCart from '../../AddGoods/AddGoodsCart/AddGoodsCart'

const HeaderDesktopMainFixed = () => {
  return (
    <div className={styles.header}>
      <div className={classNames(styles.bodyFixed, '_container')}>
        <Link to="/">
          <Logo />
        </Link>
        <HeaderDesktopMenu />
        <Link to="/cart">
          <AddGoodsCart styleFill="fill-black" />
        </Link>
      </div>
    </div>
  )
}

export default HeaderDesktopMainFixed
