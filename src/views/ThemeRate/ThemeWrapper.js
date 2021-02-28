import React from 'react';
import { Table } from 'reactstrap';
import { Line } from "react-chartjs-2";
import { chartExample1 } from "../../variables/charts";
import ThemeRow from './ThemeRow';

function ThemeWrapper(props) {

    return (
        <div className="content">
            <Table className="themeWrapper" hover>
                <thead>
                    <tr>
                        <th>테마</th>
                        <th>등락률</th>
                        <th>상승</th>
                        <th>보합</th>
                        <th>하락</th>
                        <th>최고 상승</th>
                        <th>등락률</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>
                    <tr>
                    <td colSpan="7">
                        <Line
                            data={chartExample1["data1"]}
                            options={chartExample1.options}>
                        </Line>
                    </td>  
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>   
                 
                 <ThemeRow/>  
                 <ThemeRow/>   
                </tbody>

            </Table>
        </div >
    )

}

export default ThemeWrapper;