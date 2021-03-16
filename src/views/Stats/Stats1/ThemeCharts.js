import React, { useState,useEffect } from "react";
import {Line} from 'react-chartjs-2'
import {Card,CardHeader,CardBody,Table} from 'reactstrap'
import Chart from 'react-google-charts'

function ThemeChart(props){
    const [rawData,setRawData] = useState([])
    let chartData = []
  
    useEffect(() => {
        const eventSource = new EventSource('http://localhost:8080/toptheme')
        eventSource.onmessage = event =>{
            const tmp = JSON.parse(event.data);
            setRawData(tmp)
        }          
    },[])
   
   
    const editRawData = () => {  
        if(rawData.length == 0){
            console.log("pass")
        }
        else{
            let curTheme = rawData[0]['themename']
            let curRate = rawData[0]['themerate']

            let tmpNameList = []
            let tmpPriceList = []
            let tmpChagePriceList = []
            let tmpChangeRateList = []

            rawData.map((x,idx) => {
                
                if(idx == rawData.length-1){
                        
                    let tmp = {
                        themename:curTheme,
                        themerate:curRate,
                        name:tmpNameList.slice(),
                        tradePrice:tmpPriceList.slice(),
                        changePrice:tmpChagePriceList.slice(),
                        changeRate:tmpChangeRateList.slice()
                    }

                    chartData.push(tmp)

                    tmpNameList.length = 0
                    tmpPriceList.length = 0
                    tmpChagePriceList.length = 0
                    tmpChangeRateList.length = 0

                    curTheme = x['themename']
                    tmpNameList.push(x['name'])
                    tmpPriceList.push(x['tradePrice'])
                    tmpChagePriceList.push(x['changePrice'])
                    tmpChangeRateList.push(x['changeRate'])

                    tmp = {
                        themename:curTheme,
                        themerate:x['themerate'],
                        name:tmpNameList.slice(),
                        tradePrice:tmpPriceList.slice(),
                        changePrice:tmpChagePriceList.slice(),
                        changeRate:tmpChangeRateList.slice()
                    }

                    chartData.push(tmp)
                }
                else if(x['themename'] != curTheme){
                    let tmp = {
                        themename:curTheme,
                        themerate:curRate,
                        name:tmpNameList.slice(),
                        tradePrice:tmpPriceList.slice(),
                        changePrice:tmpChagePriceList.slice(),
                        changeRate:tmpChangeRateList.slice()
                    }
                    
                    chartData.push(tmp)
              
                    tmpNameList.length = 0
                    tmpPriceList.length = 0
                    tmpChagePriceList.length = 0
                    tmpChangeRateList.length = 0
        
                    curTheme = x['themename']
                    curRate = x['themerate']
                    tmpNameList.push(x['name'])
                    tmpPriceList.push(x['tradePrice'])
                    tmpChagePriceList.push(x['changePrice'])
                    tmpChangeRateList.push(x['changeRate'])

                    
                }
                else{
                    curTheme = x['themename']
                    curRate = x['themerate']
                    tmpNameList.push(x['name'])
                    tmpPriceList.push(x['tradePrice'])
                    tmpChagePriceList.push(x['changePrice'])
                    tmpChangeRateList.push(x['changeRate'])
                }    
            })
        }
    }

    const chart = () => {
        editRawData()
        if(chartData.length != 0){
            const data = {series:[]}
            const a = []
            const options = {
                series: {
                    useColorValue: true
                }
            };
    
                let tmp = [['테마명','종목명','현재가','등락률'],['테마명',null,0,0]]
                 chartData.map((x) => {
                    tmp.push([x['themename'],"테마명",x['themerate'],x['themerate']])
                })

                chartData.map((val,idx) => {
                    val['name'].map((val2,idx2) => {
                        tmp.push([val2,val['themename'],val['changeRate'][idx2],val['changeRate'][idx2]])
                    })
                })
            

            return(
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="TreeMap"
                    loader={<div>Loading Chart</div>}
                    data={tmp}
                     options={{
                        highlightOnMouseOver: true,
                     
                        minHighlightColor: '#8c6bb1',
                        midHighlightColor: '#9ebcda',
                        maxHighlightColor: '#edf8fb',
                        minColor: '#8c6bb1',
                        midColor: '#9ebcda',
                        maxColor: '#ee8100',
                        headerHeight: 15,
                        height: 500,
                        useWeightedAverageForAggregation: true,
                     }}
                />
            )
            
       
       
        }
             
    }

    return(
        <Card className="stats_wrapper">
            <CardHeader tag="h2">테마별 상승률</CardHeader>
                <CardBody>
                    {chart()}
            </CardBody>
        </Card>
    )

}

export {ThemeChart}

