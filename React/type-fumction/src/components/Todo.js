import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import { v4 as uuidv4 } from 'uuid';

function Todo() {

  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy Milk', completed: false },
    { id: 2, text: 'Go to the Gym', completed: false },
    { id: 3, text: 'Buy Cheese', completed: true }
  ]);

  const toggleCompleted = (id) =>{
    setTodos(prevTodo => prevTodo.map(todoItem => {
      if (todoItem.id === id) {
        return {...todoItem, completed: !todoItem.completed}
      }
      return todoItem;
    }))
  }

  const MyTodo = () => {
    return todos.map(todoItem => {
      if (!todoItem.completed) {
        return (
          <li key={todoItem.id} className='list-group-item' style={{display:'flex',justifyContent:'space-between'}} >{todoItem.text} {' '}
          <button onClick={()=> toggleCompleted(todoItem.id)} className='btn btn-warning'>
            Toggle Completed
          </button>
          </li>
        );
      }
      return null;
    });
  };

  const addNewTodo = (newTodo) => {

    setTodos([...todos, {
      // id:uuidv4(),
      id:todos.length + 1,
      text:newTodo,
      completed:false
    }])
    console.log(todos);
  }

  const completedCount = todos.filter(todoItem => !todoItem.completed).length
  return (
    <div>
      <h1 className='text-center'> {completedCount} To-Do </h1>
      <ul className='list-group'>
        <MyTodo /> 
      </ul>

      <AddTodoForm addNewTodo={addNewTodo}/>
    </div>
  );
}

export default Todo;
