import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import classNames from 'classnames'
import styles from './Modal.module.scss'

const Modal = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    const { body } = document
    if (isOpen) {
      body.classList.add('lock')
    } else {
      body.classList.remove('lock')
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            onClick={onClose}
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              onClick={(event) => event.stopPropagation()}
              className={classNames(styles.modal__content, 'scroll-bar')}
            >
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Modal
