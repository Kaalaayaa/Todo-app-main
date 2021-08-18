import './App.css'
import Header from './components/Header'
import CreateTodo from './components/CreateTodo'
import TodoApp from "./components/TodoApp"
import { TodosContextProvider } from './contexts/TodosContext'

function App(){
    return(
        <div className="body">
            <div className="backgroundImage"></div>
            <div className="todoAppWrapper">
            <TodosContextProvider>
                <Header />
                <CreateTodo />
                <TodoApp />
            </TodosContextProvider>
            </div>
            <div className="emptyBackground"></div>
        </div>
    )
}

export default App