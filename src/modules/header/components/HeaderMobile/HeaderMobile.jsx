import { useState } from 'react'
import styles from './HeaderMobile.module.scss'
import Burger from '../../../../ui/Burger/Burger'
import { Link } from 'react-router-dom'
import Logo from '../../../../assets/icons/Logo/Logo'
import HeaderListIconsForUser from '../HeaderListIconsForUser'
import classNames from 'classnames'
import HeaderBurgerContent from './HeaderBurgerContent'

const HeaderMobile = () => {
  const [isBurger, setIsBurger] = useState(false)

  const burgerButton = () => {
    setIsBurger(true)
  }

  return (
    <header className={styles.header}>
      <div className={classNames(styles.body, '_container')}>
        <div className="flex items-center gap-4">
          <button
            onClick={() => burgerButton()}
            className={styles.burgerButton}
          />
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <HeaderListIconsForUser filter={1} className="fill-black" />
      </div>
      <Burger isBurger={isBurger} setIsBurger={setIsBurger}>
        <HeaderBurgerContent />
      </Burger>
    </header>
  )
}

export default HeaderMobile
