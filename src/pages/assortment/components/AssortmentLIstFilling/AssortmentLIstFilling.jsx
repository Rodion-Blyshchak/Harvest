import { Link } from 'react-router-dom'
import styles from '../Assortment.module.scss'
import classNames from 'classnames'
import AddLikes from '../../../../ui/AddLikes/AddLikes'
import Button from '../../../../ui/Button/Button'
import Look from '../../../../assets/icons/ui/Look'

const AssortmentLIstFilling = ({ stateData, columnSize }) => {
  return (
    <ul
      className={classNames(
        styles.list,
        columnSize ? styles.list__less : styles.list__more
      )}
    >
      {stateData.map((dataItem) => (
        <li key={dataItem.id} className={styles.item}>
          <Link
            to={{
              pathname: '/assortment/item',
              search: `?id=${dataItem.id}`,
            }}
            className={styles.item}
          >
            <img src={dataItem.thumbnailUrl} alt={dataItem.id} />
            <p className={styles.itemTitle}>{dataItem.title}</p>
            <p className={styles.itemPrice}>{dataItem.id} грн</p>
            <Button buttonType="green">
              <div className="flex gap-2 justify-center items-center">
                <Look />
                <p>Перейти</p>
              </div>
            </Button>
          </Link>
          <AddLikes goodsDataItem={dataItem} className={styles.hoverEffect} />
        </li>
      ))}
      <div id="loading" />
    </ul>
  )
}

export default AssortmentLIstFilling
