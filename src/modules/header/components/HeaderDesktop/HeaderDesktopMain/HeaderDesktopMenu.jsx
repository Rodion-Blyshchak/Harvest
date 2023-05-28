import { useState } from 'react'
import { HeaderMenuList } from '../../../../../consts/Header/HeaderMenuList'
import { Link } from 'react-router-dom'
import styles from './HeaderDesktopMain.module.scss'
import HeaderModal from './HeaderModal/HeaderModal'
import HeaderModalContent from './HeaderModal/HeaderModalContent'
import { AnimatePresence } from 'framer-motion'

const HeaderDesktopMenu = () => {
  const [isModal, setIsModal] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState(null)

  const modal = (active) => {
    if (active.dropdown) {
      setActiveMenuItem(active.dropdown)
      setIsModal(true)
    } else if (isModal) {
      setActiveMenuItem(null)
      setIsModal(false)
    }
  }

  return (
    <div>
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
      <HeaderModal isModal={isModal} setIsModal={setIsModal}>
        <AnimatePresence mode="wait">
          {activeMenuItem && (
            <HeaderModalContent dropdownList={activeMenuItem} />
          )}
        </AnimatePresence>
      </HeaderModal>
    </div>
  )
}

export default HeaderDesktopMenu
