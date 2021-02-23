import React, { useEffect, useState } from 'react'
import {Card,CardHeader,CardBody,
        Table} from 'reactstrap'

function DailyVolume(props){

    const [data,SetData] = useState([])

    useEffect(()=>{

        fetch("http://localhost:8080/getdailyvolume",{method:"GET"})
        .then(res => res.json())
        .then(result => {console.log(data); SetData(result)})

    },[])

    const getList = (data) =>{
        return (
            data.map((value,idx)=>{

                return(
                <tr key={idx}>
                    <td>{value.stockName}</td>
                    <td>{value.volume}</td>
                    <td>{value.avg_volume}</td>
                    <td>{value.times}</td>
                </tr>
                )
            })
        )
    }

    return (
        <Card className="stats_wrapper">
        <CardHeader tag="h2">거래량 급증</CardHeader>
        <CardBody>
            <Table>
                <thead>
                    <tr>
                        <th>
                            종목명
                        </th>
                        <th>
                            거래량
                        </th>
                        <th>
                            평균 거래량
                        </th>
                        <th>
                            거래량/평균거래량
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {getList(data)}                                   
                </tbody>
            </Table>
        </CardBody>
    </Card>
    )
}

export {DailyVolume};