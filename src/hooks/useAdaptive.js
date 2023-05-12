import { useEffect, useState } from 'react'

const useAdaptive = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const match = matchMedia('(max-width: 768px')
    match.addEventListener('change', (event) => {
      setIsMobile(() => event.matches)
    })
    setIsMobile(() => match.matches)
  }, [])

  return isMobile
}

export default useAdaptive
