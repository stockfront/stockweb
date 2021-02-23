import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {GetList,EditTheme} from './GetList'
import insert_icon from './add_insert_plus_icon_149546.png'
import _default from 'node-sass-package-importer';

function Get(props){
    const [data, setData] = useState([]);
    const [item,setItem] = useState([]);
    const [isCancel,setisCancel] = useState(false);

    let tmp = [];
    console.log("get : "+props.stockName)
useEffect(() => {
 
    const fetchData = async() => {
        let url = new URL('http://localhost:8080/get')
        url.search = new URLSearchParams({"stockName" : props.stockName})
        
        const response = await axios.get(url);
        setData(response.data);
      } 
      fetchData();

    },[props.stockName]);
 
    function dataDel(idx){
      console.log(data[idx]);
      let temp = {
        "stockName" : props.stockName,
        ...data[idx]
      }
      axios.post('http://localhost:8080/del',temp);
      setData(data.filter((x => x!==data[idx])));
    }

    function post(data){
     
      axios.post('http://localhost:8080/post',data);
    }

    function cancel(idx){
      data[idx].종목명 = data[idx].종목명+" ";
      setisCancel(!isCancel)
    }

    const insert = () =>{
      let tmp = {
        "themeName" : "",
        "content" : "",
      };
      setData(data.concat(tmp));
    }
    
    return(
      <div>
      <ul className='data-size'>
        {data.map( (data,i) => 
        <GetList cancel={cancel} stockName={props.stockName}
         post={post} key={data.themeName} idx={i} del={dataDel}  data={data}/> ) }
      </ul>
      <button onClick={insert}>
      <img src={insert_icon} width='25' height='25'/>
      </button>
      </div>
    );

    
}


function GetTheme(props){
  const [data, setData] = useState([]);
  const [cnt,setCnt] = useState(0);

  const insert = () =>{
    let tmp = ["#insert data"];
    setData(data.concat(tmp));
  }

  useEffect(() => {
      fetch("http://localhost:8080/themename")
      .then(res => res.json())
      .then(result => {
        setData(
          result.map(value => (value['themeName']))
        )
      }) 
    },[])
  
  return(
    <div>
      <button onClick={insert}>
        <img src={insert_icon} width='25' height='25'/>
      </button>
      {console.log(cnt),
        data.map( (val,i) => 
        <div key={val}>
          {val.split('#').map((data2,idx) => data2 ? 
          <span>
             <EditTheme count={cnt} setCount={setCnt} 
             key={data2} setData={setData} data={data} idx={i} splitTheme={data2} splitIdx={idx}/>  
          </span>
          : "")
          }
        </div> 
      ) }
     </div>     
  )

}


export {Get,GetTheme};

