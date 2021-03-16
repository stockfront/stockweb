import React, { useEffect, useState, } from 'react'
import { Table } from 'reactstrap'

function ThemeRow(props) {

  const [data, setData] = useState([{themename:"",themerate:""}])
  const [to,setTo] = useState()

  // Api 생성 후 작성해주기
  useEffect(() => {

    fetch("http://localhost:8080/themerate", { method: 'GET' })
        .then(res => res.json())
        .then(result => setData(result))

    setTimeout(() => {
      fetch("http://localhost:8080/themerate", { method: 'GET' })
        .then(res => res.json())
        .then(result => setData(result))
    }, 30000)

  },[])

  const getRows = (data) => {

    return (data.map((val, idx) => {
      return (
        <tr key={[val.themename,val.themerate]} onClick={props.rowClickHandler}>
          <td>{val.themename}</td>
          <td>{val.themerate}</td>     
        </tr>
      )
    }))
  }


  return (

    <Table className="themeWrapper" hover>
      <thead>
        <tr>
          <th>테마</th>
          <th>등락률</th>
          {/* <th>상승</th>
          <th>보합</th>
          <th>하락</th>
          <th>최고 상승</th>
          <th>등락률</th> */}
        </tr>
      </thead>
      <tbody>
        {getRows(data)}
      </tbody>
    </Table>

  )
}

export default ThemeRow;