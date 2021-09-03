import { useTodosContext } from "../contexts/TodosContext"


function StatusBar(){

    const [todos, setTodos] = useTodosContext()


    function deleteCompleted() {
        const newList = todos.filter((item) => item.done === false);
 
    setTodos(newList);
    }

    function showCompleted() {
        const newList = todos.map((item) => {
            if(item.done === false){
                item.display = false
            } else {
                item.display =true
            }
            return item
        });
 
    setTodos(newList);
    }

    function showActive() {
        const newList = todos.map((item) => {
            if(item.done === true){
                item.display = false
            } else {
                item.display = true
            }
            return item
        });
 
    setTodos(newList);
    }

    function showAll() {
        const newList = todos.map((item) => {
            item.display = true
            return item
        });
 
    setTodos(newList);
    }

    return(
        <div className="statusBar">
            <p>{todos.length} items left</p>
            <p className="status" onClick={showAll}>All</p>
            <p className="status" onClick={showActive}>Active</p>
            <p className="status" onClick={showCompleted}>Completed</p>
            <p className="status" onClick={deleteCompleted}>Clear Completed</p>
        </div>
    )
}

export default StatusBar