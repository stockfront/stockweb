import React, { useEffect, useState, useRef} from 'react';
import { Line } from "react-chartjs-2";
import { chartExample1 } from "../../variables/charts";


const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
  
    useEffect(() => {
      document.addEventListener("click", handleClick);
  
      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  };


function ThemeRow(props) {

    const [isClick,SetIsClick] = useState(false)
    const [data,SetData] = useState("")
    const ref = useRef();
    // useEffect(()=>{

    //     // Data를 한번 불러오고 유지하는 상태여도 메모리 문제가 없나..?

    //     if(isClick && D){
    //     fetch(url,{method:'GET'})
    //     .then(res => res.json())
    //     .then(result => SetData(result))
    //     }
    // },[isClick])

    const onClickHandler = () =>{

        SetIsClick(!isClick)
    }

    // const blurHandler = () => {
    //     console.log("kk")
    // }

    useOutsideClick(ref,()=>{
        SetIsClick(false)
    } )
    return (
        <>
            <tr onClick={onClickHandler} ref={ref}>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
            </tr>
            {isClick &&
            (<tr>
                <td colSpan="7">
                    <Line
                        data={chartExample1["data1"]}
                        options={chartExample1.options}>
                    </Line>
                </td>
            </tr>)
            }
        </>
    )
}

export default ThemeRow;