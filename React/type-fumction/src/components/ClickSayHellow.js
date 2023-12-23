import {useState, useEffect} from 'react'
import useUpdateDocTitle from '../hooks/useUpdateDocTitle'

function ClickSayHellow() {
  
  const [text, setText] = useState('')

  useUpdateDocTitle(text)
  

  return (
    <button onClick={()=>setText('Hello World !!')}>Cliquer</button>
  )
}

export default ClickSayHellow