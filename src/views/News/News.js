import React, { useState } from "react";
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip,
    Toast,
    ToastHeader,
    ToastBody,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    CardText,
    Pagination,
    PaginationItem,
    PaginationLink,
    ListGroup,
    ListGroupItem,
    Badge,
    Container
} from "reactstrap";

import StockNameList from './StockNameList';
import NewsList from './NewsList';
import {NewsStore} from './NewsStore';

function News(props) {

    const [stockName,setStockName] = useState("");

    const [selectedList,setSelectedList] = useState([]);

    const [day, setDay] = useState(() => {
        let today = new Date();

        let year = today.getFullYear()
        let month = today.getMonth() + 1
        month = month >= 10 ? month : '0' + month
        let day = today.getDate()
        day = day >= 10 ? day : '0' + day

        return (year + "-" + month + "-" + day)
    })

    const stockNameHandler = (e) => {
       setStockName(e.target.childNodes[0].data)
    }

    const addListHandler = (e) => {

        let targetTag =  e.target.parentNode.childNodes[0]

        let body = { 
            "stockName": stockName ,
            "newsTitle": targetTag.text,
            "newsLink": targetTag.href,
            "selectedDay": "2021-02-10"}

        fetch("http://localhost:8080/newslistadd", { 
            method:"POST",
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)})
            .then(() => {setSelectedList(body)}) //DB 데이터 저장

        
    }

    const moveNextDayHandler = (e) => {
        alert("날짜 앞")
    }

    const movePreviousDayHandler = (e) => {
       alert("날짜 뒤")
    }

    return (
        <div className="content news-board">
            <Row>
                <Col sm="3">
                    <Col sm={{ size: 6}}>
                    
                    </Col>
                </Col>

            </Row>
            <Row>       
                <Col sm="3">
                    
                    <Card>
                        <StockNameList stockNameHandler={stockNameHandler} day={day} moveNextDayHandler={moveNextDayHandler}
                        movePreviousDayHandler = {movePreviousDayHandler}/>
                    </Card>

                </Col>
              
                <Col sm="4">
                    <Card>
                        <NewsList stockName = {stockName} addListHandler = {addListHandler} day={day}/>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card>
                        <NewsStore selectedList={selectedList}/>
                    </Card>
                </Col>
            </Row>

        </div >


    );
}

export { News };
