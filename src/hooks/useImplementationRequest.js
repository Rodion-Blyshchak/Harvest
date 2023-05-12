import { useEffect, useState } from 'react'
import useGetParams from './useGetParams'
import useMakeRequest from './useMakeRequest '

const useImplementationRequest = () => {
  const getParams = useGetParams()
  const [isLoading, setIsLoading] = useState(true)
  const [getData, setGetData] = useState(null)

  useEffect(() => {
    const getAssortmentItem = async () => {
      if (getParams.id) {
        const stateFetch = await useMakeRequest(
          `https://jsonplaceholder.typicode.com/photos/${getParams.id}`
        )
        setGetData(stateFetch)
        setIsLoading(false)
      }
    }

    getAssortmentItem()
  }, [getParams.id])

  return { isLoading, getData }
}

export default useImplementationRequest
