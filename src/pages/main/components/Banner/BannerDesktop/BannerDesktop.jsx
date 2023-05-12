import styles from './BannerDesktop.module.scss'
import Image from '../../../../../assets/images/Main/Banner/BannerDesktop/banner.png'
import Button from '../../../../../ui/Button/Button'
import { Link } from 'react-router-dom'
import { useScroll, useTransform, motion } from 'framer-motion'

const BannerDesktop = () => {
  const { scrollY } = useScroll()
  const yRange = useTransform(scrollY, [0, 100], [0, 30], {
    clamp: false,
  })

  return (
    <section className="relative">
      <motion.img
        src={Image}
        alt="Banner"
        className={styles.image}
        style={{ y: yRange }}
      />
      <div className={styles.content}>
        <Link to="/assortment">
          <Button buttonType="white">Перейти</Button>
        </Link>
      </div>
    </section>
  )
}

export default BannerDesktop
