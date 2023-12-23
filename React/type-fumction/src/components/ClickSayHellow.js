import {useState, useEffect} from 'react'
import useUpdateDocTitle from '../hooks/useUpdateDocTitle'

function ClickSayHellow() {
  
  const [text, setText] = useState('')
  const [isTrue, setIsTrue] = useState(true)

  useEffect(() => {
    if (isTrue) {
      setText('Bomjout')
    } else {
      setText('Bonsoir')
    }
    
  }, [isTrue])
  

  useUpdateDocTitle(text)
  

  return (
    <button onClick={()=>setIsTrue(!isTrue)}>Cliquer</button>
  )
}

export default ClickSayHellow