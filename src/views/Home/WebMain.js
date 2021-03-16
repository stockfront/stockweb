import React from 'react'
import { ThemeChart } from './HotTheme/ThemeCharts'
import { Card, Row, Col, Table } from 'reactstrap'

function WebMain(props) {

    return (

        <div className="content">
            <Row>
                <Col sm="7">
                    <Row>
                        <Col> <Card style={{ "width": "100%" }}>

                            <Table>
                                <thead>
                                    <tr><th>종목명</th></tr>
                                    <tr><th>현재가</th></tr>
                                    <tr><th>등락률</th></tr>
                                    <tr><th>거래량</th></tr>
                                </thead>
                            </Table>
                        </Card>
                        </Col>
                        <Col> <Card style={{ "width": "100%" }}>

                            <Table>
                                <thead>
                                    <tr><th>종목명</th></tr>
                                    <tr><th>현재가</th></tr>
                                    <tr><th>등락률</th></tr>
                                    <tr><th>거래량</th></tr>
                                </thead>
                            </Table>
                        </Card></Col>

                    </Row>
                    <Row>
                        <Card style={{ "width": "100%" }}>
                            <ThemeChart />
                        </Card>
                    </Row>
                    <Row>
                        환율
                        <Card style={{ "width": "100%" }}>

                            <Table>
                                <thead>
                                    <tr><th>이름</th></tr>
                                    <tr><th>가격</th></tr>
                                    <tr><th>변동</th></tr>
                                    <tr><th>등락률</th></tr>
                                </thead>
                            </Table>
                        </Card>
                    </Row>

                </Col>
                <Col sm="5">

                    <Col sm="6"><Card style={{ "width": "100%", "height": "150px" }}>코스피</Card></Col>
                    <Col sm="6"><Card style={{ "width": "100%", "height": "150px" }}>코스닥</Card></Col>

                    <Col sm="6"><Card style={{ "width": "100%", "height": "50px" }}>나스닥</Card></Col>
                    <Col sm="6"><Card style={{ "width": "100%", "height": "50px" }}>다우</Card></Col>

                    <Col sm="6"><Card style={{ "width": "100%", "height": "50px" }}>비트코인</Card></Col>
                    <Col sm="6">
                        원자재
                        <Card style={{ "width": "100%", "height": "300px" }}>
                        <li>구리</li>
                        <li>철강</li>
                        <li>은</li>
                        <li>금</li>
                        <li>원유</li>
                        </Card>
                    </Col>
                    <Col sm="6">
                        식품
                        <Card style={{ "width": "100%", "height": "50px" }}>
                        <li>육류</li>  
                        <li>곡류</li>                
                        </Card>
                    </Col>


                </Col>
            </Row>

        </div>
    )
}

export { WebMain }