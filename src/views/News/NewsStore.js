import React, { useEffect, useState } from 'react';
import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';
import checkIcon from './iconmonstr-plus-thin-16.png';
import removeIcon from './iconmonstr-minus-thin-16.png';

import NewsAddBtn from './NewsAddBtn';


function NewsStore(props) {


    const [data,setData] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8080/getstorednews",{method:"GET"})
        .then(res => res.json())
        .then(result => {
            setData(result)
        })

    },[props.selectedList])

    const tabAddHandler = (e) => {       
        
        let body = {
            "stockName" : e.target.parentNode.parentNode.parentNode.parentNode.childNodes[0].innerHTML,
            "newsTitle" :  e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].text,
            "newsLink" : e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].href
        }

        fetch("http://localhost:8080/tabAddStoredNews",
        {
        method:'POST',
        headers:{"Content-Type":"application/json;charset=utf-8"},
        body:JSON.stringify(body)
        }).then(res => res.json())
        .then(result => {alert(result)})

    }
    
    const memoAddHandler = (e) => {

        let body = {
            "newsTitle" : e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].text,
            "newsLink" : e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].href,
            "day" : e.target.parentNode.parentNode.parentNode.parentNode.childNodes[2].innerHTML
        }

        fetch("http://localhost:8080/memoAddStoredNews",
        {
        method:'POST',
        headers:{"Content-Type":"application/json;charset=utf-8"},
        body:JSON.stringify(body)
        }).then(res => res.json())
        .then(result => alert(result))
    }

    const deleteHandler = (e) => {
     
        let body = {
            "newsTitle" : e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].text
        }
        
        fetch("http://localhost:8080/deletestorednews",
        {   method:"POST",
            headers:{"Content-Type":"application/json;charset=utf-8"},
            body:JSON.stringify(body)
        }).then(() => {
            fetch("http://localhost:8080/getstorednews",{method:"GET"})
            .then(res => res.json())
            .then(result => {
                setData(result)
            })
        })

    }

    const getList = (data) => {
        return (
            data.map((value,idx) => (                
                <tr key={idx}>
                <td className="testcolor">{value['stockName']}</td>
                <td><a href={value['newsLink']} target="_blank">{value['newsTitle']}</a></td>
                <td>{value['reg_date']}</td>
                <td><NewsAddBtn tabAddHandler={tabAddHandler} memoAddHandler={memoAddHandler}/></td>
                <td><div onClick={deleteHandler}><img src={removeIcon}/></div></td>
            </tr>
            )) 
        )
    }

    return (
        <div className="news-wrapper">
             <Table className ="stored-news">
                <thead>
                    <tr>
                        <th>분류</th>
                        <th>뉴스</th>
                        <th>일자</th>                       
                        
                    </tr>
                </thead>
                <tbody>
                  {getList(data)}
                </tbody>
            </Table>
        </div>
    );
}

export { NewsStore };