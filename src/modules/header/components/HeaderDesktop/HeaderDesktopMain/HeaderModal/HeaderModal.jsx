import styles from './HeaderModal.module.scss'

const HeaderModal = ({ children, isModal, setIsModal }) => {
  if (!isModal) {
    return
  }

  return (
    <>
      <div className={styles.modal} onMouseOver={() => setIsModal(false)}>
        <div
          className={styles.modalContent}
          onMouseOver={(event) => event.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default HeaderModal
