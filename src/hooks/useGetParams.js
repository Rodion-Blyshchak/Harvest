import { useEffect, useState } from 'react'

const useGetParams = () => {
  const [params, setParams] = useState({})

  useEffect(() => {
    let search = location.search
    if (search) {
      search = search.substring(1)
      const urlParamsFromSearch = new URLSearchParams(search)
      const urlParams = Object.fromEntries(urlParamsFromSearch)

      setParams(urlParams)
    }
  }, [])

  return params
}

export default useGetParams
