import { useState } from 'react'
import useFetchData from '../../../hooks/useFetchData'
import styles from './Assortment.module.scss'
import AssortmentColumnSize from './AssortmentColumnSize/AssortmentColumnSize'
import AssortmentFilters from './AssortmentFilters/AssortmentFilters'
import AssortmentLIstFilling from './AssortmentLIstFilling/AssortmentLIstFilling'
import ScrollTop from '../../../ui/ScrollTop/ScrollTop'
import IsLoading from '../../../ui/IsLoading/IsLoading'

const Assortment = () => {
  const [columnSize, setColumnSize] = useState(false)
  const { stateData, setStateData, isLoading } = useFetchData(
    'https://jsonplaceholder.typicode.com/photos'
  ) //? Як відловити тут загрузку isLoading

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
