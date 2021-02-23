import { result } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';

function StockTable(props) {

    const [keyword, setKeyword] = useState("");
    const [data, setData] = useState({data:[],lowerData:[]});
    
    useEffect(() => {
	

        //let today = new Date()
       // let year = today.getFullYear(); 
       // let mon = String(today.getMonth()+1).length <2 ? "0"+String(today.getMonth()+1) : String(today.getMonth()+1)
        //let day = String(today.getDate()).length <2 ? "0"+String(today.getDate()) : String(today.getDate())
        //let date = year+"-"+mon+"-"+day

        fetch("http://localhost:8080/stockname?date=2021-02-19	")
        .then(res => res.json())
        .then(result => {	
            setData({
                data: result,
                lowerData: result.map(val => val['stockName'].toLowerCase())
            })
        })
        
    },[])

    const keywordHandler = (e) => {
        setKeyword(e.target.value.toLowerCase())
    }


    const filterMethod = (keyword) => {

        return (data['data'].map((value, idx) => {
            if (data['lowerData'][idx].indexOf(keyword) !== -1) {
                return (
                    <tr key={idx}>
                        <td>{value['stockCode']}</td>
                        <td className="nameTag" onClick={props.stockNameHandler}>{value['stockName']}</td>
                <td>{value['close']} ( <span className="angle"></span> {value['rate']}%)</td>
                    </tr>
                );

            }
        }));
    }

    // stlye 바꾸는거랑 tag 다시생성해주는거 뭐가 속도 더 빠른지 비교

    return (
        <React.Fragment>
            <div className="div_search_bar">
                <input className="search_bar" type="text" onChange={keywordHandler} />
            </div>
            <div className="Info-size">
                <Table>
                    <thead className ="stock_header">
                        <tr>
                            <th>종목 코드</th>
                            <th>종목명</th>
                            <th>주가 <span style={{fontSize:"0.5rem"}}>(17시 09분 21초 기준)&nbsp;&nbsp;&nbsp;<i className="fas fa-redo"></i></span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterMethod(keyword)}
                    </tbody>
                </Table>
            </div>
        </React.Fragment>
    );
}


function ThemeTable(props) {

    const [keyword, setKeyword] = useState("");
    const [data, setData] = useState({data : [], lowerData: []});

    useEffect(() => {
        let today = new Date()
        let year = today.getFullYear(); 
        let mon = String(today.getMonth()+1).length <2 ? "0"+String(today.getMonth()+1) : String(today.getMonth()+1)
        let day = String(today.getDate()).length <2 ? "0"+String(today.getDate()) : String(today.getDate())
        let date = year+"-"+mon+"-"+day
        
        fetch("http://localhost:8080/getthemeinfo?date=2021-02-19")
        .then(res => res.json())
        .then(result => {
            setData({
                data : result,
                lowerData : result.map(value => (value['themename'].toLowerCase()))
            })
        })       
    },[])

    const keywordHandler = (e) => {
        setKeyword(e.target.value.toLowerCase())
    }
  
    const filterMethod = (keyword) => {
        return (
            data['data'].map((value, idx) => {
                if (data['lowerData'][idx].indexOf(keyword) !== -1) {
                    return (
                        <tr key={idx}>
                            <td>{value['themename']}</td>
                            <td>
                                {value['splitNames'].map((value, idx) => (
                                    <span key={idx}><span className="nameTag" onClick={props.stockNameHandler}>{value}</span>&emsp;</span>))}
                            </td>
                                <td>{value['rate']}</td>
                        </tr>
                    );

                }
            })
        );
    }

    return (
        <React.Fragment>
            <div className="div_search_bar">
                <input className="search_bar" type="text" onChange={keywordHandler} />
            </div>
            <div className="Info-size">
                <Table>
                    <thead className="theme_header">
                        <tr>
                            <th>테마명</th>
                            <th>종목명</th>
                            <th>평균 변동률<span style={{fontSize:"0.5rem"}}> (전일 기준)</span></th>
                        </tr>
                    </thead>
                    <tbody className= "theme_body">
                        {filterMethod(keyword)}
                    </tbody>
                </Table>
            </div>
        </React.Fragment>
    );

}


export { StockTable, ThemeTable };