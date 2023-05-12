import styles from './IsLoading.module.scss'

const IsLoading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  )
}

export default IsLoading
