import { memo, useState } from 'react'
import HeaderDesktopMainDefault from './HeaderDesktopMainDefault'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion'
import HeaderDesktopMainFixed from './HeaderDesktopMainFixed'
import styles from './HeaderDesktopMain.module.scss'

const HeaderDesktopMain = () => {
  const { scrollY } = useScroll()
  const [HeaderFixed, setHeaderFixed] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 700) {
      setHeaderFixed(true)
    } else {
      setHeaderFixed(false)
    }
  })

  const opacity = useTransform(scrollY, [700, 800], [0, 1])

  return (
    <>
      <HeaderDesktopMainDefault />
      {HeaderFixed && (
        <motion.div
          className={styles.headerFixed}
          style={{
            opacity,
          }}
        >
          <HeaderDesktopMainFixed />
        </motion.div>
      )}
    </>
  )
}

export default memo(HeaderDesktopMain)
