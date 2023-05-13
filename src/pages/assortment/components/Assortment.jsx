import { useState } from 'react'
import useGetFUCKINGProducts from '../../../hooks/useFetchData'
import ScrollTop from '../../../ui/ScrollTop/ScrollTop'
import AssortmentColumnSize from './AssortmentColumnSize/AssortmentColumnSize'
import AssortmentFilters from './AssortmentFilters/AssortmentFilters'
import AssortmentLIstFilling from './AssortmentLIstFilling/AssortmentLIstFilling'
// import IsLoading from '../../../ui/IsLoading/IsLoading' TODO add loading on page
import styles from './Assortment.module.scss'

const Assortment = () => {
  const [columnSize, setColumnSize] = useState(false)
  const { stateData, setStateData, isLoading } = useGetFUCKINGProducts(
    'https://jsonplaceholder.typicode.com/photos'
  ) //? Як відловити тут завантаження isLoading

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
