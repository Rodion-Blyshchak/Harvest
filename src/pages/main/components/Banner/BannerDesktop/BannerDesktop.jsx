import { useScroll, useTransform, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Image from '../../../../../assets/images/Main/Banner/BannerDesktop/banner.png'
import Button from '../../../../../ui/Button/Button'
import styles from './BannerDesktop.module.scss'

const BannerDesktop = () => {
  const { scrollY } = useScroll()
  const yRange = useTransform(scrollY, [0, 100], [0, 30], {
    clamp: false,
  })

  const animation = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  }

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
          <Button
            initial="hidden"
            whileInView="visible"
            variants={animation}
            custom={2}
            viewport={{ once: true }}
            buttonType="white"
          >
            Перейти
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default BannerDesktop
