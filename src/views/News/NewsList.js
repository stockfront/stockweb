import React, { useEffect, useState } from 'react';
import { CardHeader } from 'reactstrap';

function NewsList(props) {

    const [data, setData] = useState([]);

    useEffect(() => {

        let url = new URL("http://localhost:8080/newslist")
        url.search = new URLSearchParams({ "selectedDay": props.day, "filterValue": props.stockName }).toString();
        
        fetch(url, { method:"GET" })
            .then(res => res.json())
            .then(result => {setData(result)})
    }, [props.stockName])

    const getLists = (value) => {

        return (value.map((value,idx)=>(
            <li className="news" key={idx}><a href={value['newsLink']} target="_blank">{value['newsTitle']}</a><button onClick={props.addListHandler}>추가</button></li>
    )));
    }

    return (
        <div className="news-wrapper news-list">
            <CardHeader><span>{props.stockName}</span></CardHeader>
            <ul className="stock-news">
                {getLists(data)}
            </ul>
        </div>
    )
}

export default NewsList;