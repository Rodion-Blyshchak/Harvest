import useAddBodyClassNameLock from '../../../../hooks/useAddBodyClassNameLock'
import AssortmentFiltersSelect from './AssortmentFiltersSelect'
import Button from '../../../../ui/Button/Button'
import Burger from '../../../../ui/Burger/Burger'
import styles from './AssortmentFilters.module.scss'

const AssortmentFilters = ({ stateData, setStateData }) => {
  const { isLock, setIsLock } = useAddBodyClassNameLock()

  return (
    <>
      <AssortmentFiltersSelect
        className={styles.filters}
        stateData={stateData}
        setStateData={setStateData}
      />
      <div className={styles.buttonBurger}>
        <Button buttonType="white" onClick={() => setIsLock(true)}>
          ФІЛЬТРАЦІЯ
        </Button>
      </div>
      <Burger
        isBurger={isLock}
        setIsBurger={setIsLock}
        className="py-5 flex justify-center"
      >
        <AssortmentFiltersSelect
          stateData={stateData}
          setStateData={setStateData}
        />
      </Burger>
    </>
  )
}

export default AssortmentFilters
