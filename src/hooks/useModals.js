import { useState } from 'react'

const useModals = (initialValue) => {
  const [isShowModal, setIsShowModal] = useState(initialValue ?? false)

  const onOpenModal = () => {
    setIsShowModal(() => true)
  }
  const onCloseModal = async (callback) => {
    if (callback) {
      await callback()
    }
    setIsShowModal(() => false)
  }

  return { isShowModal, onOpenModal, onCloseModal }
}

export default useModals
