import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useBasicAnimation from '../../../../hooks/useBasicAnimation'
import GalleryList from './GalleryList'
import styles from './Gallery.module.scss'

const Gallery = () => {
  const animation = useBasicAnimation({
    hidden: { y: 0 },
    visible: { transition: { delay: 0.1 } },
  })

  return (
    <section>
      <Link to="https://www.instagram.com/harvest_ua/" target="_blank">
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={animation}
          viewport={{ amount: 0.1, once: true }}
          className={styles.title}
        >
          @harvest_look
        </motion.p>
      </Link>
      <GalleryList />
    </section>
  )
}

export default Gallery
