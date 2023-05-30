import { useState } from 'react'
import useFetchData from '../../../hooks/useFetchData'
import AssortmentColumnSize from './AssortmentColumnSize/AssortmentColumnSize'
import AssortmentFilters from './AssortmentFilters/AssortmentFilters'
import AssortmentLIstFilling from './AssortmentLIstFilling/AssortmentLIstFilling'
import ScrollTop from '../../../ui/ScrollTop/ScrollTop'
import styles from './Assortment.module.scss'

const Assortment = () => {
  const [columnSize, setColumnSize] = useState(false)
  const { stateData, setStateData } = useFetchData(
    'https://jsonplaceholder.typicode.com/photos'
  )

  return (
    <>
      <p className={styles.title}>Assortment</p>
      <AssortmentColumnSize
        columnSize={columnSize}
        setColumnSize={setColumnSize}
      />
      <div className={styles.content}>
        <AssortmentFilters stateData={stateData} setStateData={setStateData} />
        <AssortmentLIstFilling stateData={stateData} columnSize={columnSize} />
      </div>
      <ScrollTop />
    </>
  )
}

export default Assortment
