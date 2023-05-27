import styles from './HeaderMobile.module.scss'
import Burger from '../../../../ui/Burger/Burger'
import { Link } from 'react-router-dom'
import Logo from '../../../../assets/icons/Logo/Logo'
import HeaderListIconsForUser from '../HeaderListIconsForUser'
import classNames from 'classnames'
import HeaderBurgerContent from './HeaderBurgerContent'
import useAddBodyClassNameLock from '../../../../hooks/useAddBodyClassNameLock'

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
        <HeaderBurgerContent />
      </Burger>
    </header>
  )
}

export default HeaderMobile
