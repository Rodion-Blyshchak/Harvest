import { motion, AnimatePresence } from 'framer-motion'
import styles from './Modal.module.scss'
import classNames from 'classnames'

const Modal = ({ children, activeModal, setActiveModal }) => {
  if (!activeModal) {
    return
  }

  return (
    <AnimatePresence>
      {activeModal && (
        <>
          <motion.div
            onClick={() => setActiveModal(false)}
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
