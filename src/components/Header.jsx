import React from 'react'
import { FaMoon } from 'react-icons/fa';
import { FaSun } from "react-icons/fa";
import { useThemeContext } from '../contexts/ThemeContext';

function Header(){

    const [ theme, setTheme ] = useThemeContext()

    function handleClick() {
        if(theme === "light") {
            setTheme("dark")
            console.log("them switched to dark")
        } else {
            setTheme("light")
            console.log("theme switched to light")
        }
    }


    return(
        <div className="header">
            <h1 className={theme === "dark" ? "dark" : ""} >TODO</h1>

            <FaMoon onClick={handleClick} className="moon"/>
            <FaSun onClick={handleClick} className="sun"/>
        
        </div>
    )
}

export default Header