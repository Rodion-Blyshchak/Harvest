import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Look from '../../../../assets/icons/ui/Look'
import AddLikes from '../../../../ui/AddLikes/AddLikes'
import Button from '../../../../ui/Button/Button'
import styles from '../Assortment.module.scss'

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
            <img src={dataItem.thumbnailUrl} alt="product" />
            <p className={styles.itemTitle}>{dataItem.title}</p>
            <p className={styles.itemPrice}>{dataItem.id} грн</p>
            <Button buttonType="green">
                <Look />
                <p>Перейти</p>
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
