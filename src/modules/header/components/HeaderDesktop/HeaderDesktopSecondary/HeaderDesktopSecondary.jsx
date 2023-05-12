import classNames from 'classnames'
import styles from './HeaderDesktopSecondary.module.scss'
import { Link } from 'react-router-dom'
import Message from '../../../../../assets/icons/Header/Message'
import Logo from '../../../../../assets/icons/Logo/Logo'
import HeaderListIconsForUser from '../../HeaderListIconsForUser'

const HeaderDesktopSecondary = () => {
  return (
    <div className={styles.header}>
      <div className={classNames(styles.body, '_container')}>
        <Link
          to="https://www.linkedin.com/in/rodion-blyshchak-9a5aab264/"
          target="_blank"
          className="flex items-center gap-1"
        >
          <Message className="fill-white" />
          <p className="header__text">Лист керівництву</p>
        </Link>
        <Link to="/">
          <Logo className="fill-white" />
        </Link>
        <HeaderListIconsForUser filter={2} className="fill-white" />
      </div>
    </div>
  )
}

export default HeaderDesktopSecondary
