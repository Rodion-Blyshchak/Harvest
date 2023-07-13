import { SocialNetworksIconsList } from '../../../../consts/SocialNetworks/SocialNetworksIconsList'
import { FooterMEnuLIst } from '../../../../consts/Footer/FooterMenuLIst'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import styles from './Information.module.scss'

const Information = () => {
  return (
    <div className={styles.wrapper}>
      <div className="_container">
        <ul className={styles.list}>
          {FooterMEnuLIst.map((footerMenuItem) => (
            <li key={footerMenuItem.id} className={styles.list__item}>
              <p className={styles.title}>{footerMenuItem.title}</p>
              {footerMenuItem.dropdown.map((submenuItem, index) => (
                <div key={index}>
                  {submenuItem.name ? (
                    <Link to={submenuItem.linkSubmenu}>
                      <p
                        className={classNames(
                          submenuItem.nameStatus
                            ? classNames(styles.submenu, 'color-red')
                            : styles.submenu
                        )}
                      >
                        {submenuItem.name}
                      </p>
                    </Link>
                  ) : (
                    <div className="flex gap-7 py-1">
                      {SocialNetworksIconsList.map((socialNetworksIcon) => (
                        <Link
                          to={socialNetworksIcon.link}
                          target="_blank"
                          key={socialNetworksIcon.id}
                        >
                          <div className="fill-gray-100 hover:fill-gray-500 duration-200">
                            {socialNetworksIcon.icon}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-2 py-3">
          <p className="text-sm text-gray-400 ">Розробка прєкту: </p>
          <Link
            to="https://www.linkedin.com/in/rodion-blyshchak-9a5aab264/"
            target="_blank"
          >
            <p className="text-sm text-gray-100 underline hover:no-underline duration-200">
              Rodion Blyshchak
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Information
