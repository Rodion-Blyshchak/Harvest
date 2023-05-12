const useMakeRequest = async (url, method, data) => {
  try {
    let urlForRequest = '/api'
    if (url && url.includes('https://')) {
      urlForRequest = url
    } else if (url && url[0] !== '/') {
      urlForRequest += `/${url}`
    } else {
      urlForRequest += url
    }

    const config = {
      method: method ?? 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    if (!method || method === 'GET') {
      if (Object.keys(data ?? {}).length) {
        const params = new URLSearchParams()
        Object.entries(data ?? {}).map(([key, value]) =>
          params.append(key, value)
        )
        urlForRequest += `?${params.toString()}`
      }
    } else {
      config.body = JSON.stringify(data)
    }

    const requestResponse = await fetch(urlForRequest, config)
    const res = await requestResponse.json()

    if (res.statusCode && res.statusCode !== 200) return null
    return res
  } catch (error) {
    console.log('catch', error.message)
    return null
  }
}

export default useMakeRequest
