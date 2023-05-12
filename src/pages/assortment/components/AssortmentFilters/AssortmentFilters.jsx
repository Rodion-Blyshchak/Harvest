import styles from '../Assortment.module.scss'
import Button from '../../../../ui/Button/Button'
import { useState } from 'react'
import AssortmentFiltersSelect from './AssortmentFiltersSelect'
import Burger from '../../../../ui/Burger/Burger'

const AssortmentFilters = ({ stateData, setStateData }) => {
  const [isBurger, setIsBurger] = useState(false)

  const burgerActive = () => {
    setIsBurger(true)
  }

  return (
    <>
      <AssortmentFiltersSelect
        className={styles.filters}
        stateData={stateData}
        setStateData={setStateData}
      />
      <div className={styles.buttonBurger}>
        <Button buttonType="white" onClick={() => burgerActive()}>
          ФІЛЬТРАЦІЯ
        </Button>
      </div>
      <Burger isBurger={isBurger} setIsBurger={setIsBurger}>
        <AssortmentFiltersSelect
          stateData={stateData}
          setStateData={setStateData}
        />
      </Burger>
    </>
  )
}

export default AssortmentFilters
