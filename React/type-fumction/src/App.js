
import { useEffect, useState, useTransition} from 'react';
import './App.css'
import ClickSayHellow from './components/ClickSayHellow';
import MyContatcts from './components/MyContatcts';
import TableUsers from './components/TableUsers';
import Search from './components/Search';
import useUpdateDocTitle from './hooks/useUpdateDocTitle';
import useFetch from './hooks/useFetch';
import {fakeUsersGenerator} from './data/users';

const users = fakeUsersGenerator();
console.log(users);

function App () {
  

 
  const [search, setSearch] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  const [isPending, startTransition] = useTransition();

  // Custom Hook
  // const {data, isLoading} = useFetch('https://jsonplaceholder.typicode.com/users');

 
  const filterUsers = ()=>{
    const foundUsers = users.filter(data =>{ 
      return  Object.values(data)
      .join(' ')
      .toLowerCase()
      .includes(search.toLowerCase())
  })

  setResultSearch(foundUsers)

}


  useEffect(() => {
    if (search !== '') {
      startTransition(() => {
      filterUsers()
      })
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
    <div className='App'>
      <h1>My Contacts</h1>
      <p>Total: {users.length} membres</p>
      <Search
        searchStr={search}
        searchHandler={handleChange}
      />

    { (resultSearch.length === 0 && search !== '') ? msgDisplay('Pas de resultat!', 'orange') :
     search === '' ? msgDisplay('Veuillez effectuer une recherceh', 'green') 
      // search === '' ? null
      :
      <TableUsers
        dataArray={resultSearch}
        notification={isPending ? 'Loading...' : null}
        />
    }
    </div>
  )
}

export default App;
