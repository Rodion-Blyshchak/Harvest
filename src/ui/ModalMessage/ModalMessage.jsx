import styles from './ModalMessage.module.scss'

const ModalMessage = ({ children, isMOdalMessage, className }) => {
  if (!isMOdalMessage) {
    return
  }

  return (
    <div className={styles.modalMessage}>
      <div className="_container">
        <div className={className}>{children}</div>
      </div>
    </div>
  )
}

export default ModalMessage
