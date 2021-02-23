import React, { useState,useEffect } from "react";
import {Line} from 'react-chartjs-2'
import {Card,CardHeader,CardBody,
    Table} from 'reactstrap'


function ThemeChart(props){
    const [theme,setTheme] = useState({themeName : [],splitName : [], propfit: [],date : []})
    useEffect(() => {
        let today = new Date()
        let year = today.getFullYear(); 
        let mon = String(today.getMonth()+1).length <2 ? "0"+String(today.getMonth()+1) : String(today.getMonth()+1)
        let day = String(today.getDate()).length <2 ? "0"+String(today.getDate()) : String(today.getDate())
        let date = year+"-"+mon+"-"+"18"
        let tempName=''

        fetch("http://localhost:8080/getthemecharinfo")
        .then(res => res.json())
        .then(result => {
            setTheme({
                themeName : result.map(value => (value['themename'].toLowerCase())),
                splitName : result.map(value => (value['splitNames'])),
                propfit : result.map(value => (value['rate'])),
                date : result.map(value => value['reg_date'])
            })
        })       
    },[])

    const chart = () => {
        let temp = ''
        return(
            theme['themeName'].map(
                (val,idx) => {
                    return(
                        <div key={val}>a</div>
                    )
                }
            )
        )
    }

  

    return(
        <Card className="stats_wrapper">
        <CardHeader tag="h2">테마별 상승률</CardHeader>
        <CardBody>
            <tbody>
                {chart()}
            </tbody>
        </CardBody>
    </Card>
    )

}

export {ThemeChart}

