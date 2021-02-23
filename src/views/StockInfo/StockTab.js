import React, { useEffect, useState } from 'react';

import { Table } from 'reactstrap';

function ThemeTab(props) {

    const [tableTag, setTableTag] = useState(<tr></tr>)



    useEffect(() => {

        let url = new URL('http://localhost:8080/themetab');

        url.search = new URLSearchParams({ 'stockName': props.stockName }).toString();

        if (props.stockName !== "") {
            fetch(url, { method: 'GET' })
                .then(res => res.json())
                .then(result => {
                    setTableTag(result.map((value, idx) => (<tr key={idx}>
                        <td className="data-th">{value['themeName']}</td>
                        <td className="data-td">{value['content']}</td>
                        <td>{value['reg_date']}</td>
                    </tr>)))
                });
        }

    }, [props.stockName])


    console.log("themetab 실행 ");

    return (
        <div className="Info-size2">
            <Table>
                <thead className="themeTab-thead">
                    <tr>
                        <th>테마</th>
                        <th>내용</th>
                        <th>등록 일자</th>
                    </tr>
                </thead>
                <tbody>
                    {tableTag}
                </tbody>
            </Table>
        </div>
    );
}

function NewsTab(props) {

    const [tableTag, setTableTag] = useState(<tr></tr>);

    useEffect(() => {

        var url = new URL('http://localhost:8080/newstab');

        url.search = new URLSearchParams({ 'stockName': props.stockName }).toString();

        if (props.stockName !== "") {
            fetch(url, { method: 'GET' })
                .then(res => res.json())
                .then(result => {
                    setTableTag(result.map((value, idx) => (
                        <tr key={idx}>
                        <td><a href={value['newLink']} target="_blank">{value['newsTitle']}</a></td>
                        <td>{value['reg_date']}</td>
                    </tr>
                    )))
                });
        }
    }, [props.stockName])    

    return (
        <div className="Info-size2">
            <Table>
                <thead className="newsTab-thead">
                    <tr>
                        <th>뉴스</th>
                        <th>등록 일자</th>
                    </tr>
                </thead>
                <tbody>
                    {tableTag}
                </tbody>

            </Table>
        </div>
    );
}

export {NewsTab};
export default React.memo(ThemeTab)


