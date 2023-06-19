import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useAdaptive from '../../../../hooks/useAdaptive'
import classNames from 'classnames'
import AddLikes from '../../../../ui/AddLikes/AddLikes'
import Button from '../../../../ui/Button/Button'
import Look from '../../../../assets/icons/ui/Look'
import styles from './AssortmentLIstFilling.module.scss'

const AssortmentLIstFilling = ({ stateData, columnSize }) => {
  const isMobile = useAdaptive()

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
            <img
              src={dataItem.thumbnailUrl}
              alt={dataItem.id}
              className="h-3/4"
            />
            <div
              className={classNames(
                isMobile && columnSize
                  ? 'h-fit'
                  : 'flex flex-col gap-2.5 justify-between h-full'
              )}
            >
              <p className={styles.item__title}>{dataItem.title}</p>
              <div>
                <p className={styles.item__price}>{dataItem.id} грн</p>
                <Button buttonType="green">
                  <div className="flex gap-2 justify-center items-center">
                    <Look />
                    <p>Перейти</p>
                  </div>
                </Button>
              </div>
            </div>
          </Link>
          <AddLikes goodsDataItem={dataItem} className={styles.hoverEffect} />
        </li>
      ))}
      <div id="loading" />
    </ul>
  )
}

export default AssortmentLIstFilling
