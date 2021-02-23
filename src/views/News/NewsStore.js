import React, { useEffect, useState } from 'react';
import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';
import checkIcon from './iconmonstr-plus-thin-16.png';
import removeIcon from './iconmonstr-minus-thin-16.png';


function NewsStore(props) {


    const [data,setData] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8080/getstorednews",{method:"GET"})
        .then(res => res.json())
        .then(result => {
            setData(result)
        })

    },[props.selectedList])

    const addHandler = (e) => {       
        
        let body = {
            "stockName" : e.target.parentNode.parentNode.parentNode.childNodes[0].innerHTML,
            "newsTitle" : e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].text,
            "newsLink" : e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].href
        }

        fetch("http://localhost:8080/addstorednews",
        {
        method:'POST',
        headers:{"Content-Type":"application/json;charset=utf-8"},
        body:JSON.stringify(body)
        }).then(res => res.json())
        .then(result => {alert(result)})

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
                <td><div onClick={addHandler}><img src={checkIcon}/></div></td>
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