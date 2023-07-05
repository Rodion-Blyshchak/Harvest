import { Link } from 'react-router-dom'
import useAddBodyClassNameLock from '../../../../hooks/useAddBodyClassNameLock'
import classNames from 'classnames'
import Burger from '../../../../ui/Burger/Burger'
import Logo from '../../../../assets/icons/Logo/Logo'
import HeaderListIconsForUser from '../HeaderListIconsForUser'
import HeaderBurgerContent from './HeaderBurgerContent'
import styles from './HeaderMobile.module.scss'

const HeaderMobile = () => {
  const { isLock, setIsLock } = useAddBodyClassNameLock()

  return (
    <header className={styles.header}>
      <div className={classNames(styles.body, '_container')}>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsLock(true)}
            className={styles.burgerButton}
          />
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <HeaderListIconsForUser filter={1} className="fill-black" />
      </div>
      <Burger isBurger={isLock} setIsBurger={setIsLock}>
        <HeaderBurgerContent setIsBurger={setIsLock} />
      </Burger>
    </header>
  )
}

export default HeaderMobile
