import { HeaderMenuList } from '../../../../consts/Header/HeaderMenuList'
import { Link } from 'react-router-dom'
import Search from '../../../../assets/icons/Header/Search'
import Message from '../../../../assets/icons/Header/Message'
import Phone from '../../../../assets/icons/Header/Phone'
import Clock from '../../../../assets/icons/Header/Clock'
import styles from './HeaderMobile.module.scss'

const HeaderBurgerContent = ({ setIsLock }) => {
  const burgerClose = () => setIsLock(false)

  return (
    <>
      <Link
        to="/search"
        className="flex items-center gap-2 p-5"
        onClick={burgerClose}
      >
        <Search />
        <p className={styles.search}>Пошук</p>
      </Link>
      <ul>
        {HeaderMenuList.map((menuItem) => (
          <li key={menuItem.id} className={styles.menuList}>
            <Link
              to={menuItem.link}
              className="py-4 px-5 flex"
              onClick={burgerClose}
            >
              {menuItem.title && <p>{menuItem.title}</p>}
              {menuItem.titleVariable && (
                <p className="color-red">{menuItem.titleVariable}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="p-5">
        <li>
          <Link
            to="https://www.linkedin.com/in/rodion-blyshchak-9a5aab264/"
            className="flex items-center gap-2"
            onClick={burgerClose}
          >
            <Phone />
            <p className="text-sm">+38 063 858 5411</p>
          </Link>
        </li>
        <li className="my-3">
          <Link
            to="https://www.linkedin.com/in/rodion-blyshchak-9a5aab264/"
            className="flex items-center gap-2"
            onClick={burgerClose}
          >
            <Message className="fill-black" />
            <p className="header__text">Лист керівництву</p>
          </Link>
        </li>
        <li className="flex gap-2">
          <Clock />
          <p className="header__text">
            ГРАФІК РОБОТИ: <br /> ПН-СБ: 09:00 - 18:00; <br />
            НД: ВИХІДНИЙ
          </p>
        </li>
      </ul>
    </>
  )
}

export default HeaderBurgerContent
