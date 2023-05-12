import { awards, journals } from '../../../../consts/Main/About/AboutListIcons'
import styles from './About.module.scss'

const AboutList = ({ journalsList, awardsList }) => {
  return (
    <>
      {journalsList && (
        <ul className={styles.list}>
          {journals.map((iconItem) => (
            <li key={iconItem.id}>{iconItem.icon}</li>
          ))}
        </ul>
      )}
      {awardsList && (
        <ul className={styles.list}>
          {awards.map((imageItem) => (
            <li key={imageItem.id}>
              <img src={imageItem.image} alt={imageItem.image} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default AboutList
