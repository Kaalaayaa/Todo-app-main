import React, { useState, useContext } from "react"

export const ThemeContext = React.createContext()

export function ThemeContextProvider(props) {
    const [theme, setTheme] = useState("light")

    return (
        <ThemeContext.Provider value={[ theme, setTheme ]}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}