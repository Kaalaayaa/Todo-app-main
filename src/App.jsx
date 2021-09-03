import './App.css'
import Header from './components/Header'
import CreateTodo from './components/CreateTodo'
import TodoApp from "./components/TodoApp"
import { TodosContextProvider } from './contexts/TodosContext'
import { ThemeContextProvider, useThemeContext } from './contexts/ThemeContext'

function Layout(){

    const [theme , setTheme] = useThemeContext()

    // const classes = theme === "light" ? "body light" : "body dark"
    const classes = "body " + theme

    return(
    <div className={classes}>
        <div className="backgroundImage"></div>
        <div className="todoAppWrapper">
            <Header />
            <CreateTodo />
            <TodoApp />
        </div>
        <div className="emptyBackground"></div>
    </div>
    )
}

function App(){
    return(
            <ThemeContextProvider>
            <TodosContextProvider>
                <Layout />
            </TodosContextProvider>
            </ThemeContextProvider>

    )
}

export default App