import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem, Badge, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function StockNameList(props) {

    const [data, setData] = useState([])


    useEffect(() => {

        let url = new URL("http://localhost:8080/newsstocks")

        url.search = new URLSearchParams({ "selectedDay": props.day }).toString()

        fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(result => {
                if (result == "") { }
                else {
                    setData(result)
                }
            })
    }, [props.day])

    const getList = (value) => {
        return (value.map((value, idx) => (
            <ListGroupItem className="name-list" tabIndex="1" key={idx} onClick={props.stockNameHandler}>{value['filterValue']}<Badge>{value['valueNumber']}</Badge></ListGroupItem>
        )))
    }



    return (
        <div className="news-wrapper">
            <div className="stock-curday">{props.day}</div>
            <ListGroup>
                {getList(data)}
            </ListGroup>
        </div>
    )
}

export default StockNameList;