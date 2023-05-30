import { SocialNetworksIconsList } from '../../../../consts/SocialNetworks/SocialNetworksIconsList'
import { Link } from 'react-router-dom'
import User from '../../../../assets/icons/User/User'
import styles from './Gallery.module.scss'

const GalleryModalContent = ({ activeModalContent }) => {
  return (
    <div className={styles.modalWrapper}>
      <img src={activeModalContent.image} alt={activeModalContent.image} />
      <div className={styles.modalWrapper__content}>
        <div>
          <Link
            to="https://www.instagram.com/harvest_ua/"
            className="flex gap-2"
          >
            <User />
            <p className={styles.user}>@harvest_ua</p>
          </Link>
          <p className={styles.description}>{activeModalContent.description}</p>
        </div>
        <ul className="flex gap-3 m-0-auto">
          {SocialNetworksIconsList.map((iconItem) => (
            <li key={iconItem.id}>
              <Link to={iconItem.link} target="_blank">
                {iconItem.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GalleryModalContent
