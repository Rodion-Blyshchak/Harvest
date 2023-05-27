import { useEffect, useState } from 'react'

const useAddBodyClassNameLock = (initialValue) => {
  const [isLock, setIsLock] = useState(initialValue ?? false)

  useEffect(() => {
    const { body } = document
    if (isLock) {
      body.classList.add('lock')
    } else {
      body.classList.remove('lock')
    }
  }, [isLock])

  return { isLock, setIsLock }
}

export default useAddBodyClassNameLock
