import React,{useState} from "react";
import {Button,Row,Col,Card,CardHeader,CardBody} from "reactstrap";
import {Get,GetTheme} from './FetchData';
import search_icon from './search_magnifying_glass_icon_149392.png';

export function Manage(){
const[stockName,setStockName] = useState(); 
const[input,setInput] = useState(false)

    return (
        <div>
                <Card>
                    <CardHeader>

                    
                    </CardHeader>
                    <CardBody>
                        <input className='search_icon' id="stockName" type="text"/>
                        <input type="image" src={search_icon} width='25' height='25'
                        onClick={() => {setStockName(document.getElementById('stockName').value);}}/>
                                <Get stockName={stockName} input={input}/>
                    </CardBody>
                </Card>
    
                <Row>
                     <Col>
                        <GetTheme/>
                    </Col>
                </Row>
                    
        </div>
    );
}