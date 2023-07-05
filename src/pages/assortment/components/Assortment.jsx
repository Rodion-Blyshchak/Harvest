import { useState } from 'react'
import useFetchData from '../../../hooks/useFetchData'
import AssortmentColumnSize from './AssortmentColumnSize/AssortmentColumnSize'
import AssortmentFilters from './AssortmentFilters/AssortmentFilters'
import AssortmentLIstFilling from './AssortmentLIstFilling/AssortmentLIstFilling'
import ModalMessage from '../../../ui/ModalMessage/ModalMessage'
import ScrollTop from '../../../ui/ScrollTop/ScrollTop'
import Button from '../../../ui/Button/Button'
import styles from './Assortment.module.scss'

const Assortment = () => {
  const [columnSize, setColumnSize] = useState(false)
  const [isMOdalMessage, setIsModalMessage] = useState(true)
  const { stateData, setStateData } = useFetchData(
    'https://jsonplaceholder.typicode.com/photos'
  )

  return (
    <section>
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
      <ModalMessage
        isMOdalMessage={isMOdalMessage}
        className={styles.modalMessage}
      >
        <p>
          Данний JSON був взятий із JSON Placeholder як за основу Back-end
          частини проєкту. <br />
          Відповідно до данних які прийшли, був опрацьований наступний
          функціонал.
        </p>
        <Button onClick={() => setIsModalMessage(false)} buttonType="white">
          Закрити
        </Button>
      </ModalMessage>
    </section>
  )
}

export default Assortment
