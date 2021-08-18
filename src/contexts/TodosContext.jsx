import React, { useState, useContext } from "react"

export const TodosContext = React.createContext()

export function TodosContextProvider(props) {
    const [todos, setTodos] = useState([
    { id: 58477, text: "Wash dishes", done: false },
    { id: 64851, text: "Bake a cake", done: true },
    { id: 59858, text: "Make a website", done: true },
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