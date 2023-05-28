import Button from '../../ui/Button/Button'
import { useEffect, useState } from 'react'

const useModals = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const onOpenModal = () => {
    setIsShowModal(() => true)
  }
  const onCloseModal = async (callback) => {
    if (callback) {
      console.log('Перед await')
      await callback()
      console.log('Після await')
    }
    console.log('Закрили модалку')
    setIsShowModal(() => false)
  }

  return { isShowModal, onOpenModal, onCloseModal }
}

const Modal = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    const { body } = document
    if (isOpen) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = ''
    }

    return () => {
      body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center jc-center">
          <div className="absolute w-full h-full bg-black" onClick={onClose} />
          <div className="bg-white p-10 rounded z-10">{children}</div>
        </div>
      )}
    </>
  )
}

const Dev = () => {
  const { isShowModal, onOpenModal, onCloseModal } = useModals()

  const onClose = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 2000)
    })
  }

  return (
    <div className="_container">
      <div className="my-10">
        <Button onClick={onOpenModal}>Open modal</Button>
      </div>

      <Modal isOpen={isShowModal} onClose={() => onCloseModal(onClose)}>
        MODAL
      </Modal>
    </div>
  )
}

export default Dev
