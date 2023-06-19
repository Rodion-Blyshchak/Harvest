import classNames from 'classnames'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Button.module.scss'

const Button = forwardRef(({ children, buttonType, onClick }, ref) => {
  const buttonClasses = classNames(
    styles.button,
    styles[`button__${buttonType ?? 'black'}`]
  )

  return (
    <button ref={ref} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  )
})

export default motion(Button)
