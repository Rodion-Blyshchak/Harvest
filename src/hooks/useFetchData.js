import { useEffect, useState } from 'react'

const useFetchData = (url) => {
  const [stateData, setStateData] = useState([])
  const [numbers, setNumbers] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(() => true)

      const response = await fetch(
        `${url}?_start=${numbers}&_page=${numbers + 1}&_limit=6`
      )

      const data = await response.json()

      setStateData((prev) => [...prev, ...data])
      setIsLoading(() => false)
    }

    fetchData()
  }, [numbers])

  useEffect(() => {
    if (isLoading) {
      return
    }

    const dataObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNumbers((prev) => prev + 1)

            // observer.unobserve()
          }
        })
      },
      {
        rootMargin: '100px 0px 0px ',
      }
    )

    dataObserver.observe(document.querySelector('#loading'))
  }, [])

  return { stateData, setStateData, isLoading }
}

export default useFetchData
