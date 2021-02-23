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
    CardText
} from "reactstrap";

import { Line } from "react-chartjs-2";

import { chartExample1 } from "../../variables/charts";
import {StockTable, ThemeTable} from "./StockList";
import { NewsTab } from "./StockTab";
import ThemeTab from "./StockTab";

function StockInfo(props) {

    const [activeTab, setActiveTab] = useState('1');
    const [stockName, setStockName] = useState("삼성전자");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const stockNameHandler = (e) => {
        setStockName(e.target.outerText);
    }


    return (
        <div className="content">
            <Row>
                <Col sm="5">
                    <Card className="card-table">
                        <CardHeader tag="h2">STOCK LIST</CardHeader>
                        <CardBody>
                            <StockTable stockNameHandler = {stockNameHandler} />
                        </CardBody>
                    </Card>
                </Col>

                <Col sm="5">
                    <Card className="card-table">
                        <CardHeader tag="h2">THEMA LIST</CardHeader>
                        <CardBody>
                            <ThemeTable stockNameHandler = {stockNameHandler} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col sm="7">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h3">{stockName}</CardTitle>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={activeTab === '1' ? "active" : ""}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        정보
                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={activeTab === '2' ? "active" : ""}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        뉴스
                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                          <ThemeTab stockName = {stockName}/>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="12">
                                            <NewsTab stockName = {stockName} />
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="3">
                    <Row>
                        <Card>
                            <CardHeader>코스피 지수 실시간</CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Line
                                        data={chartExample1["data1"]}
                                        options={chartExample1.options}>
                                    </Line>
                                </div>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row>
                        <Card>
                            <CardHeader>코스닥 지수 실시간</CardHeader>
                            <CardBody>

                            </CardBody>
                        </Card>
                    </Row>
                </Col>
            </Row>


        </div>
    );
}

export { StockInfo };


