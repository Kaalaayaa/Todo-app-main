import { useTodosContext } from '../contexts/TodosContext'
import { useState } from 'react'


function CreateTodo(){
    const [todo, setTodo] = useState("")
    const [todos , setTodos] = useTodosContext()

    function createTodoItem(e) {
        const id = Math.floor(Math.random() * 99)

        setTodos([...todos, {id, text:todo, done: false}])
    }

    function handleChange(event){
        setTodo(event.target.value)
    }

    function handleKeyPress(e) {
       if(e.key === 'Enter'){
     createTodoItem()
  } 
    }
    


    return(
        <div>
                <input 
                className="createTodo" 
                type="text"
                value={todo}
                placeholder="Create a new todo..."
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                />
        </div>
    )
}

export default CreateTodo