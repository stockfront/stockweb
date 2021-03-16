import React, { useEffect,useState } from 'react';
import { Modal, ModalBody, ModalHeader, Table } from 'reactstrap';
import { chartExample1 } from "../../variables/charts";

function ThemeModal(props) {

    const [chartData, setChartData] = useState({ price: "", date: "" })
    const [stockData, setStockData] = useState([])

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    // props.theme 를 기준으로 데이터 가져오기
    useEffect(() => {

        fetch("http://localhost:8080/chartTest", { method: 'GET' })
            .then(res => res.json())
            .then(result => {
                let _price = []
                let _date = []
                result.map((val) => {
                    _price.push(val.close)
                    _date.push(val.date)
                })
                setChartData({
                    price: _price,
                    date: _date,
                })

            })

    }, [])

    const chartInfo = (canvas) => {

        let ctx = canvas.getContext("2d");

        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, "rgba(255,255,255,0.1)");
        gradientStroke.addColorStop(0.5, "rgba(255,255,255,0.1)");
        gradientStroke.addColorStop(0, "rgba(255,255,255,0.1)"); //blue colors

        return {
            labels: data.date,
            datasets: [
                {
                    label: "My First dataset",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: "#1f8ef1",
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointRadius: 0,
                    data: chartData.price,
                },
            ],
        };
    }

    const getStocks = (_stockData) => {

        // return (_stockData.map((val, idx) => {
        //     return (
        //         <tr key={작성}>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //         </tr>
        //     )
        // }))

        return(<div></div>)
    }

    return (
        <Modal isOpen={modal} toggle={toggle} size="xl" contentClassName="theme_chart">
            <ModalHeader tag="h2" toggle={toggle} style={{ color: "white" }}>
                #테마명
            </ModalHeader>
            <ModalBody className="okey">
                <div className="themeChart_wrapper">
                    <Line
                        data={chartInfo}
                        options={chartExample1.options}>
                    </Line>
                </div>
                <br />
                <Table>
                    <thead>
                        <tr style={{ color: "white" }}>
                            <th>종목명</th>
                            <th>종가</th>
                            <th>등락률</th>
                            <th>거래량</th>
                            <th>시가총액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getStocks(stockData)}
                    </tbody>
                </Table>
            </ModalBody>
        </Modal>
    )
}

export default ThemeModal