import React, { useEffect, useState } from 'react';
import ThemeRow from './ThemeRow';

function ThemeWrapper(props) {

    const [theme,setTheme] = useState("")

    const rowClickHandler = e => {
        setTheme(e.target.innerHTML)
    }  

    return (
        <div className="content">
        <ThemeRow rowClickHandler={rowClickHandler}/>
        {/* <ThemeModal theme={theme}/> */}
        </div >
    )

   
}

export default ThemeWrapper;

