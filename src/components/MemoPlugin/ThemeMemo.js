import React,{useEffect, useState} from 'react'


function ThemeMemo(props){

    const [text,setText] = useState("")
    
    const textHandler = (e) => {
        setText(e.target.value)
    }

    useEffect(()=>{
        setText(props.memo)
    },[props.memo])


    const sendDbHandler = (e) => {

        let body = {
            "reg_date" : props.date,
            "memo" : e.target.value 
        }
 
        fetch("http://localhost:8080/insertthemememo",
        {
            method:"POST",
            headers:{"Content-Type":"application/json;charset=utf-8"},
            body:JSON.stringify(body)
        })    
        
        
    }

    return(
        <textarea onChange={textHandler} onBlur={sendDbHandler} value={text}>

        </textarea>
    )
}

export {ThemeMemo};