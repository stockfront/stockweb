import React, { useEffect, useState } from 'react';
import NewWindow from 'react-new-window';
import {StockMemo} from './StockMemo';
import {ThemeMemo} from './ThemeMemo';
import AddNewsBtn from './AddNewsBtn';

function MemoPlugin(props) {

    
    const [isWindowOpen, setIsWindowOpen] = useState(false)
    const [data,setData] = useState([{"stockmemo":"","themememo":"","reg_date":""}]
    )

    const [page,setPage] = useState(0)

    const windowOpenHandler = () => {
        setIsWindowOpen(!isWindowOpen)
    }

    //최초 한번 실행되도록, 일별로 memo insert 해주는것
    useEffect(()=>{      
        fetch("http://localhost:8080/getmemo?index=-1",{method:"GET"})
    },[]) 

    useEffect(()=>{

        let url = new URL("http://localhost:8080/getmemo")
        url.search = new URLSearchParams({"index":page}).toString()
       
        fetch(url,{method:"GET"})
        .then(res => res.json()) 
        .then(result => {  
            
            setData(result);
        })        

    },[isWindowOpen,page])

    const indexHandler = (e) => {

        let page_index = parseInt(e.target.innerHTML.replace(" ","")-1)
        if(page_index == 3 || page_index == 4 ) {return}
        setPage(page_index)
    }

    const AddNewsHandler = () =>{

    }

    const getPagination = () => { 

            let tag=[];

            for(let i=1; i<=5; i++)
            {
                tag.push(<button key={i} onClick={indexHandler}>{i}</button>)
            } 
            return tag
        }
    
    

    return (
        <div className="news-Flugin">
    
                    <button onClick={windowOpenHandler}> <i className="far fa-newspaper fa-2x"></i></button>

                    {isWindowOpen &&
                        (<NewWindow features={{ "titlebar": "no", "toolbar": "no" }}
                            onUnload={windowOpenHandler}>
                            <div className="memo_wrapper">
                            <div className="memo_header"><h2>{data[0].reg_date}</h2></div>
                                <fieldset>
                                    <legend>메모장</legend>
                                    <StockMemo memo={data[0].stockmemo} date={data[0].reg_date}/>                        
                                </fieldset>
                           
                                {/* <fieldset>
                                    <legend>테마 메모장</legend>
                                    <ThemeMemo memo={data[0].themememo} date={data[0].reg_date}/>
                                 
                                </fieldset> */}
                                <fieldset>
                                    <legend>뉴스</legend>
                                    <a href="www.naver.com" target="_blank">네이버 뉴스</a>
                                    {/* <AddNewsBtn/> */}
                                    <button onClick={()=>{
                                        alert("실행!")
                                    }}>추가</button>
                                </fieldset>
                           <div className="memo_footer">
                               {getPagination()}
                           </div>
                           </div>
                        </NewWindow>)}
    
        </div>
    )
}

export default MemoPlugin;


