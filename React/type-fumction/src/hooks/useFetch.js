import { useDebugValue, useEffect, useState } from "react"

const useFetch = (fetchUrl)=> {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

   useDebugValue(data, val => {

    alert('useDebugValue')
    return JSON.stringify(val)
  })
  // Je suis en mode DEV
  // React-dev-Tool ouvert pour inspecter le custom hook

  useEffect(() => {
    fetch(fetchUrl)
    .then(response => response.json())
    .then(json => {
      setData(json);
      setIsLoading(false)
    })
    .catch(err=>console.log(err.message))
  }, [fetchUrl])

  return {data, isLoading}

}

export default useFetch