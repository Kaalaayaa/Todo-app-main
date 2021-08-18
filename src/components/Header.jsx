import React from 'react'
import { FaMoon } from 'react-icons/fa';

function Header(){
    return(
        <div className="header">
            <h1>TODO</h1>
            <FaMoon className="moon"/>
        </div>
    )
}

export default Header