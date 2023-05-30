import { useState } from 'react'
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from 'framer-motion'
import Line from '../../assets/icons/ScrollTop/Line'
import Arrow from '../../assets/icons/ScrollTop/Arrow'
import styles from './ScrollTop.module.scss'

const ScrollTop = () => {
  const { scrollY } = useScroll()
  const [scrollTopFixed, setScrollTopFixed] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 500) {
      setScrollTopFixed(true)
    } else {
      setScrollTopFixed(false)
    }
  })

  const opacity = useTransform(scrollY, [500, 700], [0, 1])
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {scrollTopFixed && (
        <motion.div
          style={{
            opacity,
          }}
        >
          <button onClick={() => scrollUp()} className={styles.button}>
            <Arrow className={styles.button__arrow} />
            <Line className={styles.button__line} />
          </button>
        </motion.div>
      )}
    </>
  )
}

export default ScrollTop
