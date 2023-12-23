import { useState, useEffect } from "react"
import Search from "./Search"
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";
import TableUsers from "./TableUsers";


function MyContatcts() {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('');
  const [resultSearch, setResultSearch] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      setUsers(json);
      setIsLoading(false)
    })
    .catch(err=>console.log(err.message))
  }, [])

  const filterUsers = ()=>{
    const foundUsers = users.filter(user =>{ 
      return  Object.values(users)
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
        dataArray={users}
        />
    }
    </>
  )
}

export default MyContatcts