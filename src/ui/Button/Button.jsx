import classNames from 'classnames'
import styles from './Button.module.scss'

const Button = ({ children, buttonType, onClick }) => {
  const buttonClasses = classNames(
    styles.button,
    styles[`button__${buttonType ?? 'black'}`]
  )

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  )
}

export default Button
