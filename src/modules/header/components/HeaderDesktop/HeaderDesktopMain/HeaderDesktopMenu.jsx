import { useState } from 'react'
import { HeaderMenuList } from '../../../../../consts/Header/HeaderMenuList'
import { AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import useAddBodyClassNameLock from '../../../../../hooks/useAddBodyClassNameLock'
import HeaderModal from './HeaderModal/HeaderModal'
import HeaderModalContent from './HeaderModal/HeaderModalContent'
import styles from './HeaderDesktopMain.module.scss'

const HeaderDesktopMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null)
  const { isLock, setIsLock } = useAddBodyClassNameLock()

  const modal = (active) => {
    if (active.dropdown) {
      setActiveMenuItem(active.dropdown)
      setIsLock(true)
    } else if (isLock) {
      setActiveMenuItem(null)
      setIsLock(false)
    }
  }

  return (
    <>
      <ul className={styles.menuList}>
        {HeaderMenuList.map((menuItem) => (
          <li key={menuItem.id} className="header__text">
            <Link to={menuItem.link}>
              {menuItem.title && (
                <div
                  className="flex items-center gap-1"
                  onMouseOver={() => modal(menuItem)}
                >
                  <p>{menuItem.title}</p>
                  {menuItem.later}
                </div>
              )}
              {menuItem.titleVariable && (
                <p className="color-red">{menuItem.titleVariable}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
      <HeaderModal isModal={isLock} setIsModal={setIsLock}>
        <AnimatePresence mode="wait">
          {activeMenuItem && (
            <HeaderModalContent
              dropdownList={activeMenuItem}
              setIsLoc={setIsLock}
            />
          )}
        </AnimatePresence>
      </HeaderModal>
    </>
  )
}

export default HeaderDesktopMenu
