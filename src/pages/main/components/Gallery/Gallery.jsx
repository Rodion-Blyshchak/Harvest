import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import GalleryList from './GalleryList'
import styles from './Gallery.module.scss'

const Gallery = () => {
  const animation = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  }

  return (
    <section>
      <Link to="https://www.instagram.com/harvest_ua/" target="_blank">
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={animation}
          custom={2}
          viewport={{ amount: 0.2, once: true }}
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
