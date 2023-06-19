import { Link } from 'react-router-dom'
import classNames from 'classnames'
import HeaderDesktopMenu from './HeaderDesktopMenu'
import AddGoodsCart from '../../AddGoods/AddGoodsCart/AddGoodsCart'
import Logo from '../../../../../assets/icons/Logo/Logo'
import styles from './HeaderDesktopMain.module.scss'

const HeaderDesktopMainFixed = () => {
  return (
    <div className={classNames(styles.header, styles.header__border)}>
      <div className={classNames(styles.bodyFixed, '_container')}>
        <Link to="/">
          <Logo />
        </Link>
        <HeaderDesktopMenu />
        <AddGoodsCart styleFill="fill-black" />
      </div>
    </div>
  )
}

export default HeaderDesktopMainFixed
