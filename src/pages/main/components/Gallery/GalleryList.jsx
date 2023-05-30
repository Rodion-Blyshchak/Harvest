import { useState } from 'react'
import { GalleryListCards } from '../../../../consts/Main/Gallery/GalleryListCards'
import styles from './Gallery.module.scss'
import Modal from '../../../../ui/Modal/Modal'
import GalleryModalContent from './GalleryModalContent'
import useModals from '../../../../hooks/useModals.js'

const GalleryList = () => {
  const [activeModalContent, setActiveModalContent] = useState(null)
  const { isShowModal, onOpenModal, onCloseModal } = useModals()

  const modal = (active) => {
    setActiveModalContent(active)
    onOpenModal()
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
      <Modal isOpen={isShowModal} onClose={() => onCloseModal()}>
        <GalleryModalContent activeModalContent={activeModalContent} />
      </Modal>
    </>
  )
}

export default GalleryList
