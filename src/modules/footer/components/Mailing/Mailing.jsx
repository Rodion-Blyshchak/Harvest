import { useState } from 'react'
import useModals from '../../../../hooks/useModals'
import classNames from 'classnames'
import Input from '../../../../ui/Input/Input'
import Button from '../../../../ui/Button/Button'
import Modal from '../../../../ui/Modal/Modal'
import styles from './Mailing.module.scss'

const Mailing = () => {
  const [email, setEmail] = useState('')
  const [value, setValue] = useState('')
  const { isShowModal, onOpenModal, onCloseModal } = useModals()

  const addEmail = (newTodo) => {
    setEmail(() => newTodo)
  }

  const addValue = (addNew) => {
    setValue(() => addNew)
  }

  const addTodoHandler = () => {
    if (value) {
      addEmail({
        id: Date.now(),
        title: value,
      })

      setValue(() => '')

      onOpenModal()
    }
  }

  return (
    <div className={styles.mailing}>
      <p className={classNames(styles.text, 'uppercase pb-2.5')}>
        Підпишіться на нашу розсилку
      </p>
      <p className={styles.text}>
        Отримуйте першими інформацію про нові колекції та події в Harvest.
      </p>
      <div className={classNames(styles.form, 'mt-8')}>
        <Input
          value={value}
          type="email"
          onChange={(event) => addValue(event.target.value)}
          onKeyPress={(event) => event.key === 'Enter' && addTodoHandler()}
        >
          Введіть ваш e-mail
        </Input>
        <Button onClick={addTodoHandler} buttonType="grey">
          Підписатися
        </Button>
        <Modal isOpen={isShowModal} onClose={() => onCloseModal()}>
          <div className={styles.modal}>
            <p className={styles.modal__title}>
              Ви успішно підписалиля на нашу розсилку!
            </p>

            {/* Вставити якусь gif-ку про успішну підписку */}

            <p>
              Тепер Ви будете отримувати першими інформацію про нові колекції та
              події в Harvest.
            </p>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Mailing
