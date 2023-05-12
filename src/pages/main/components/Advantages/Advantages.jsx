import styles from './Advantages.module.scss'
import { AdvantagesList } from '../../../../consts/Main/Advantages/AdvantagesList'

const Advantages = () => {
  return (
    <ul className={styles.list}>
      {AdvantagesList.map((row) => (
        <li key={row.id} className={styles.listItem}>
          <div className={styles.icon}>{row.image}</div>
          <div>
            <p className="title__article">{row.title}</p>
            <p className="description__article">{row.description}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Advantages
