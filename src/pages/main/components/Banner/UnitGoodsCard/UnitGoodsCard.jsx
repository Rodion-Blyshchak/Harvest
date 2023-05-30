import { UnitGoodsCardList } from '../../../../../consts/Main/Banner/UnitGoodsCardList'
import { Link } from 'react-router-dom'
import Button from '../../../../../ui/Button/Button'
import styles from './UnitGoodsCard.module.scss'

const UnitGoodsCard = () => {
  return (
    <section>
      <ul className={styles.list}>
        {UnitGoodsCardList.map((cardItem) => (
          <li key={cardItem.id} className="relative">
            <Link to={cardItem.link}>
              <img
                src={cardItem.image}
                alt={cardItem.title}
                className={styles.image}
              />
              <div className={styles.content}>
                {cardItem.state && (
                  <p className={styles.title}>{cardItem.title}</p>
                )}
                <Button buttonType="transparent">Перейти</Button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default UnitGoodsCard
