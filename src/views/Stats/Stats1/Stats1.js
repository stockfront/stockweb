import React, { useState } from "react";
import {DailyVolume} from './DailyVolume';
// import {ThemeChart} from '../../StockInfo/HotTheme/ThemeCharts'
import {   
    Row,
    Col  
} from "reactstrap";




export function Stats1(){
    return (
        <div className="content">
              <Row>
                <Col sm="5">
                    <DailyVolume/>
                </Col>
            </Row>


        </div>

    );
}