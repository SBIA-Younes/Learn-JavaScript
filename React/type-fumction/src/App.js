
import { useState, useEffect, useCallback, useMemo } from 'react';
import Profile from './components/Profile';



function App () {
  
  
  const [count, setCount] = useState(1)
  const [profile, setProfile] = useState({})
  const [dark, setDark] = useState(false)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then(response => response.json())
    .then(json => setProfile(json)).catch(err =>{
      console.log(err);
    })
    
  },[count])
  
  const memoRizedValue = useMemo(() => {
      console.log('je suis dans la fonction memoRizedValue');
      return count >= 10
    }
    ,[count])

    console.log(memoRizedValue);
  const geDark =  ()=>{
      console.log('je suis dans le goDark');
      setDark(!dark);
      if (!dark) {
        document.body.classList.add('bg-secondary')
      } else {
        document.body.classList.remove('bg-secondary')
        
      }
    }


  const classBtnThems = dark ? 'btn-light' : 'btn-dark'
  const textRtnThemes = dark ? 'Rendre clair' : 'Remdre sombre'

  return (
    <div className='container mt-4'>
      <h1 className='text-center'>useMemo()</h1>
      
      {memoRizedValue && (<div className='alert alert-danger' role='alert'>STOP!!!</div> )}

      <button className='btn btn-info mb-3' onClick={()=>{!memoRizedValue && setCount(count +1)}}>Increment {count}</button>
      <button className={`btn ${classBtnThems} mb-3 float-right`} onClick={geDark}>{textRtnThemes}</button>

      <Profile profile={profile} count={count}/>

    </div>
  );
}

export default App;
