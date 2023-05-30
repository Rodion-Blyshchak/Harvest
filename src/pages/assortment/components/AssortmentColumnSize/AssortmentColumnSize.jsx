import useAdaptive from '../../../../hooks/useAdaptive'
import classNames from 'classnames'
import ColumnSize1 from '../../../../assets/icons/ColumnSize/ColumnSize1'
import ColumnSize2 from '../../../../assets/icons/ColumnSize/ColumnSize2'
import ColumnSize3 from '../../../../assets/icons/ColumnSize/ColumnSize3'
import ColumnSize4 from '../../../../assets/icons/ColumnSize/ColumnSize4'
import styles from '../Assortment.module.scss'

const AssortmentColumnSize = ({ columnSize, setColumnSize }) => {
  const isMobile = useAdaptive()

  return (
    <div className={styles.columnSizeButton}>
      {isMobile ? (
        <>
          <button
            onClick={() => setColumnSize(true)}
            className={classNames(columnSize ? styles.rowActive : styles.row)}
          >
            <ColumnSize1
              className={classNames(columnSize ? styles.rowActive : styles.row)}
            />
          </button>
          <button onClick={() => setColumnSize(false)}>
            <ColumnSize2
              className={classNames(columnSize ? styles.row : styles.rowActive)}
            />
          </button>
        </>
      ) : (
        <>
          <button onClick={() => setColumnSize(true)}>
            <ColumnSize3
              className={classNames(columnSize ? styles.rowActive : styles.row)}
            />
          </button>
          <button onClick={() => setColumnSize(false)}>
            <ColumnSize4
              className={classNames(columnSize ? styles.row : styles.rowActive)}
            />
          </button>
        </>
      )}
    </div>
  )
}

export default AssortmentColumnSize
