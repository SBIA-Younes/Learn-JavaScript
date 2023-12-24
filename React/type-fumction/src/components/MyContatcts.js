import { useState, useEffect } from "react"
import Search from "./Search"
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";
import TableUsers from "./TableUsers";
import useFetch from "../hooks/useFetch";


function MyContatcts() {

 
  const [search, setSearch] = useState('');
  const [resultSearch, setResultSearch] = useState([]);

  // Custom Hook
  const {data, isLoading} = useFetch('https://jsonplaceholder.typicode.com/users');

 
  const filterUsers = ()=>{
    const foundUsers = data.filter(data =>{ 
      return  Object.values(data)
      .join(' ')
      .toLowerCase()
      .includes(search.toLowerCase())
  })

  setResultSearch(foundUsers)

}


  useEffect(() => {
    if (search !== '') {
      filterUsers()
    } else {
      setResultSearch([]);
    }
  }, [search])
  
  

  useUpdateDocTitle(search)
  
  const handleChange = e => {
    setSearch(e.target.value)
  };

  const msgDisplay = (msg, color) => {
    return (
      <p style={{textAlign:'center', color: color}}>{msg}</p>
    )
  }
  
  return (
    <>
    { isLoading ? (msgDisplay('Veullez patienrer!.','red')) :
     ( <Search
        searchStr={search}
        searchHandler={handleChange}
      />)
    }

    { (resultSearch.length === 0 && search !== '') ? msgDisplay('Pas de resultat!', 'orange') :
     search === '' ? msgDisplay('Veuillez effectuer une recherceh', 'green') 
      // search === '' ? null
      :
      <TableUsers
        dataArray={resultSearch}
        />
    }
    </>
  )
}

export default MyContatcts