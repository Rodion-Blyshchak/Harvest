import classNames from 'classnames'
import styles from './Select.module.scss'

const Select = ({ options, defaultValue, value, onChange, selectType }) => {
  const selectClasses = classNames(
    styles.select,
    styles[`select__${selectType ?? 'default'}`]
  )

  return (
    <select
      className={selectClasses}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default Select
