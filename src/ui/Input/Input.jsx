import classNames from 'classnames'
import styles from './Input.module.scss'

const Input = ({ children, inputType, value, onChange, onKeyPress, type }) => {
  const inputClasses = classNames(
    styles.input,
    styles[`input__${inputType ?? 'form-control'}`]
  )

  return (
    <>
      <input
        className={inputClasses}
        type={type}
        placeholder={children}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </>
  )
}

export default Input
