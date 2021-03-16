import { property, result, values } from 'lodash';
import React,{useState,useEffect} from 'react';
import { Card,CardHeader,CardBody } from 'reactstrap';
import {Post,Delete} from './FetchData';
import remove_icon from './trash_delete_remove_icon_149363.png'
import close_icon from './close_delete_remove_cross_icon_149504.png'
import edit_icon from './edit_modify_icon-icons.com_49882.ico'
import accept_icon from './check_accept_done_tick_icon_143633.png'

function GetList(props){
    let date = new Date();
    const [isAble,setIsAble] = useState(true);

    function toggle(){
        setIsAble(false);   
    }

    function edit(e){
        //console.log("asdf")
        // console.log(date.getMonth()+1)
        let _date = date.getFullYear()+"-"+date.getMonth()+1+"-"+date.getDate();
        let tmp = {
            "stockName" : props.stockName,
            "themeName" : e.target.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].value.replace(" ",""),
            "content" : e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].value,
            //"reg_date" : date
        }
        props.post(tmp);
    }

    return(      
        
     <Card>
        <CardHeader className="plugin-cardHeader">
        <input type='text' defaultValue={props.data.themeName} disabled = {isAble}/>
         <span>
            <button onClick={toggle}>
            <img src={edit_icon} width='25' height='25'/>
            </button>
            <button onClick={() => {props.del(props.idx);}}>
            <img src={remove_icon} width='25' height='25'/>
            </button>
            <button onClick={(e) => {edit(e);setIsAble(true)}}>
            <img src={accept_icon} width='25' height='25'/>
            </button>
            <button onClick={() => {props.cancel(props.idx); setIsAble(true) }}>
            <img src={close_icon} width='25' height='25'/>
            </button>
        </span>
        </CardHeader>
     <div className="plugin-cardbody">
        <textarea type="text-color" className="text-color" defaultValue={props.data.content} disabled = {isAble}/> 
    </div>
    </Card>
    

       
    )

}

function EditTheme(props){
    const [isAble,setIsAble] = useState(true);
    const [target,setTarget] = useState("#"+props.splitTheme);
    
    const onChange = (e) =>{
        setTarget(e.target.value)
        console.log(e.target.value)
    }

    function edit(e,idx,j){
        if(e.target.value != props.splitTheme){
            let tmp = []
            tmp = props.data[idx].split("#")
            let result = []
            for(let i=1; i<tmp.length; i++){
                if(i==j && target=="") continue
                else if(i ==j) result += e.target.value
                else result += "#"+tmp[i]
            }
           
            if(result.length == 0){
                if(idx == 0){
                    props.data.splice(idx+1)
                    props.setData(props.data.splice(idx+1))
                }
                else{
                    props.setData(props.data.slice(0,idx).concat(props.data.slice(idx+1)))
                }
            }
            else{
                props.setData(props.data.slice(0,idx).concat(result).concat(props.data.slice(idx+1)))         
            }
        }
       
      }

      return(
        <input className="input" type='text' 
            onBlur={(e) => {edit(e,props.idx,props.splitIdx)}}  
            onChange={onChange} value={target}/> 
      )
    
}

export {GetList,EditTheme};


     
// <li className ='data-form'>
// <div className='list-show'>
// <div className='list-show-header'>
// <span className='text-color' > 테마명 : 
// <span>{props.data.themeName}</span>
//  <span >
//     <button onClick={toggle}>수정</button>
//     <button onClick={() => {props.del(props.idx);}}>삭제</button>
//     <button onClick={(e) => {edit(e)}}>저장</button>
//     <button onClick={() => {props.cancel(props.idx); setIsAble(!isAble) }}>취소</button>
// </span>
// </span>
// </div>
// <div className='list-show-body'>
// <span className='span-form'>
// 테마내용 : <input type="text-color"  defaultValue={props.data.content} disabled = {isAble}/> 
// </span>
// </div>
// </div>

// </li>