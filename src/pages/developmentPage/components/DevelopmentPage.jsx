import { Link } from 'react-router-dom'
import image from '../../../assets/images/DevelopmentPage/background.jpg'
import Button from '../../../ui/Button/Button'
import styles from './DevelopmentPage.module.scss'

const DevelopmentPage = () => {
  return (
    <section className="relative">
      <img
        src={image}
        alt="backgroundDevPages"
        className="absolute top-0 right-0 bottom-0 left-0"
      />
      <div className={styles.wrapper}>
        <p className={styles.wrapper__message}>
          На данний момент ця сторінка знаходиться в розробці
        </p>
        <Link to="/">
          <Button buttonType="white">Повернутись на головну</Button>
        </Link>
      </div>
    </section>
  )
}

export default DevelopmentPage
