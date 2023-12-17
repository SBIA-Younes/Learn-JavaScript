import {useState} from 'react'

function AddTodoForm({addNewTodo}) {

  const [addTodo, setAddTodo] = useState('');

  const handleTodo = (e)=> {
  e.preventDefault(); 
  addNewTodo(addTodo)
  setAddTodo('')
  }

  return (
    <form className='mt-4' onSubmit={handleTodo}>
      <div className='card card-body'>
        <div className='form-group'>
          <label>Add Todo</label>
          <input className='form-control' type="text" name="todo" value={addTodo} onChange={(e)=> setAddTodo(e.target.value)} />
          <input className='btn btn-success mt-4' type="submit"/>
        </div>
      </div>
    </form>
  )
}

export default AddTodoForm