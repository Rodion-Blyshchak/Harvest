import { useState } from 'react'
import Select from '../../../../ui/Select/Select'

const AssortmentFiltersSelect = ({ className, stateData, setStateData }) => {
  const [selectedSort, setSelectedSort] = useState('')

  const sortData = (sort) => {
    setSelectedSort(sort)
    setStateData(
      [...stateData].sort((a, b) => a[sort].localeCompare([b[sort]]))
    )
  }

  return (
    <div className={className}>
      <Select
        value={selectedSort}
        onChange={sortData}
        defaultValue="ФІЛЬТРАЦІЯ"
        options={[
          { value: 'title', name: 'По назві' },
          { value: 'thumbnailUrl', name: 'По картинці' },
        ]}
      />
    </div>
  )
}

export default AssortmentFiltersSelect
