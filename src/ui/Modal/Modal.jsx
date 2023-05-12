import styles from './Modal.module.scss'

const Modal = ({ children, activeModal, setActiveModal }) => {
  if (!activeModal) {
    return
  }

  return (
    <div onClick={() => setActiveModal(false)} className={styles.modal}>
      <div
        onClick={(event) => event.stopPropagation()}
        className={styles.modalContent}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
