import { useState } from 'react'
import { motion } from 'framer-motion'
import { GalleryListCards } from '../../../../consts/Main/Gallery/GalleryListCards'
import useModals from '../../../../hooks/useModals.js'
import GalleryModalContent from './GalleryModalContent'
import Modal from '../../../../ui/Modal/Modal'
import styles from './Gallery.module.scss'

const GalleryList = () => {
  const [activeModalContent, setActiveModalContent] = useState(null)
  const { isShowModal, onOpenModal, onCloseModal } = useModals()

  const modal = (active) => {
    setActiveModalContent(active)
    onOpenModal()
  }

  const animation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  }

  return (
    <>
      <ul className={styles.listImages}>
        {GalleryListCards.map((imageItem, index) => (
          <motion.li
            initial="hidden"
            whileInView="visible"
            variants={animation}
            custom={index + 1}
            viewport={{ amount: 0.2, once: true }}
            key={imageItem.id}
            className={styles.listImages__item}
            onClick={() => modal(imageItem)}
          >
            <img src={imageItem.image} alt={imageItem.image} />
            <p className={styles.hoverEffect}>@harvest_ua</p>
          </motion.li>
        ))}
      </ul>
      <Modal isOpen={isShowModal} onClose={() => onCloseModal()}>
        <GalleryModalContent activeModalContent={activeModalContent} />
      </Modal>
    </>
  )
}

export default GalleryList
