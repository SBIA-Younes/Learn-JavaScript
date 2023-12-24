import { useDebugValue, useEffect, useState } from "react"

const useFetch = (fetchUrl)=> {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await fetch(fetchUrl);
      if (!response.ok) {
        throw new Error("HTTP error! status: ${response.status}")
      }
      
      const fetchedData = await response.json()
      setData(fetchedData);
      setIsLoading(false);

    } catch (error) {
      console.log(error.message);
    }
  }
  
  useEffect(()=>{
    fetchData()
  })
  return {data, isLoading}
}

export default useFetch