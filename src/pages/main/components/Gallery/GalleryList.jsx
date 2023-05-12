import { useState } from 'react'
import { GalleryListCards } from '../../../../consts/Main/Gallery/GalleryListCards'
import styles from './Gallery.module.scss'
import Modal from '../../../../ui/Modal/Modal'
import GalleryModalContent from './GalleryModalContent'

const GalleryList = () => {
  const [activeModal, setActiveModal] = useState(false)
  const [activeModalContent, setActiveModalContent] = useState(null)

  const modal = (active) => {
    setActiveModalContent(active)
    setActiveModal(true)
  }

  return (
    <>
      <ul className={styles.listImages}>
        {GalleryListCards.map((imageItem) => (
          <li
            key={imageItem.id}
            className={styles.listImages__item}
            onClick={() => modal(imageItem)}
          >
            <img src={imageItem.image} alt={imageItem.image} />
            <p className={styles.hoverEffect}>@harvest_ua</p>
          </li>
        ))}
      </ul>
      <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
        <GalleryModalContent activeModalContent={activeModalContent} />
      </Modal>
    </>
  )
}

export default GalleryList
