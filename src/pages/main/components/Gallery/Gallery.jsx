import { Link } from 'react-router-dom'
import styles from './Gallery.module.scss'
import GalleryList from './GalleryList'

const Gallery = () => {
  return (
    <section>
      <Link
        to="https://www.instagram.com/harvest_ua/"
        target="_blank"
        className={styles.title}
      >
        @harvest_look
      </Link>
      <GalleryList />
    </section>
  )
}

export default Gallery
