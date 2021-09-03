import React, { useState, useContext } from "react"

export const TodosContext = React.createContext()

export function TodosContextProvider(props) {
    const [todos, setTodos] = useState([
    { id: 58477, text: "Wash dishes", done: false, display: true},
    { id: 64851, text: "Bake a cake", done: true, display:true },
    { id: 59858, text: "Make a website", done: true, display: true },
])

    return (
        <TodosContext.Provider value={[ todos, setTodos ]}>
            {props.children}
        </TodosContext.Provider>
    )
}

export const useTodosContext = () => {
    return useContext(TodosContext)
}